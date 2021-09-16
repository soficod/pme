import { string } from 'prop-types'
import styles from '../../../../styles/event_page/Allevents.module.css';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';
import Allevents_card from './Allevents_card';
import Pagination from '@material-ui/lab/Pagination';
const Allevents=({events, slugPage}:any)=>{

    return(
        <section className={styles.Allevnts_section}>

            <div className={styles.events_container}>
                  
                {
                    events.map((event:any) => 
                    {
                        return(
                            <Allevents_card
                                title={event.name}
                                images={event.images}
                                date={event.start}
                                poster={event.organizer}
                                description={event.description}
                                slug={slugPage+"/"+event.slug}
                            />
                        )
                    })
                }
                <Pagination count={10} variant="outlined" color="primary" />

            </div>

   


        </section>
    )
}
export default Allevents;