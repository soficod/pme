import React from 'react'
import styles from '../../../styles/chat/Chat.module.css';
import SendIcon from '@material-ui/icons/Send';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Message = ({echo}:any) => 
{
    const user = {
        pfp: "/images/men.jpg",
        name: "Karim Ouadhi"
    }

    const [messages, setMessages] = useState([]); 
    const [message, setMessage] = useState('')
    
    const send = () => 
    {
        if(typeof(window) !== "undefined")
        {
            axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST+"/api/messages", {
                to: "1",
                message: message,
                headers: {
                    Authorization: "Bearer "+window.localStorage.getItem('pmei-user-token')
                }
            });
        }
    }

    useEffect(() => 
    {
        echo.channel('User.2').listen('MessageReceived', (data:any) => 
        {
            console.log("data: ", data);
            const msg = [...messages];
            msg.push({
                from: "partner",
                message: data.data.message,
                time: "17:00",
                date: "15-09-2021"
            });

            setMessages(msg);
        });
    }, []);

    return(
        <div className={styles.messagesContainer}>
            <div className={styles.msg_header}>
                <button 
                    className={styles.msg_header_pfp}
                >
                    <div 
                        style={{
                            backgroundImage: `url(${user.pfp})`
                        }}
                    >
                    </div>
                </button>
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
            </div>
            <div className={styles.messageInput}>
                <button className={styles.msg_input}>
                    <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Tappez votre message..."/>
                </button>
                <button className={styles.msg_btn}>
                    <button onClick={() => send()}>
                        <SendIcon/>
                    </button>
                </button>
            </div>
        </div>
    )
}

export default Message;