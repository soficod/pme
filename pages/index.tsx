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
import Reviews from './components/home_page/reviews/Reviews';
import axios from 'axios';

const Home = ({counts, events, documents}:any) => {
  
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
          <Events 
            events={events}
          />
          <Numbers 
            events={counts.events}
            articles={counts.articles}
            documents={counts.documents}
            users={counts.users}
          />
          <Documents
            documents={documents}
          />
          <Sponsors/>
          <Reviews />
          <Footer />
        </langContext.Provider>
    }
    </>
  );
}

Home.getInitialProps = async () => 
{
    /*const counts = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/statistics/count/all').catch(err => 
    {
      console.log("error: ", err);
    });

    const events = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/events').catch(err => 
    {
      console.log("error: ", err);
    });

    const documents = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/documents').catch(err => 
    {
      console.log("error: ", err);
    });*/

    const counts = {
      data: {
        data: {
          events: 0,
          members: 0,
          documents: 0,
          articles: 0
        }
      }
    }

    const events = {
      data: {
        data: []
      }
    }

    const documents = {
      data: {
        data: []
      }
    }
    return {
        counts: counts.data.data,
        events: events.data.data,
        documents: documents.data.data
    }
}

export default Home;
