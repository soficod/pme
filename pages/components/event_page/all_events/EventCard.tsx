import { string } from 'prop-types'
import styles from '../../../../styles/event_page/EventCard.module.css';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';


const EventCard=()=>{
  
    return(
    
            <div className={styles.container}>
                <div className={styles.card}>

                    <div className={styles.imageContainer}>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className={styles.events_title}><a href="#">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </a></h1>
                        <div className={styles.info}>
                            <p className={styles.date}style={{color:'rgb(172,172,172)'}}>May 25, 2021</p>
                             <p className={styles.post}><span style={{color:'rgb(172,172,172)'}}> by</span> <strong style={{color:'rgb(172,172,172)'}}> John smith</strong> <strong className={styles.dot} style={{color:'rgb(172,172,172)'}}>.</strong></p> 
                        </div>
               
                    </div>
                </div>
            </div>
                

    
    )
}
export default EventCard;