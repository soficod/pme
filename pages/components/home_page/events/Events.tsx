import React, { useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Events.module.css';
import Cards from './Cards';
import Carousel from 'react-elastic-carousel';


const Events = ({events}:any) => 
{

    const {lang, changeLanguage}:any = useContext(langContext);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2},
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    
    ];
    return(
        <section id="events_link" className={styles.events_section}>
            <div className={styles.container}
            style={{
                position:'relative',
                zIndex: 250
            }}>
                <h1 className={styles.events_title}>
                    {lang.Events.title}
                </h1>
                
                <div 
                    className="separator"
                    style={{
                        margin: "auto",
                        backgroundColor:"#081744"
                    }}
                >
                    
                </div>
                
                <div className={styles.carouselContainer}>
                    <Carousel isRTL={false} breakPoints={breakPoints}>
                        {
                            events.map(event => 
                            {
                                return(
                                    <Cards
                                        slug={event.slug}
                                        name={event.name}
                                        images={event.images}
                                        start={event.start}
                                        end={event.end}
                                    />
                                )
                            })
                        }
                        
                    </Carousel>
                </div>
                <a href="#">
                    <button 
                    className={"scale-up-hover scale-down-tap " + styles.events_button}>
                        <span className={styles.button_text}>
                            Voir tout les événements
                        </span>
                    </button>
                </a>
            </div>

        </section>
    )
}

export default Events;