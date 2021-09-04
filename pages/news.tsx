import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import Header from './components/user-components/header/Header'
import Navbar from './components/user-components/navbar/Navbar';
import News from './components/news/News';

const Login = () => 
{
    const [lang, changeLanguage] = useLanguage();

    return(
        <>
            <Head>
                <title>PMEI - News</title>
            </Head>
            <Header/>
            <News/>
        </>
    );
}

export default Login;