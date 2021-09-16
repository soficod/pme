import { StylesProvider } from '@material-ui/styles'
import React from 'react';
import Allevents from './components/event_page/all_events/Allevents'
import Cover from './components/event_page/all_events/Cover'
import SlidesEvent from './components/event_page/all_events/SlidesEvent'
import styles from '../styles/event_page/Event.module.css';
import EventPage from './components/event_page/eventPage/EventPage';
import Head from 'next/head';
import Header from './components/user-components/header/Header';
import axios from 'axios';

const Training=({events}:any)=>{

    return(

        <>
          <Head>
            <title>Formations - PMEI</title>
          </Head>
          <Header 
              isAdmin={true}
          />
          <section className={styles.sectContainer}>
            <h1 style={{textAlign:"center"}}>Nos Formations</h1>
            {/*<Cover
              content={events.slice(0, events.length > 3 ? -3 : -events.length)}
              slugPage={'/training'}
            />*/}
            <Allevents
              events={events}
              slugPage={'/training'}
            />
          </section>
        </>
    )
}
export default Training;

Training.getInitialProps = async () => 
{
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/trainings').catch(err => 
    {
      console.log("error: ", err);
    });

    return {
        events: response.data.data
    }
}