import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import Header from './components/user-components/header/Header'
import News from './components/news/News';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
 
const NewsPage = ({articles}:any) => 
{
    return(
        <>
            <Head>
                <title>PMEI - News</title>
            </Head>
            <Header 
                isAdmin={true}
            />
            <News
                articles={articles}
            />
        </>
    );
}

NewsPage.getInitialProps = async () => 
{
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/articles').catch(err => 
    {
      console.log("error: ", err);
    });   
    
    console.log(response);
    return {
        articles: response.data.data
    }
}

export default NewsPage;