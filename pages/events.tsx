import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import Allevents from './components/event_page/all_events/Allevents'
import Cover from './components/event_page/all_events/Cover'
import SlidesEvent from './components/event_page/all_events/SlidesEvent'
import styles from '../styles/event_page/Event.module.css';


const Event=()=>{

    return(

        <>

           
              <section className={styles.sectContainer}>

                <Cover/>   
                <SlidesEvent/>
                <Allevents/>
              </section>
        
       
        
        </>
    )
}
export default Event;