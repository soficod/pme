import React, { useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Main.module.css';
import Particles from "react-tsparticles";
import { motion } from 'framer-motion';

const Main = () => {

    const {lang, changeLanguage} = useContext(langContext);
    return(
        <>
            <div className={styles.mainContainer}>
                <Particles
                    id="tsparticles"
                    width="100vw"
                    height="100vh"
                    options={{
                        "background": {
                            "color": {
                                "value": "#FFFFFF"
                            }
                        },
                        "fullScreen": {
                            "enable": true,
                            "zIndex": 1
                        },
                        "particles": {
                            "color": {
                                "value": ["#FF0062", "#FFB000", "#0A2A61", "#58C4DD"],
                                "animation": {
                                    "h": {
                                        "enable": true,
                                        "speed": 20
                                    }
                                }
                            },
                            "links": {
                                "color": {
                                    "value": "#000000"
                                },
                                "enable": true,
                                "opacity": 0.4
                            },
                            "move": {
                                "enable": true,
                                "outModes": {
                                    "bottom": "out",
                                    "left": "out",
                                    "right": "out",
                                    "top": "out"
                                },
                                "speed": 2
                            },
                            "number": {
                                "density": {
                                    "enable": true
                                },
                                "value": 80
                            },
                            "opacity": {
                                "value": 0.5
                            },
                            "size": {
                                "value": {
                                    "min": 0.1,
                                    "max": 5
                                }
                            }
                        }
                        }  
                    }
                />

                <div className={styles.mainContent}>
                    <div className={styles.mainVerticalCenter}>
                        <motion.img 
                            src="/images/pmei-logo.png" alt="Logo PME INTERCONNECT"
                            className={styles.mainLogo}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{ 
                                duration: 1
                            }}
                        />
                        <br/>
                        <motion.div 
                            className={styles.joinBtnContainer}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 0.8,
                                duration: 1
                            }}
                        >
                            <motion.button 
                                className={styles.joinUsBtn}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ 
                                    scale: 0.9 
                                }}
                            >
                                {lang.Main.join_us.map((txt:string, index:number) => {
                                    return (
                                        <>
                                            {
                                                (index > 0 &&
                                                <br/>) 
                                            }
                                            {txt}
                                        </>
                                    );
                                })}
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;