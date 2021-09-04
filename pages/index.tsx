import Head from 'next/head';
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
import Sponsors from './components/home_page/sponsors/Sponsors';
import Footer from './components/home_page/footer/Footer';


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
          <Sponsors/>
          <Footer />
        </langContext.Provider>
    }
    </>
  );
}

export default Home;
