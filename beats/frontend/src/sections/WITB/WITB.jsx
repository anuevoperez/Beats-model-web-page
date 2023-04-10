import React from 'react'
import Entry from '../../components/Entry/Entry'
import styles from './WITB.module.css';
import witb from "../../assets/witb.png";


const WITB = () => {
  return (
    <div className={styles.WITB} id="witb">
        <div className={styles.ContentImage}>
          <img src={witb} alt="Content"></img>
        </div>
        <div className={styles.EntryWITB}>
          <Entry
            title="What's in the Box"
            subtitle="Highlights"
            textButton="Choose your model"
            ruta={"#models"}
          >
            <ul>
              <li>Beats Solo3 Wireless headphones</li>
              <li>Carrying case</li>
              <li>3.5mm RemoteTalk cable</li>
              <li>Universal USB charging cable (USB-A to USB Micro-B)</li>
              <li>Quick Start Guide</li>
              <li>Warranty Card</li>
            </ul>
          </Entry>
        </div>
      </div>
  )
}

export default WITB