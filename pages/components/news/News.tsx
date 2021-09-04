import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';
import styles from '../../../styles/news/News.module.css';
import Carousel from 'react-elastic-carousel';
import NewsBigCard from './NewsBigCard';

const News = () => {

    const {lang, changeLanguage} = useContext(langContext);

    const latestNews = [{
        title: "Agence d’Air Algérie de Paris Opéra : ruée pour le remboursement des billets",
        slug: "",
        image: "/images/men.jpg",
        created_at: "10/09/1998",
        poster: "Anis ROUANE"
    },
    {
        title: "Agence d’Air Algérie de Paris Opéra : ruée pour le remboursement des billets",
        slug: "",
        image: "/images/men.jpg",
        created_at: "10/09/1998",
        poster: "Anis ROUANE"
    },
    {
        title: "Agence d’Air Algérie de Paris Opéra : ruée pour le remboursement des billets",
        slug: "",
        image: "/images/men.jpg",
        created_at: "10/09/1998",
        poster: "Anis ROUANE"
    }]

    const news = [

    ]
    return(
        <div className={styles.newsContainer}>
            <Carousel isRTL={false} className={styles.latestNews}>
                {
                    latestNews.map(ln => {
                        return(
                            <NewsBigCard
                                title={ln.title}
                                slig={ln.slug}
                                image={ln.image}
                                created_at={ln.created_at}
                                poster={ln.poster}
                            />
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default News;