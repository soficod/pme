import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import lang from '../../../services/lang'
import styles from '../../../../styles/landing_page/Presentation.module.css';
import { StyleSharp } from '@material-ui/icons';
import {motion} from 'framer-motion';
const Presentation = ()=>{
    
    const [language,setLanguage] = useState("en");

    useEffect(()=>{
        if(!window.localStorage.getItem("pme-lang"))
            window.localStorage.setItem("pme-lang","fr");
        setLanguage(window.localStorage.getItem("pme-lang")as string);
    },[]);

    return(
        <>
       
        <div className={styles.content}>
            <div className={styles.shape}></div>

            <div className={styles.arrow}></div>
            <div className={styles.arrowhite}></div>
            <div className={styles.maincontainer}>
            <div className={styles.box}></div> 
                <motion.div 
                    className={styles.container}
                    initial={{
                        x:100,
                        opacity:0
                    }}
                    animate ={{
                        x:0,
                        opacity:1
                    }}
                >
                    <h1>{lang[language].Presentation.title}</h1>
                    <div className={styles.vide}></div>
                    <p>{lang[language].Presentation.text}</p>
                    
                </motion.div>  
                

                <motion.div 
                    className={styles.imageContainer }
                    initial={{
                        x:-100,
                        opacity:0
                    }}
                    animate ={{
                        x:0,
                        opacity:1
                    }}
                >
                    <img className={styles.image_1} src="images/Rectangle.png"/>
                    <img className={styles.imglobal} src="images/woman.png"/>
                    <img className={styles.image_2} src="images/Tracé.png"/>
            
                </motion.div>
            
        
            </div>
            </div>
            <div className={styles.foot}></div>
        </>
        
    )
}
export default Presentation;