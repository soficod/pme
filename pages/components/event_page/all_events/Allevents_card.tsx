import { string } from 'prop-types'
import styles from '../../../../styles/event_page/Allevents_card.module.css';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EventPage from '../eventPage/EventPage';
const Allevents_card=()=>{
    return(
        <div>
             <div className={styles.container}>
                <div className={styles.card}>

                    <div className={styles.imageContainer}>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className={styles.events_title}><a href="#">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </a></h1>
                        <div className={styles.info}>
                            <p className={styles.date}style={{color:'rgb(172,172,172)'}}>May 25, 2021</p>
                             <p className={styles.post}> <strong className={styles.dot} style={{color:'rgb(172,172,172)'}}>.</strong><span style={{color:'rgb(172,172,172)'}}> by</span> <strong style={{color:'rgb(172,172,172)'}}> John smith</strong></p> 
                        </div>
                        <div className={styles.description}>
                        Move posts avoid perhaps. Spiders above see wish comments purposes. Lot reason around no by…
                        </div>
                        <div>
                            
                        </div>
                        <a 

                        
                             href="#" className={styles.more}
                          
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