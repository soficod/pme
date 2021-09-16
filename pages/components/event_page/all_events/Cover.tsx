import { string } from 'prop-types'
import styles from '../../../../styles/event_page/Cover.module.css';
import React, { useEffect } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';




const Cover=({content, slugPage}:any)=>{

    return(
        <div className={styles.sliderC}>
            <Slider 
                autoplay="2000"
                infinite="true"
            
                className={styles.slider_wrapper}>
            {
                content.map((item,index)=> {
                        return(
                            <div

                            key={index}
                            className={styles.slider_content}
                            
                            style={{
                                background: `url(${item.images[0]}) no-repeat center center`,
                                backgroundSize:`cover`
                            
                            }}
                        >
                            <div
                                className={styles.inner}>
                                <h1 className={styles.title}>{item.name}</h1>
                                <p>{item.Description}</p>
                                <div className={styles.info}>
                                    <p className={styles.organizer}>
                                    <span style={{color:'rgba(230, 228, 228, 0.657)'}}>Posted by</span> <strong style={{color:'rgba(230, 228, 228, 0.657)'}}>{item.organizer}</strong> 
                                    </p>
                                    <p style={{color:'rgba(230, 228, 228, 0.657)'}}>Le <strong style={{color:'rgba(230, 228, 228, 0.657)'}}>{item.start}</strong></p>
                                </div>
                        <div>
                            <a href={slugPage+"/"+item.slug}>
                                <button 
                                    className={styles.read}
                                    >
                                    En savoir plus
                                </button>
                            </a>
                        </div>
                        </div>
                    
                      
                    </div>
                    
                    ) })
                    
                    
                
            }
            

            </Slider>

        </div>
       
    )
}

export default Cover;