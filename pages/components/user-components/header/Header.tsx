import React, { useEffect, useState, useContext } from 'react';
import styles from '../../../../styles/header/Header.module.css';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Navbar from '../navbar/Navbar';
import MessageIcon from '@material-ui/icons/Message';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LanguageIcon from '@material-ui/icons/Language';
import { langContext } from '../../../services/langContext';
import { motion } from 'framer-motion';

const Header = () => {
    const [today, setDate] = useState(new Date());
    const [dispLang, setDispLang] = useState(false);

    const {lang, changeLanguage} = useContext(langContext);
    useEffect(() => {
        const timer = setInterval(() => { 
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); 
        }
    }, []);
    
    const getDate = () => {
        const date = {
            "fr":   {
                "day": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                "month": [
                    'Janvier',
                    'Février',
                    'Mars',
                    'Avril',
                    'Mai',
                    'Juin',
                    'Juillet',
                    'Août',
                    'Septembre',
                    'Octobre',
                    'Novembre',
                    'Décembre'
                ]
            },
            "en": {  
                "day": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "month": [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ]
            }
        };

        let lang = "en"; 
        if(typeof(window) !== "undefined" && window.localStorage.getItem('pme-lang'))
        {
            lang = window.localStorage.getItem('pme-lang') as string;
        }

        if(lang === "en")
        {
            return date[lang].day[today.getDay()] + ", " + date[lang].month[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
        }

        if(lang === "fr")
        {
            return date[lang].day[today.getDay()] + ", " + today.getDate() + " " +  date[lang].month[today.getMonth()] + " " + today.getFullYear();
        }
    }

    const getTime = () => {
        let hour: string; 
        hour = today.getHours().toString();
        if(today.getHours() < 10)
        {
            hour = "0"+today.getHours().toString();
        }

        let minute: string 
        minute = today.getMinutes().toString();
        if(today.getMinutes() < 10)
        {
            minute = "0"+today.getMinutes().toString();
        }

        return hour+":"+minute;

    }

    return(
        <>
            <div className={styles.headerContainer}>
                <div className={styles.date}>
                    <button>
                        {getDate()}, 
                        {getTime()} 
                    </button>
                    <button>
                        { 
                            today.getHours() < 18 ? 
                            <WbSunnyIcon style={{fontSize: "1em"}}/> 
                            :  
                            <NightsStayIcon style={{fontSize: "1em"}} />
                        }
                    </button>
                </div>

                <div className={styles.sndContainer}>
                    <a href="#">
                        <div className={styles.profil}>
                            <button>
                                <AccountCircleIcon />
                            </button>
                            <button>
                                Profil
                            </button>
                        </div>
                    </a>

                    <a href="#">
                        <div className={styles.message}>
                            <button> 
                                <MessageIcon style={{cursor: "pointer"}}/>
                            </button>
                            <button>
                                Messages
                            </button>
                            <div></div>
                        </div>
                    </a>

                    <a href="#">
                        <div>
                            <button>
                                <SupervisorAccountIcon />
                            </button>
                            <button>
                                Admin
                            </button>
                        </div>
                    </a>

                    <a className={styles.langElem}>
                        <button onClick={e => setDispLang(!dispLang)}>
                            <LanguageIcon />
                        </button>
                        {
                            dispLang &&
                            <motion.div 
                                className={styles.langSelect} id="langs"
                                initial={{
                                    scale: 0,
                                    y: -30
                                }}
                                animate={{ 
                                    scale: 1,
                                    y: -10
                                }}
                            >
                                <button onClick={e => {
                                            changeLanguage('en');
                                            setDispLang(false);
                                        }
                                    }
                                >
                                    EN
                                </button>
                                <button onClick={e => {
                                        changeLanguage('fr');
                                        setDispLang(false);
                                    }
                                }>
                                    FR
                                </button>
                            </motion.div>
                        }
                    </a>

                    <button className={styles.search}>
                        <SearchIcon style={{cursor: "pointer"}}/>
                    </button>
                </div>
            </div>

            <div className={styles.headerBottom}>
                <img 
                    src={"/images/pmei-logo.png"}
                />
            </div>

            <Navbar/>
        </>
    )
}

export default Header;