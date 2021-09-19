import React, { useState, useContext, useEffect, useRef } from 'react';
import { langContext } from '../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';
import styles from '../../../styles/news/News.module.css';
import Carousel from 'react-elastic-carousel';
import NewsBigCard from './NewsBigCard';
import NewsSmallCard from './NewsSmallCard';
//import Pagination from '../user-components/pagination/Pagination';
import Pagination from '@material-ui/lab/Pagination';

const News = ({articles}:any) => {

    const {lang, changeLanguage} = useContext(langContext);
    const carouselRef = useRef(null);

    const getDateTime = (datetime:string) => 
    {
        const date = new Date(datetime);
        
        const day = date.getDay() < 10 ? "0"+date.getDay() : date.getDay();
        const month = date.getMonth() < 10 ? "0"+date.getDay() : date.getMonth();

        const hour = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
        const minute = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();

        return day +"-"+month+"-"+date.getFullYear()+"  à "+hour + ":"+minute;
    }

    return(
        <div className={styles.newsContainer}>
            {
            articles.length > 0 ?
            <>
                <Carousel 
                    isRTL={false} 
                    enableAutoPlay className={styles.latestNews}
                    autoPlaySpeed={4000}
                    ref={carouselRef}
                    onNextEnd={({ index }) => {
                        console.log(index, articles.slice(0,articles.length > 5 ? -5 : -articles.length).length)
                        if (index + 1 === articles.slice(0,articles.length > 5 ? -5 : -articles.length).length - 1) 
                        {
                            setTimeout(() => 
                            {
                                carouselRef.current.goTo(0)
                            }, 6000);
                        }
                    }}
                >
                    {
                        articles.slice(0, (articles.length > 5 ? 5 : articles.length)).map(ln => {
                            return(
                                <NewsBigCard
                                    title={ln.title}
                                    slig={ln.slug}
                                    image={ln.images[0]}
                                    created_at={getDateTime(ln.created_at)}
                                    poster={ln.poster}
                                />
                            )
                        })
                    }
                </Carousel>

                <div className={styles.newsCardsContainer}>
                    {
                        articles.map(ln => {
                            return(
                                <NewsSmallCard
                                    title={ln.title}
                                    slig={ln.slug}
                                    image={ln.images[0]}
                                    created_at={getDateTime(ln.created_at)}
                                    poster={ln.poster}
                                    content={ln.content}
                                />
                            )
                        })
                    }

                </div>

                <div 
                className={styles.pages}
                style={{
                    marginBottom: "15px"
                }}
            >
                <Pagination count={10} variant="outlined" color="primary" />
            </div>  
            </>
            :
            <>
                <h1>
                    Aucun article disponible.
                </h1>
            </>
            }
        </div>
    );
}

export default News;