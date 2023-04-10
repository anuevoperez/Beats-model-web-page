import React from 'react'
import styles from './Input.module.css'

const Input = ({label,name,type,placeholder,value,onChange,error}) => {
  
  return (
    
    <div className={styles.Input}>
        <label className={styles.Label} htmlFor={name}>{label}</label>
        <input 
          placeholder={placeholder} 
          className={styles.InputField} 
          type={type} 
          id={name}
          value={value}
          onChange={onChange}
          />
        {error && <span className={styles.Error}>{error}</span>}
    </div>
    
  )
}

export default Input