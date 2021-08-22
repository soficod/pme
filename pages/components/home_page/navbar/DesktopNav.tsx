import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';

const DesktopNav = ({styles}:any) => {

    const {lang, changeLanguage} = useContext(langContext);
    const [dispLang, setDispLang] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => 
    {
        const doc = document.getElementById("presentation_link");
        if(doc)
        {
            console.log(window.scrollY > doc.offsetTop);
            window.addEventListener('scroll', e => 
            {
                setSticky(() => window.scrollY > (doc.offsetTop - 50));
            })
        }
    }, []);

    return(
        <>
            {
            !sticky ?
            <div className={styles.navbar} style={{
                position:"absolute",
                top: 0,
                left: 0
            }}>
                <div>
                </div>
                <div className={styles.links}>
                    {
                        Object.keys(lang.Navbar).map(link => {
                            return (
                                <a 
                                    onClick={e => window.scrollTo({
                                        top: document.getElementById(link).offsetTop,
                                        behavior: "smooth"
                                    })}
                                >
                                    <button className={styles.navElem}>
                                        {lang.Navbar[link]}
                                    </button>
                                </a>
                            )
                        })
                    }
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
                </div>
            </div>
            :
            <motion.div 
                className={styles.navbar} 
                style={{
                    position:"fixed",
                    top: 0,
                    left: 0,
                    zIndex: 400,
                    backgroundColor: "white",
                    boxShadow: "0px 10px 20px -20px rgba(0,0,0,0.98)"
                }}
                initial={{
                    y:-60
                }}
                animate={{
                    y:0
                }}
            >
                <button className={styles.stickyLogo}>
                    <a 
                        onClick={e => window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })}
                    >
                        <img src="/images/pmei-logo-simplified.png"/>
                    </a>
                </button>
                <div className={styles.links}>
                    {
                        Object.keys(lang.Navbar).map(link => {
                            return (
                                <a
                                    onClick={e => window.scrollTo({
                                        top: document.getElementById(link).offsetTop,
                                        behavior: "smooth"
                                    })}
                                >
                                    <button className={styles.navElem}>
                                        {lang.Navbar[link]}
                                    </button>
                                </a>
                            )
                        })
                    }
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
                </div>
            </motion.div>
            }   
        </>
    )
}

export default DesktopNav;