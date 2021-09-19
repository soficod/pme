import React from 'react'
import styles from '../../../styles/chat/Chat.module.css';
import SendIcon from '@material-ui/icons/Send';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
};

const Message = ({echo, user_token, id, myid, user}:any) => 
{
    const [messages, setMessages] = useState([{}]); 
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true);

    const send = () => 
    {
        if(typeof(window) !== "undefined")
        {
            const date = new Date();
            const msg = {
                from: "you",
                message: message,
                time: date.getHours() + ":" + date.getMinutes(),
                date: date.getDay() + "-" + date.getMonth+"-" + date.getFullYear()
            }

            updateMessage(msg);
            setMessage('');
            axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST+"/api/messages", {
                to: id,
                message: message
            }, 
            {
                headers: {
                    Authorization: "Bearer "+user_token
                }
            });
        }
    }

    const updateMessage = (msg:any) => 
    {
        setMessages((messages) => [...messages, msg]);
    } 

    useEffect(() => 
    {
        axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/messages/'+id,{
            headers: {
                Authorization: "Bearer "+user_token
            }
        }).then(data => 
        {
            const prevMessages = [];
            console.log(data);
            for(let i in data.data.reverse())
            {
                
                const date = new Date(data.data[i].created_at);
                prevMessages.push({
                    from: data.data[i].sender_id == myid ? "you" : "partner",
                    time: date.getHours() + ":" + date.getMinutes(),
                    date: date.getDay() + "-" + date.getMonth+"-" + date.getFullYear(),
                    message: data.data[i].content
                });
            }

            setMessages(prevMessages);
            echo.private('User.'+myid).listen('MessageReceived', (data:any) => 
            {
                console.log(id);
                if(data.data.sender.user.id != id)
                {
                    return;
                }

                const date = new Date();

                const msg = {
                    from: "partner",
                    message: data.data.message,
                    time: date.getHours()+":"+date.getMinutes(),
                    date: date.getDay() + "-" + date.getMonth()+"-"+ date.getFullYear()
                }

                console.log(msg);
                updateMessage(msg)
            });
            
            setLoading(false);
        }).catch(err => 
        {
            console.log(err);
        }) ;
    }, []);

    return(
        <>
        {
            loading ? 
            <h1>Loading...</h1>
            :
            <div className={styles.messagesContainer}>
                {/*JSON.stringify(messages)*/}
                <div className={styles.msg_header}>
                    {
                        user.image ?
                        <button 
                            className={styles.msg_header_pfp}
                        >
                            <div 
                                style={{
                                    backgroundImage: `url(${user.image})`
                                }}
                            >
                            </div>
                        </button>
                        :
                        <button 
                            className={styles.pfpBtn + " " + styles.btnIcon}
                            style={{
                                backgroundColor: user.bgColor
                            }}
                            
                        >
                            {user.name[0].toUpperCase()+user.name[1].toUpperCase()}
                        </button>
                    }
                    <br/>
                    <button className={styles.msg_header_name}>
                        {user.name}
                    </button>
                </div>

                <div className={styles.messages_container}>
                    {
                        messages.map(message => {
                            if(message.from == "partner")
                            {
                                return(
                                    <div className={styles.msgContainer}>
                                        <div 
                                            className={styles.messageContent}
                                            style={{
                                                backgroundColor: "rgb(16, 95, 197)",
                                                color: "white",
                                                marginLeft: "15px"
                                            }}
                                        >
                                            {message.message}
                                            <div className={styles.msgtime}>
                                                {message.time}
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                );
                            }
                            else 
                            {
                                return(
                                    <div className={styles.msgContainer}>
                                        <div></div>
                                        <div 
                                            className={styles.messageContent}
                                            style={{
                                                backgroundColor: "#e6ebf5",
                                                marginRight: "15px"
                                            }}
                                        >
                                            {message.message}
                                            <div className={styles.msgtime}>
                                                {message.time}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                    <AlwaysScrollToBottom />
                </div>
                <div className={styles.messageInput}>
                    <button className={styles.msg_input}>
                        <input 
                            onChange={(e) => setMessage(e.target.value)} 
                            type="text" 
                            placeholder="Tappez votre message..."
                            value={message}
                            onKeyDown={e => {
                                if(e.key === "Enter")
                                {
                                    send();
                                }
                            }}
                        />
                    </button>
                    <button className={styles.msg_btn}>
                        <button onClick={() => send()}>
                            <SendIcon/>
                        </button>
                    </button>
                </div>
            </div>
        }
        </>
    )
}

export default Message;