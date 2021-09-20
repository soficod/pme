import { string } from 'prop-types'
import React, { useState, useContext } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { motion } from 'framer-motion';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/event_page/SlidesEvent.module.css';
import Carousel from 'react-elastic-carousel';
import EventCard from './EventCard';
const SlidesEvent=()=>{

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1},
        { width: 768, itemsToShow: 1},
        { width: 1100, itemsToShow: 3 }
    ]
    return(
        
        <section className={styles.slideContainer}>
         
                <h1 className={styles.events_title}>
                    Événements récents
                </h1>
                <p className={styles.text}>Don't miss to check out our recent events</p>
                
                <div className={styles.container} >
                    <Carousel isRTL={true} breakPoints={breakPoints} showArrows={false}    enableSwipe={true}>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    </Carousel>

                </div>



        </section>
    )
 }
export default SlidesEvent;
