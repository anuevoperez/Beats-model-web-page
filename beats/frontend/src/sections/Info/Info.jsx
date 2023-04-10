import React from "react";
import styles from "./Info.module.css";
import Entry from "../../components/Entry/Entry";
import wireless from "../../assets/wireless.png";


const Info = () => {
  return (
    <div className={styles.Info} id="info">
      <div className={styles.Article}>
        <Entry
          title="Product Information"
          subtitle="Overview"
          textButton="What's in the Box"
          ruta={"#witb"}
          align="left"
        >
          <p className={styles.text}>
            With up to 40 hours of battery life, Beats Solo3 Wireless is your
            perfect everyday headphone. With Fast Fuel, a 5-minute charge gives
            you 3 hours of playback. Enjoy award-winning Beats sound with Class
            1 Bluetooth® wireless listening freedom. The on-ear, cushioned ear
            cups are adjustable so you can customize your fit for all-day
            comfort. Beats Solo3 Wireless is ready to go when you are. They
            instantly set up - just power on and hold near your iPhone - and
            then simultaneously connect to your Apple Watch, iPad and Mac*{" "}
          </p>
        </Entry>
      </div>
      <div className={styles.InfoImage}>
        <img src={wireless} alt="Beats red model" />
      </div>
    </div>
  );
};

export default Info;
