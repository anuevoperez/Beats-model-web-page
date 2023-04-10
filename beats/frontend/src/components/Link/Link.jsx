import React from 'react'
import styles from "./Link.module.css"

const Button = ({ruta, children}) => {
  return (
      <a href={ruta} className={styles.Link}>{children}</a>
  )
}

export default Button