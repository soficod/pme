import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';
import styles from '../../../styles/news/News.module.css';
import Carousel from 'react-elastic-carousel';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const NewsSmallCard = ({title, slug, image, created_at, poster, content}:any) => {

    const {lang, changeLanguage} = useContext(langContext);

    return(
        <a href={slug}>
            <motion.div 
                className={styles.newsCard}
                whileHover={{
                    scale: 1.1
                }}
            >
                <div 
                    className={styles.img}
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                >
                </div>
                <div className={styles.cardInfosContainer}>
                    <div>
                        <h1 className={styles.titleCard}>{title}</h1>
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </motion.div>
        </a>
    );
}

export default NewsSmallCard;