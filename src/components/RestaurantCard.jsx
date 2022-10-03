import React from 'react'
import Image from 'next/image'
import styles from '@styles/RestaurantCard.module.css'

const RestaurantCard = (props) => {
    return (
        <div className={styles.RestaurantCard}>
            <div className={styles["RestaurantCard-img"]}>
            <Image src={props.imgUrl} alt= {props.altImg} />
            </div>
            <h4>{props.title}</h4>
            <p>{props.category}</p>
            <p>{props.location}</p>
        </div>
    )
}

export {RestaurantCard}