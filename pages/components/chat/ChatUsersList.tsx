import React from 'react';
import styles from '../../../styles/chat/Chat.module.css';
import SearchIcon from '@material-ui/icons/Search';

interface CharUsersListProps {

}

const ChatUsersList = () => 
{
    const sortByDateTime = (arr:any) => 
    {
        let sortedDate = arr.slice().sort((a:any,b:any) => b.date - a.date);
        
    }

    const users = [
        {
            name: "Anis",
            lastMsg: "Test",
            time: "17.07",
            read: false,
            slug: "#",
            image: "/images/woman.png",
            date: "15-03-2020"
        },
        {
            name: "Karim",
            lastMsg: "Test",
            time: "17.07",
            read: true,
            slug: "#",
            image: "/images/woman.png",
            date: "12-03-2020"
        },
        {
            name: "Abdou",
            lastMsg: "Test",
            time: "17.07",
            read: true,
            slug: "#",
            image: "/images/woman.png",
            date: "13-06-2021"
        }

    ];

    return(
        <div className={styles.menu}>
            <a href="news">
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
                        <a href={user.slug} className={styles.contactLink}>
                            <div className={styles.contactContainer}
                                style={{
                                    backgroundColor: !user.read ? "#c6cbd4a6":"" 
                                }}
                            
                            >
                                <div className={styles.pfpContainer}>
                                    <div 
                                        className={styles.pfp}
                                        style={{
                                            backgroundImage: `url(${user.image})`
                                        }}
                                    ></div>
                                </div>

                                <button className={styles.name}>
                                    {user.name}
                                    <br/>
                                    <span 
                                        className={styles.msg}
                                        style={{
                                            fontWeight: !user.read ? "bold" : "normal",
                                            color: !user.read ? "black":""
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