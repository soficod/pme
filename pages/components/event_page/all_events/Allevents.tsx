import { string } from 'prop-types'
import styles from '../../../../styles/event_page/Allevents.module.css';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { colorMix } from 'tsparticles/Utils';
import Allevents_card from './Allevents_card';
import Pagination from '@material-ui/lab/Pagination';
const Allevents=()=>{

    return(
        <section className={styles.Allevnts_section}>

            <div className={styles.events_container}>
                  <Allevents_card/>
                  <Allevents_card/>
                  <Allevents_card/>
                  <Allevents_card/>
                  <Allevents_card/>
                  <Allevents_card/>
                  <Pagination count={10} variant="outlined" color="primary" />

            </div>

   


        </section>
    )
}
export default Allevents;