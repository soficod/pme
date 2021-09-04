import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';
import styles from '../../../styles/news/News.module.css';
import Carousel from 'react-elastic-carousel';

const NewsBigCard = ({title, slug, image, created_at, poster}:any) => {

    const {lang, changeLanguage} = useContext(langContext);

    const latestNews = [{

    }]

    const news = [

    ]
    return(
        <div 
            className={styles.latestArticle} 
            style={{
                backgroundImage: "url("+image+")"
            }}
        >
            <div></div>
            <div className={styles.infoContainer}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default NewsBigCard;