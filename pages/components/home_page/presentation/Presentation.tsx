import React, { useContext } from 'react'
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Presentation.module.css';
import {motion} from 'framer-motion';

const Presentation = ()=>{

    const {lang, changeLanguage} = useContext(langContext);

    return(
        <>
       
        <div className={styles.presentationContainer}>
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
                    <h1>{lang.Presentation.title}</h1>
                    <div className={styles.vide}></div>
                    <p>{lang.Presentation.text}</p>
                    
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