import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/home_page/navbar/Navbar';
import Presentation from './components/home_page/presentation/Presentation';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Presentation/>
    </>
  );
}

export default Home;
