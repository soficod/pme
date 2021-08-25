import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';

const DesktopNav = ({styles}:any) => {

    const {lang, changeLanguage} = useContext(langContext);
    const [dispLang, setDispLang] = useState(false);

    return(
        <>
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
                                <a href={"#"+link}>
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
        </>
    )
}

export default DesktopNav;