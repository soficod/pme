import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';
import styles from '../../../styles/news/News.module.css';
import Carousel from 'react-elastic-carousel';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
                <div>
                    <div>
                        <button>
                            <PersonIcon/>
                        </button>
                        <button>
                            {poster}
                        </button>
                    </div>
                    <div className={styles.time}>
                        <button>
                            <AccessTimeIcon />
                        </button>
                        <button>
                            {created_at}
                        </button>
                    </div>

                    <a href={slug}>
                        <button className={styles.readBtn}>
                            Lire l'article
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsBigCard;