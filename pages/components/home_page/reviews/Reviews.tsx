import React,{ useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Reviews.module.css';
import { motion } from 'framer-motion';
import Carousel from 'react-elastic-carousel';
import ReviewsCard from'./ReviewsCard'
const Reviews = ()=>{
    const {lang, changeLanguage}:any = useContext(langContext);
    return(
     
        <section className={styles.reviews_section}>
        <div className={styles.container}
        style={{
            position:'relative',
            zIndex: 250
        }}>
            <h1 className={styles.reviews_title}>
                {lang.Reviews.title}
            </h1>
            
            <div 
                className="separator"
                style={{
                    margin: "auto",
                    backgroundColor:"#081744"
                }}

            >
                
            </div>
            
            <ReviewsCard/>
  
        </div>

    </section>
    )}  


export default Reviews;