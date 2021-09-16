import React, { useState, useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import { langContext } from '../../../services/langContext';

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
                            <div 
                                className={"scale-up " + styles.langSelectMobile} id="langs"
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
                            </div>
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

                            <div 
                                className={"scroll-down " + styles.navElementsMobile} 
                                style={{
                                    position:"fixed"
                                }}
                            >
                            {
                                Object.keys(lang.Navbar).map(link => {
                                    return (
                                        <>
                                            {
                                                link === "news_link" ?
                                                <a 
                                                    href="news"
                                                >
                                                    
                                                    <button className={styles.navElemMobile}>
                                                        {lang.Navbar[link]}
                                                    </button>
                                                </a>
                                                :
                                                <>
                                                    {
                                                        link === "join_link"?
                                                        <a href="login">
                                                            <button className={styles.navElemMobile}>
                                                                {lang.Navbar[link]}
                                                            </button>
                                                        </a>
                                                        :
                                                        <a 
                                                            onClick={e => {
                                                                window.scrollTo({
                                                                    top: document.getElementById(link).offsetTop,
                                                                    behavior: "smooth"
                                                                });
                                                                setNavOn(false);
                                                            }}
                                                        >
                                                            
                                                            <button className={styles.navElemMobile}>
                                                                {lang.Navbar[link]}
                                                            </button>
                                                        </a>
                                                    }
        
                                                </>
                                            }
                                        </>
                                    )
                                })
                            }
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default MobileNav;