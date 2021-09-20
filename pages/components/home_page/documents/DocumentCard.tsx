import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/DocumentCard.module.css';
import { motion } from 'framer-motion';
import { rgbToHex } from '@material-ui/core';


const DocumentCard = ()=>{

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
                    <img src="images/images.png" className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.doctitle}> ETUDE SUR L'EFFET DE LA COVID</h1>
                    <p className={styles.text}>
                    But I must explain to you how all this mistaken idea of denouncing pleasure
                     and praising pain was born and I will give you a complete account of the system, 
                     and expound the actual teachings of the great explorer of the truth, the master-builder 
                     of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is 
                     pleasure, but because those who do not know how to pursue pleasure rationally encounter
                      consequences that are extremely painful. Nor again is there anyone who loves or pursues
                       or desires to obtain pain of itself, because it is pain, but because occasionally circumstances 
                       occur in which toil and pain can procure him some great pleasure. To take a trivial example,
                        which of us ever undeo resultant 
                    </p>

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
                
                </div>
            </motion.div>
          
            
        </div>
    )
}
 export default DocumentCard;