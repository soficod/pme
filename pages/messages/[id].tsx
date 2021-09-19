import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../../styles/chat/Chat.module.css';
const Pusher = require('pusher-js');
import Echo from 'laravel-echo';
import { session_option } from '../../pme-data/cookie-option';
import { withIronSession } from 'next-iron-session';
import ChatUsersList from '../components/chat/ChatUsersList';
import Message from '../components/chat/Message';
import { color_set } from '../../pme-data/color-set';
const Messages =({user_token, users, id, myid}:any)=>
{
    const [isMobile, setIsMobile] = useState(false);
    const [menuOn, setMenuOn] = useState(false);

    console.log(users);
    
    const [echo, setEcho] = useState(null);
    const [selectedId, setSelectedId] = useState(id);
    const [key, setKey] = useState(0);

    useEffect(() => 
    {
        const techo = new Echo({
            broadcaster: 'pusher',
            key: process.env.NEXT_PUBLIC_MIX_PUSHER_APP_KEY,
            forceTLS: false,
            wsHost: process.env.NEXT_PUBLIC_BACKEND_HOST_WITHOUT_PORT,
            wsPort: 6001,
            disableStats: true,
            authorizer: (channel, options) => {
                return {
                    authorize: (socketId, callback) => {
                        axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/broadcasting/auth', {
                            socket_id: socketId,
                            channel_name: channel.name,
                        },
                        {
                            headers: {
                                Authorization: "Bearer "+user_token
                            }
                        })
                        .then(response => {
                            callback(false, response.data);
                        })
                        .catch(error => {
                            callback(true, error);
                        });
                    }
                };
            },
        });

        setEcho(techo);
    }, []);

    useEffect(() => 
    {
        setKey(key+1);
    },[selectedId]);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 800);
        window.addEventListener('resize', e => {
            setIsMobile(window.innerWidth <= 800);
            console.log("done");
        });
    }, []);
    
    return(
        <>
            <Head>
                <title>Messages - PMEI</title>
            </Head>
            {
            echo &&
            <>
            <div className={styles.pageContainer}>
                {
                    (!isMobile || menuOn) && 
                    <ChatUsersList
                        users={users}
                        setSelectedId={setSelectedId} 
                        selectedId={selectedId}
                    />
                }
                {
                    selectedId != "all" &&
                    <Message
                        key={key}
                        echo={echo}
                        user_token={user_token}
                        id={selectedId}
                        myid={myid}
                        user={users.filter((usr:any) => usr.id == selectedId)[0]}
                    />
                }
            </div>
            </>
            }
        </>
    );
}

export default Messages;

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}

Messages.getInitialProps = withIronSession(async ({query, req}:any) =>
{
    let user_token:string = "";
    let myid:any;
    const users = [];
    let user_res:any;
    if(typeof(req) != "undefined")
    {
        user_token = req.session.get('pmei-user-token');
        if(typeof(user_token) == "undefined" || !user_token)
        {
            return {
                redirect: {
                    permanent: false,
                    destination: "/login"
                }
            }
        }
        myid = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+"/api/me", {
            headers: {
                Authorization: "Bearer "+user_token
            }
        }).catch(err => 
        {
            console.log(err);
        });

        console.log(myid);

        user_res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/messages', {
            headers: {
                Authorization: "Bearer "+user_token
            }
        });

        console.log(user_res.data);
        for(let i in user_res.data.data)
        {
            users.push({
                name: user_res.data.data[i].user.authenticable.name,
                slug: user_res.data.data[i].user.authenticable.slug,
                type: user_res.data.data[i].user.authenticable.type,
                email: user_res.data.data[i].user.user.email,
                image: user_res.data.data[i].user.user.image,
                id: user_res.data.data[i].user.user.id,
                bgColor: color_set[getRandomInt(color_set.length)],
                lastMsg: user_res.data.data[i].last_message
            })
        }
    }

    return {
        user_token: user_token,
        id: query.id,
        myid: myid.data,
        users: users,
    }
},
session_option);