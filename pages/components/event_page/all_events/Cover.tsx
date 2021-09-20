import { string } from 'prop-types'
import styles from '../../../../styles/event_page/Cover.module.css';
import React, { useEffect } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';




const Cover=()=>{

    const content=[
        {
            title:'first Event',
            Description:'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
            image:'/images/cover.jpg',
            date:'23/05/2021',
            user: 'Luan Gjokaj'
        },
        {
            title:'Second Event',
            Description:'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
            image:'/images/business-colleagues-rooftop-talking.jpg',
            date:'23/05/2021',
            user: 'Erich Behrens'
        },
        {
            title:'Third Event',
            Description:'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
            image:'/images/corporate-businessman.jpg',
            date:'23/05/2021',
            user: 'Bruno Vizovskyy'
        }

    ]

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
                                background: `url('${item.image}') no-repeat center center`,
                                backgroundSize:`cover`
                            
                            }}
                        >
                            <div
                                className={styles.inner}>
                                <h1 className={styles.title}>{item.title}</h1>
                                <p>{item.Description}</p>
                                <div className={styles.info}>
                                    <p className={styles.poster}>
                                    <span style={{color:'rgba(230, 228, 228, 0.657)'}}>Posted by</span> <strong style={{color:'rgba(230, 228, 228, 0.657)'}}>{item.user}</strong> 
                                    </p>
                                    <p style={{color:'rgba(230, 228, 228, 0.657)'}}>Le <strong style={{color:'rgba(230, 228, 228, 0.657)'}}>{item.date}</strong></p>
                                </div>
                        <div>
                            <button 
                                className={styles.read}
                                >
                                 read more
                            </button></div>
                        </div>
                    
                      
                    </div>
                    
                    ) })
                    
                    
                
            }
            

            </Slider>

        </div>
       
    )
}

export default Cover;