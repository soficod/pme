import React, { useState, useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import { langContext } from '../../../services/langContext';
import { motion } from 'framer-motion';

const MobileNav = ({styles}:any) => {
    const {lang, changeLanguage} = useContext(langContext);
    const [navOn, setNavOn] = useState(false); 
    const [dispLang, setDispLang] = useState(false);
    
    return(
        <>
            <div className={styles.navbar} style={{
                position: "fixed",
                backgroundColor: "white",
                boxShadow: "0px 10px 14px -14px rgba(0,0,0,0.98);"
            }}>
                <div>
                <a className={styles.langElemMobile}>
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
                </div>
                <div>
                    {
                        !navOn ? 
                        <MenuIcon onClick={e => setNavOn(true)} style={{
                            fontSize: "3em",
                            height: "100%"
                        }}/>
                        :
                        <>
                            <CloseIcon onClick={e => setNavOn(false)} style={{
                                fontSize: "3em",
                                height: "100%"
                            }}/>

                            <motion.div 
                                className={styles.navElementsMobile} 
                                style={{
                                    position:"fixed"
                                }}
                                initial={{
                                    scale:0,
                                    y: 100
                                }}
                                animate={{
                                    scale:1,
                                    y: 0
                                }}
                            >
                            {
                                Object.keys(lang.Navbar).map(link => {
                                    return (
                                        <a
                                            onClick={e => {
                                                    window.scrollTo({
                                                        top: document.getElementById(link).offsetTop,
                                                        behavior: "smooth"
                                                    })

                                                    setNavOn(false);
                                                }
                                            } 
                                        >
                                            <button className={styles.navElemMobile}>
                                                {lang.Navbar[link]}
                                            </button>
                                        </a>
                                    )
                                })
                            }
                            </motion.div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default MobileNav;