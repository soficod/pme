import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import Header from './components/user-components/header/Header'
import News from './components/news/News';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import { session_option } from '../pme-data/cookie-option';
import { withIronSession } from 'next-iron-session';

const NewsPage = ({articles, isLogged, isAdmin}:any) => 
{
    return(
        <>
            <Head>
                <title>PMEI - News</title>
            </Head>
            <Header 
                isAdmin={isAdmin}
                isLogged={isLogged}
            />
            <News
                articles={articles}
            />
        </>
    );
}

export const getServerSideProps = withIronSession(async ({req, res}:any) => {
    
    const user_token = req.session.get("pmei-user-token");

    const response:any = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/articles').catch(err => 
    {
        console.log("error: ", err);
    });
    
    let isAdmin = false;
    let isLogged = false;
    if(typeof(user_token) != "undefined" && user_token)
    {
        //check if he's admin
        isLogged=true;
    }
    
    
    console.log(response);
    return {
        props: {
            articles: response.data.data,
            isAdmin: isAdmin,
            isLogged: isLogged
        }
    }

},session_option);

export default NewsPage;