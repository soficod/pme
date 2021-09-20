import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Mission.module.css';
import { motion } from 'framer-motion';

const Mission = () => 
{

    const selectedBtnStyle = {
        backgroundColor: "#58C4DD",
        color:"white",
        boxShadow: "0px 0px 36px 1px #58C4DD"
    }

    const {lang, changeLanguage} = useContext(langContext);
    const [selected, setSelected] = useState(0);
    return(
        <section className={styles.mission_section}>
            <div className={styles.whiteBg}></div>
            <div style={{
                position:'relative',
                zIndex: 250
            }}>
                <h1 className={styles.mission_title}>
                    {lang.Mission.title}
                </h1>
                
                <div 
                    className="separator"
                    style={{
                        margin: "auto"
                    }}
                >
                </div>

                <div className={styles.bigCircle}>
                    <div className={styles.icoContainer}>
                        <motion.button 
                            style={selected === 1 ? selectedBtnStyle:{}} 
                            className={styles.ico} 
                            onClick={e => setSelected(1)}
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: 1
                            }}
                        >
                            <span  className="material-icons">
                                campaign
                            </span>
                        </motion.button>
                    </div>

                    <div className={styles.btnsContainer} style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <motion.button 
                            style={selected === 0 ? selectedBtnStyle:{}} 
                            className={styles.ico}
                            onClick={e => setSelected(0)}
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <span className="material-icons">
                                business_center
                            </span>
                        </motion.button>

                        <motion.button 
                            style={selected === 2 ? selectedBtnStyle:{}} 
                            className={styles.ico}
                            onClick={e => setSelected(2)}
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: 1.5
                            }}
                        >
                            <span className="material-icons">
                                handyman
                            </span>
                        </motion.button>
                    </div>

                    <div  className={styles.textContainer}>
                        {
                            selected !== -1 && 

                            <motion.div
                                initial={{
                                    y: 20,
                                    opacity: 0
                                }}

                                animate={{
                                    y:0,
                                    opacity:1
                                }}
                                transition={{
                                    delay:1.75
                                }}
                            >
                                <h1>
                                    {lang.Mission.missions[selected].title}
                                </h1>

                                <p>
                                    {lang.Mission.missions[selected].content}
                                </p>
                            </motion.div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission;