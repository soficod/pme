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

const EventPage =()=>{
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
                      This is the title of the Event 
                    </h1>
                      <div className={styles.description}>
                        <p>
                             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                             quae ab illo inventore veritatis et quasi architecto beatae vitae 
                             dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                             aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                             eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                             qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                             sed quia non numquam eius modi tempora incidunt ut labore et dolore
                             magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                             nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                             aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                             qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                             vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
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
                              <span className={styles.dateTitle}>date de l'évenement</span>
                             </dt>
                          </dl>
                            <dl className={styles.ligne}>
                              <dt className={styles.datedf}>
                                  date De début
                              </dt>
                              <dt className={styles.date}>
                                  20-06-2021
                              </dt>
                            </dl>
                            <dl className={styles.ligne}>
                            <dt className={styles.datedf}>
                                  date De fin
                              </dt>
                              <dt className={styles.date}>
                                  20-06-2021
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
                            <dt className={styles.name}>John smith</dt>
                          </dl>
                         
                        </div>
                        <div className={styles.det}>
                        <dl>
                            <dt>
                              <Place style={{ fontSize: 35,
                                       color: "#90CBE5"
                              
                              }}/>
                              <span className={styles.organisateur}>Organisateur</span>
                            </dt>
                          </dl>
                          <dl className={styles.ligne}>
                              <dt className={styles.datedf}>
                                  wilaya
                              </dt>
                              <dt className={styles.date}>
                                  Boumerdes
                              </dt>
                            </dl>
                            <dl className={styles.ligne}>
                            <dt className={styles.datedf}>
                                 daira
                              </dt>
                              <dt className={styles.date}>
                                  Boumerdes
                              </dt>
                            </dl>
                            <dl className={styles.ligne}>
                            <dt className={styles.datedf}>
                                 town
                              </dt>
                              <dt className={styles.date}>
                                  Boumerdes
                              </dt>
                            </dl>
                         
                        </div>
                   
                
        </div>
          

</div>
        </section>
    )
}
export default EventPage;