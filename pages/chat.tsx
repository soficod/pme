import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import Header from './components/user-components/header/Header'
import axios from 'axios';
import ChatUsersList from './components/chat/ChatUsersList';
import Message from './components/chat/Message';
import styles from '../styles/chat/Chat.module.css';
import { useEffect } from 'react';
const Pusher = require('pusher-js');
import Echo from 'laravel-echo';


const Chat = () => 
{
    const [echo, setEcho] = useState(null);
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
                            headers: {
                                Authorization: "Bearer "+window.localStorage.getItem('pmei-user-token')
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
    }, [])
    return(
        <>
            <Head>
                <title>Messages - PMEI</title>
            </Head>
            {
            echo &&
            <>
            <div className={styles.pageContainer}>
                <ChatUsersList
                />

                <Message
                    echo={echo}
                />
            </div>
            </>
            }
        </>
    );
}

export default Chat;

