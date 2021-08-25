import React ,{useContext} from 'react';
import { langContext } from '../../../services/langContext';
import { motion } from 'framer-motion';
import styles from '../../../../styles/landing_page/Rejoindre.module.css';
import { Style } from '@material-ui/icons';

const Rejoindre = ()=>{

    const {lang, changeLanguage:any} = useContext(langContext);

     return(
        <>
            <section className={styles.rejoindreContainer}>

                    <div className={styles.shape}></div>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrowhite}></div>

                <div className={styles.maincontainer}>
                <div className={styles.box}></div> 
                        <motion.div 
                            initial={{
                                x:-100,
                                opacity:0
                            }}
                            animate ={{
                                x:0,
                                opacity:1
                            }}
                        className={styles.container}>
                            <h1 className={styles.title}>{lang.Rejoindre.title}</h1>
                            <div className="separator"></div>
                            <p className={styles.text}>{lang.Rejoindre.text}</p>
                        </motion.div>
                
                        <motion.div 
                            initial={{
                                x:100,
                                opacity:0
                            }}
                            animate ={{
                                x:0,
                                opacity:1
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        
                            className={styles.imageContainer}>

                            <div className={styles.cercle}>
                           <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            width="148" 
                            height="162"
                         
                             viewBox="0 0 148 162">
                            <defs>
                                <filter id="Polygone_1" x="0" y="0" width="148" height="162" filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="10" result="blur"/>
                                <feFlood flood-opacity="0.231"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                                </filter>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Polygone_1)">
                                <path id="Polygone_1-2" data-name="Polygone 1" d="M38.887,20.9a14,14,0,0,1,24.226,0L89.818,66.98A14,14,0,0,1,77.705,88H24.295A14,14,0,0,1,12.182,66.98Z" transform="translate(118 27) rotate(90)" fill="#47627a"/>
                            </g>
                            </svg>
                            </div>
                        </motion.div>


                </div>
            </section>

            <div className={styles.foot}></div>

        </>

   )
}
export default Rejoindre;