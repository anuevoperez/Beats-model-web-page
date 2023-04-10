import React from 'react'
import Link  from '../Link/Link'
import styles from './Entry.module.css'

const Entry = ({title, subtitle,textButton,ruta,children,align}) => {
  const customClass= `${styles.Entry} ${styles[align]}` 
  return (
    <div className={customClass}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        {children}
        <Link ruta={ruta}> {textButton} </Link>
    </div>
  )
}

export default Entry