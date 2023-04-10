import React from 'react'
import styles from './Button.module.css'

const Button = ({type, onClick, children}) => {
  
  return (
      <button className={styles.Button} type={type} onClick={onClick}> {children} </button>
  )
}

export default Button