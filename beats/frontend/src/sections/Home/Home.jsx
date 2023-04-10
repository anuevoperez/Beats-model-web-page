import React from 'react';
import styles from './Home.module.css';
import Link from "../../components/Link/Link"
import home_img from "../../assets/home.jpg";
import useMediaQuery from '../../hook/useMediaQuery';
import movilebanner from './../../assets/beats-movile.jpeg'

const Home = () => {
  
  const matches= useMediaQuery('(max-width: 1400px)')

  const banner = matches ? movilebanner : home_img;
  return (
   
    <div className={styles.Home}>
    <div className={styles.BannerText}>
      <h1>
        <span className={styles.title_1}> Beats Solo3 </span>
        <span className={styles.title_2}> Wireless </span>
      </h1>

      <p className={styles.text}>
        With up to 40 hours of battery life, Beats Solo3 Wireless is your
        perfect everyday headphone. With Fast Fuel, a 5-minute charge gives
        you 3 hours of playback.
      </p>

      <Link ruta={"#info"}> GET MORE INFO </Link>
    </div>

    <div className={styles.BackgroundImage}>
      <img src={banner} alt="home" />
    </div>
  </div>
  
  )
}

export default Home