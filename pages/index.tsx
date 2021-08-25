import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Navbar from './components/home_page/navbar/Navbar';
import Main from './components/home_page/main/Main';
import Mission from './components/home_page/mission/Mission';
import Presentation from './components/home_page/presentation/Presentation';
import { useLanguage } from './services/useLanguage';
import { langContext } from './services/langContext';
import Rejoindre from './components/home_page/rejoindre/Rejoindre';
import Numbers from './components/home_page/numbers/Numbers';
import Events from './components/home_page/events/Events';
import Documents from './components/home_page/documents/Documents';



const Home = () => {
  
  const [lang, changeLanguage] = useLanguage();



  return (
    <>
      <Head>
        <title>PME INTERCONNECT</title>
      </Head>
      {
        <langContext.Provider value={{
            lang: lang, 
            changeLanguage: changeLanguage
          }}
        >
          <Navbar/>
          <Main />
          <Presentation />
          <Mission/>
          <Rejoindre/>
          <Events />
          <Numbers />
          <Documents/>
        </langContext.Provider>
    }
    </>
  );
}

export default Home;
