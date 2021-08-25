import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Cards.module.css';
import { motion } from 'framer-motion';

const Cards = ()=>
{

    return(
        <div className={styles.cards_container}>
                    <motion.div
                         initial={{
                             opacity:0
                         }}
                         animate={{
                             opacity:1
                         }}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                        className={styles.card}>
                        <div className={styles.imageContainer}>
                            <svg
                            className={styles.trace}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            width="150"
                            height="100" 
                            viewBox="0 0 317.733 144.056">
                        <defs>
                            <filter id="Tracé_11" x="0" y="0" width="317.733" height="144.056" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood flood-opacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_11)">
                            <path id="Tracé_11-2" data-name="Tracé 11" d="M0,0H299.733L235.585,62.188l64.149,63.869H0Z" transform="translate(9 6)" fill="#58c4dd"/>
                        </g>
                      
                        </svg>
                            <svg

                                className={styles.rectangle}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="80"
                                height="40"
                                viewBox="0 0 88.406 83.446">
                            <defs>
                                <filter id="Rectangle_30" x="0" y="0" width="88.406" height="83.446" filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="3" result="blur"/>
                                <feFlood flood-opacity="0.161"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                                </filter>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_30)">
                                <rect id="Rectangle_30-2" data-name="Rectangle 30" width="62.783" height="34" transform="matrix(0.79, 0.62, -0.62, 0.79, 29.93, 6)" fill="#58c4dd"/>
                            </g>
                            </svg>
                            <p className={styles.cardsDate}><span className={styles.number}>20-25</span><br/><span className={styles.date}>Février 2020</span></p>
                        </div>


                        <p className={styles.cards_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 
                        </p>
                        <motion.button 
                        
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ 
                            scale: 0.9 
                        }}
                        className={styles.cards_button}

                        >En savoir plus</motion.button>

                    </motion.div>

                </div>
    )
}
export default Cards;

