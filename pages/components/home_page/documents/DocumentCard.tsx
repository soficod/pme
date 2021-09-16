import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/DocumentCard.module.css';
import { motion } from 'framer-motion';
import { rgbToHex } from '@material-ui/core';


const DocumentCard = ({title, slug, content, images}:any)=>{

    const {lang, changeLanguage}:any = useContext(langContext);

    return(
        <div className={styles.cardContainer}>
            <motion.div 
                initial={{
                    opacity: 0,
                    y:-250  
                }}
                animate={{
                    opacity: 1,
                    y:-10
                }}
                transition={{
                    delay:0.1,
                    
                   
                }}
           
            className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={images[0]} className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.doctitle}>{title}</h1>
                    <p className={styles.text}>
                        {content}
                    </p>
                    
                    <a href={"/document/"+slug}>
                    <motion.button 
                        
                        whileHover={{
                             scale: [1,1.1,1,1.1],
                             boxShadow:"0px 0px 5px rgb(75, 74, 74)",
                            
                            }}
                        whileTap={{ 
                            scale: 0.9 
                        }}
                         className={styles.cardButton}>
                        {lang.DocumentCard.lireDoc}
                    </motion.button>
                    </a>
                </div>
            </motion.div>
          
            
        </div>
    )
}
 export default DocumentCard;