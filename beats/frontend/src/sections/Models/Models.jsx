import React from "react";
import styles from './Models.module.css';
import Product from "../../components/Product/Product";
import beatsblack from "../../assets/beatsblack.png";
import beatsrose from "../../assets/beatsrose.png";
import beatsblue from "../../assets/beatsblue.png";

const Models = () => {
  return (
    <div className={styles.Models} id="models">
      <div className={styles.TitleProducts}>
        <h2> Avaliable Colors </h2>
        <h3> Find your color </h3>
      </div>

      <div className={styles.RawProducts}>
      
          <Product
            image={beatsblack}
            alt="Beats black model"
            name="BEATS SOLO3 WIRELESS BLACK"
            price="$299.95"
          />

          <Product
            image={beatsrose}
            alt="Beats rose-gold model"
            name="BEATS SOLO3 WIRELESS ROSE"
            price="$299.95"
          />

          <Product
            image={beatsblue}
            alt="Beats red model"
            name="BEATS SOLO3 WIRELESS BLUE"
            price="$299.95"
          />

      </div>
    </div>
  );
};

export default Models;
