import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';
import styles from '../../../styles/news/News.module.css';
import Carousel from 'react-elastic-carousel';

const News = () => {

    const {lang, changeLanguage} = useContext(langContext);

    const latestNews = [{

    }]

    const news = [

    ]
    return(
        <div className={styles.newsContainer}>
            <div className={styles.latestNews}>
                <Carousel isRTL={false}>
                    <button>a</button>
                    <button>b</button>
                    <button>c</button>
                </Carousel>
            </div>
        </div>
    );
}

export default News;