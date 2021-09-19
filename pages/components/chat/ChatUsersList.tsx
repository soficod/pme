import React from 'react';
import styles from '../../../styles/chat/Chat.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';

const ChatUsersList = ({users, setSelectedId, selectedId}:any) => 
{
    const sortByDateTime = (arr:any) => 
    {
        let sortedDate = arr.slice().sort((a:any,b:any) => b.date - a.date);
    }

    const refreshData = (id:number) => {
        if(typeof(window) != "undefined")
        {
            window.history.replaceState(null, "Messages", "/messages/"+id);
            setSelectedId(id);
        }
    }

    return(
        <div className={styles.menu}>
            <a href="/news">
                <button className={styles.backHome}>
                    Retour à l'actualité
                </button>
            </a>
            <h1>Chat</h1>
            <div className={styles.searchInput}>
                <button className={styles.searchIcon}>
                    <SearchIcon />
                </button>
                <button className={styles.searchField}> 
                    <input type="search" placeholder="Chercher un contact"/>
                </button>
            </div>
            <h3>Derniers messages</h3>
            
            {
                users.map((user:any) => 
                {
                    return(
                        <a className={styles.contactLink} onClick={e => refreshData(user.id)}>
                            <div className={styles.contactContainer}
                                style={{
                                    backgroundColor: user.id == selectedId ? "#c6cbd4a6":"" 
                                }}
                            
                            >
                                <div className={styles.pfpContainer}>
                                {
                                    user.image ?
                                    <div 
                                        className={styles.pfp}
                                        style={{
                                            backgroundImage: `url(${user.image})`
                                        }}
                                    ></div>
                                    :
                                    <button 
                                        className={styles.pfp + " " + styles.btnIcon}
                                        style={{
                                            backgroundColor: user.bgColor
                                        }}
                                        
                                    >
                                        {user.name[0].toUpperCase()+user.name[1].toUpperCase()}
                                    </button>
                                }
                                </div>

                                <button className={styles.name}>
                                    {user.name}
                                    <br/>
                                    <span 
                                        className={styles.msg}
                                        style={{
                                            fontWeight: !user.seen ? "bold" : "normal",
                                            color: !user.seen ? "black":""
                                        }}
                                    >{user.lastMsg}</span>
                                </button>

                                <button className={styles.time}>
                                    {user.time}
                                </button>
                            </div>
                        </a>
                    )   
                })
            }
        </div>
    )
}

export default ChatUsersList;