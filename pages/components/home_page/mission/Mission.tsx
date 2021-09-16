import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Mission.module.css';

const Mission = () => 
{

    const selectedBtnStyle = {
        backgroundColor: "#58C4DD",
        color:"white",
        boxShadow: "0px 0px 36px 1px #58C4DD"
    }

    const {lang, changeLanguage} = useContext(langContext);
    const [selected, setSelected] = useState(0);

    const [on, setOn] = useState(false);

    useEffect(() => 
    {
        setOn(window.scrollY >= document.getElementById("mission_link").offsetTop - 50);
        window.addEventListener('scroll', e => 
        {
            if(document.readyState === 'complete' && 
                !on && 
                (window.scrollY >= document.getElementById("mission_link").offsetTop - 50))
            {
                setOn(true);
            }
        });
    }, []);


    return(
        <section id="mission_link" className={styles.mission_section}>
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
                    {
                        on &&
                        <>
                            <div className={styles.icoContainer}>
                                <button 
                                    style={selected === 1 ? selectedBtnStyle:{}} 
                                    className={"delay-0-25 scale-up " + styles.ico} 
                                    onClick={e => setSelected(1)}
                                    
                                >
                                    <span  className="material-icons">
                                        campaign
                                    </span>
                                </button>
                            </div>

                            <div className={styles.btnsContainer} style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <button 
                                    style={selected === 0 ? selectedBtnStyle:{}} 
                                    className={"scale-up " + styles.ico}
                                    onClick={e => setSelected(0)}
                                >
                                    <span className="material-icons">
                                        business_center
                                    </span>
                                </button>

                                <button 
                                    style={selected === 2 ? selectedBtnStyle:{}} 
                                    className={"scale-up delay-0-5 " + styles.ico}
                                    onClick={e => setSelected(2)}
                                    
                                >
                                    <span className="material-icons">
                                        handyman
                                    </span>
                                </button>
                            </div>

                            <div  className={styles.textContainer}>
                        {
                            selected !== -1 && 

                            <div
                                className={"scroll-up"}
                            >
                                <h1>
                                    {lang.Mission.missions[selected].title}
                                </h1>

                                <p>
                                    {lang.Mission.missions[selected].content}
                                </p>
                            </div>
                        }
                    </div>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Mission;