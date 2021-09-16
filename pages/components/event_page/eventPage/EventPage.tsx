import { string } from 'prop-types'
import styles from '../../../../styles/event_page/EventPage.module.css';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CalendarToday, CalendarViewDay, CalendarViewDayRounded, CalendarViewDaySharp, Place, Today } from '@material-ui/icons';
import EventIcon from '@material-ui/icons/Event';
import { blue } from '@material-ui/core/colors';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PlaceIcon from '@material-ui/icons/Place';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const EventPage =({event}:any)=>{
      const images = [
            {
              original: 'http://lorempixel.com/1000/600/nature/1/',
              thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/2/',
              thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/3/',
              thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
          ]
    return(
  
        <section className={styles.sectionContainer}> 
        <div className={styles.wrapper}>
            <div className={styles.eventContainer}>
              <div className={styles.gallery}>
                    <ImageGallery  
                      items={images}
                      thumbnailPosition="bottom"
                      showBullets={true}
                      swipingTransitionDuration={1000}
                      slideInterval={5000}
                      slideDuration={1000}
                      preventDefaultTouchmoveEvent={true}
                      disableSwipe={true}
                      showNav={false}
                      autoPlay={true}
                    
                    />
                    
                    <h1 className={styles.titre}>
                      {event.name}
                    </h1>
                      <div className={styles.description}>
                        <p>
                             {event.description}
                        </p>
                        <motion.button 
                            
                            className={styles.button}
                              whileHover={{ scale: 0.9 }}
                            
                        >
                            <span className={styles.textButton}> Download Files</span>
                              <motion.div
                               whileHover={{ y:3 }}
                              
                              >
                              <CloudDownloadIcon 
                              className={styles.icon}

                                style={{ fontSize: 25,
                                  color: "#90CBE5"}}
                              />
                              </motion.div>
                         </motion.button>
                      </div>
                    
                    </div>
                    
              </div>
              <div className={styles.details}>  
                        <div className={styles.det}>
                          <dl>
                            <dt>
                              <EventIcon 
                              style={{ fontSize: 35,
                                       color: "#90CBE5"
                              
                              }} />
                              <span className={styles.dateTitle}>Date de l'évenement</span>
                             </dt>
                          </dl>
                            <dl className={styles.ligne}>
                              <dt className={styles.datedf}>
                                  Date De début
                              </dt>
                              <dt className={styles.date}>
                                  {event.start}
                              </dt>
                            </dl>
                            <dl className={styles.ligne}>
                            <dt className={styles.datedf}>
                                  Date De fin
                              </dt>
                              <dt className={styles.date}>
                                  {event.end}
                              </dt>
                            </dl>
                          </div>
                        <div className={styles.det}>
                          <dl>
                            <dt>
                              <PeopleAltIcon style={{ fontSize: 35,
                                       color: "#90CBE5"
                              
                              }}/>
                              <span className={styles.organisateur}>Organisateur</span>
                            </dt>
                          </dl>
                          <dl>
                            <dt className={styles.name}>{event.organizer}</dt>
                          </dl>
                         
                        </div>
                        <div className={styles.det}>
                        <dl>
                            <dt>
                              <Place style={{ fontSize: 35,
                                       color: "#90CBE5"
                              
                              }}/>
                              <span className={styles.organisateur}>Emplacement</span>
                            </dt>
                          </dl>
                          <dl className={styles.ligne}>
                              <dt className={styles.datedf}>
                                  Wilaya
                              </dt>
                              <dt className={styles.date}>
                                  event.wilaya
                              </dt>
                            </dl>
                            <dl className={styles.ligne}>
                            <dt className={styles.datedf}>
                                 Daira
                              </dt>
                              <dt className={styles.date}>
                                  {event.wilaya}
                              </dt>
                            </dl>
                            <dl className={styles.ligne}>
                            <dt className={styles.datedf}>
                                 Town
                              </dt>
                              <dt className={styles.date}>
                                  {event.town}
                              </dt>
                            </dl>
                         
                        </div>
                   
                
        </div>
          

</div>
        </section>
    )
}
export default EventPage;