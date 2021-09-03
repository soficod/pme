import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Events.module.css';
import { motion } from 'framer-motion';
import Cards from './Cards';
import Carousel from 'react-elastic-carousel';


const Events = () => 
{

    const {lang, changeLanguage}:any = useContext(langContext);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2},
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    
    ];
    return(
        <section className={styles.events_section}>
            <div className={styles.container}
            style={{
                position:'relative',
                zIndex: 250
            }}>
                <h1 className={styles.events_title}>
                    {lang.Events.title}
                </h1>
                
                <div 
                    className="separator"
                    style={{
                        margin: "auto",
                        backgroundColor:"#081744"
                    }}
                >
                    
                </div>
                
                <div className={styles.carouselContainer}>
                    <Carousel isRTL={true} breakPoints={breakPoints} enableAutoPlay={true}>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </Carousel>
                </div>
                <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ 
                          scale: 0.9 
                      }}
                
                    className={styles.events_button}>
                    <span className={styles.button_text}>
                        voir tout les événements
                    </span>
                </motion.button>
            </div>

        </section>
    )
}

export default Events;