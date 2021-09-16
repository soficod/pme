import React, { useState, useContext, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { langContext } from '../../../services/langContext';
import { motion } from 'framer-motion';

const MobileNav = ({styles, setSearchOn, isAdmin}:any) => {
    const {lang, changeLanguage} = useContext(langContext);
    const [navOn, setNavOn] = useState(false); 
    const [dispLang, setDispLang] = useState(false);
    const [today, setDate] = useState(new Date());
    const [profilOn, setProfilOn] = useState(false);

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
            <div className={styles.navbar} style={{
                position: "fixed",
                backgroundColor: "white",
                boxShadow: "0px 10px 14px -14px rgba(0,0,0,0.98);"
            }}>
                <div>
                    {
                        !navOn ? 
                        <MenuIcon onClick={e => setNavOn(true)} style={{
                            fontSize: "3em",
                            height: "100%",
                            cursor: "pointer"
                        }}/>
                        :
                        <>
                            <CloseIcon onClick={e => setNavOn(false)} style={{
                                fontSize: "3em",
                                height: "100%",
                                cursor: "pointer"
                            }}/>
                        </>
                    }
                </div>
                <div className={styles.tools}>
                    <a className={styles.ico}>
                        <button className={styles.msgNotif}>
                            <MessageIcon />
                        </button>
                        <div></div>
                    </a>

                    <a className={styles.ico}>
                        <button onClick={e => setDispLang(!dispLang)}>
                            <LanguageIcon />
                        </button>
                        {
                            dispLang &&
                            <motion.div 
                                className={styles.langSelectMobile} id="langs"
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
                
                    <a className={styles.ico}>
                        <button onClick={e => setSearchOn(true)}>
                            <SearchIcon />
                        </button>
                    </a>
                    
                    {
                        isAdmin ? 
                        <a className={styles.ico}>
                            <button onClick={e => setProfilOn(!profilOn)}>
                                <AccountCircleIcon />
                            </button>
                            {
                                profilOn &&
                                <motion.div 
                                    className={styles.adminSubNav}
                                    initial={{
                                        opacity: 0.5,
                                        y: -10
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                >
                                    <a href="#">
                                        <button>
                                            Profil
                                        </button>
                                    </a>
                                    <a href="#">
                                        <button>
                                            Admin
                                        </button>
                                    </a>
                                </motion.div>
                            }
                        </a>
                        :
                        <a href="#" className={styles.ico}>
                            <button>
                                <AccountCircleIcon />
                            </button>
                        </a>
                    }
                </div>
            </div>
            {
                navOn &&
                <motion.div 
                    className={styles.navMenu} 
                    style={{
                        position:"fixed"
                    }}
                    initial={{
                        x: 300
                    }}
                    animate={{
                        x: 0
                    }}
                >
                    <a href="/news"><button>Actualité</button></a>
                    <a href="/events"><button>Evenements</button></a>
                    <a href="/Trainings"><button>Formations</button></a>
                    <a href="/documents"><button>Documents</button></a>
                    <a href="/studies"><button>Etudes</button></a>
                </motion.div>
            }

            <div style={{
                width: "100%",
                height: "60px"
            }}></div>
        </>
    )
}

export default MobileNav;