import React from 'react'
import styles from "./Product.module.css"

const Product = ({image, alt, name, price}) => {
  
  return (

    <div className={styles.Product}>
      <div className={styles.ProductImage}>
        <img src={image} alt={alt}/>
      </div>
      <span className={styles.Name}>{name}</span>
    </div>

  )
}

export default Product