import React, {useState,useEffect} from 'react'
import styles from './NavBar.module.css'
import linkedin from './../../assets/linkedin.png'

const NavBar = ({logo, alt}) => {

  const [open,setOpen]=useState(false)
  const navStyle= `${styles.NavBar} ${open?styles.active:''}`

  
  const changeNavBar=()=>{
    setOpen(prev=>!prev)
  }
  useEffect(
    ()=>{
        const handleCloseBar= (event)=>{
            const $nav= document.getElementById('navbar');
            if(event.target !== $nav && !$nav.contains(event.target)){
                if(open) setOpen(false);
            }
        }
        document.addEventListener('click',handleCloseBar)
        return()=>{
            document.removeEventListener('click', handleCloseBar);
        }
    },
    [open]
  )
  return (
    <nav className={navStyle} id="navbar">
        <div className={styles.logo}>
            <img src={logo} alt={alt} />
        </div>

        <span className={styles.dspbtn} onClick={changeNavBar}> <ion-icon name="chevron-down-outline"></ion-icon> </span>
        
        <ul className={styles.opciones}>

            <li>  
                <a href="#home"> <ion-icon name="home-outline"></ion-icon> Home </a> 
            </li>

            <li>
                <a href="#info"> <ion-icon name="information-circle-outline"></ion-icon> Info </a> 
            </li>

            <li>
                <a href="#witb"> <ion-icon name="albums-outline"></ion-icon> Witb </a> 
            </li>

            <li>
                <a href="#models"> <ion-icon name="apps-outline"></ion-icon> Models </a> 
            </li>

            <li>
                <a href="#subscribe"> <ion-icon name="mail-outline"></ion-icon> Subscribe </a> 
            </li>
        </ul>

        <a href="https://www.linkedin.com/in/nuevoperezadrian" target="_blank" rel="noreferrer"> 
            <span className={styles.sign}> Adrián Nuevo Pérez © 2023 </span> 
            <img className={styles.iconLinkedin} src={linkedin} alt="Linkedin"/> 
        </a>
    </nav>
  )
}

export default NavBar