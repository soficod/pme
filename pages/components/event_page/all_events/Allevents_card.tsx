import { string } from 'prop-types'
import styles from '../../../../styles/event_page/Allevents_card.module.css';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EventPage from '../eventPage/EventPage';
const Allevents_card=({images, title, date, poster, description, slug}:any)=>{
    return(
        <div>
             <div className={styles.container}>
                <div className={styles.card}>

                    <div 
                        className={styles.imageContainer}
                        style={{
                            backgroundImage: `url(${images[0]})`
                        }}
                    >
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className={styles.events_title}><a href="#">{title}</a></h1>
                        <div className={styles.info}>
                            <p className={styles.date}style={{color:'rgb(172,172,172)'}}>{date}</p>
                             <p className={styles.post}> <strong className={styles.dot} style={{color:'rgb(172,172,172)'}}>.</strong><span style={{color:'rgb(172,172,172)'}}> by</span> <strong style={{color:'rgb(172,172,172)'}}> {poster}</strong></p> 
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                        <div>
                            
                        </div>
                        <a 

                        
                             href={slug} className={styles.more}
                          
                        >
                            Read More 

                        <ArrowRightAltIcon className={styles.arrow}/>
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Allevents_card;