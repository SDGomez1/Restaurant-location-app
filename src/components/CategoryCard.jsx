import React, { Fragment } from 'react'
import Image from 'next/image'
import styles from '@styles/CategoryCard.module.css'
const CategoryCard = (props) => {
    return (
        <div className={styles.CategoryCard}>

            <div className={styles["CategoryCard-img"]}>
               <Image src={props.imgUrl} alt= {props.altImg} />
            </div>
            <p > {props.text} </p>
        </div>
    )
}

export {CategoryCard}