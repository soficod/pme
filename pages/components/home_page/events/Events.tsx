import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Events.module.css';
import { motion } from 'framer-motion';

const Events = () => 
{

    const {lang, changeLanguage} = useContext(langContext);
    
    return(
        <section className={styles.events_section}>
            <div style={{
                position:'relative',
                zIndex: 250
            }}>
                <h1 className={styles.events_title}>
                    {lang.Events.title}
                </h1>
                
                <div 
                    className="separator"
                    style={{
                        margin: "auto"
                    }}
                >
                </div>
            </div>
        </section>
    )
}

export default Events;