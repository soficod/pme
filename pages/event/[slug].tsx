import Head from 'next/head';
import React from 'react'
import EventPage from '../components/event_page/eventPage/EventPage';
import axios from 'axios'
import Header from '../components/user-components/header/Header';
const Event =({event}:any)=>
{

    return(
        <>
            <Head>
                <title>{event.name}</title>
            </Head>

            <Header
                isAdmin={false}
            />
            <EventPage
                event={event}
            />
        </>
    )
}

export default Event;

Event.getInitialProps = async ({query}:any) =>
{
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/events/'+query.slug).catch(err => 
    {
        console.log("error: ", err);
    });

    return {
        event: response.data.data
    }
}