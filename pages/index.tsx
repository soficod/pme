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
        </langContext.Provider>
    }
    </>
  );
}

export default Home;
