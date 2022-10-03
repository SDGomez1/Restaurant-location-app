import React from 'react'
import { Navbar } from 'components/Navbar'
import { CategoryCard } from 'components/CategoryCard'

import styles from '@styles/MainPage.module.css'
import { RestaurantCard } from 'components/RestaurantCard'

const MainPage = () => {
    return (
        <div>
            <Navbar route = "/" buttonText = "Log Out"/>
            <div className={styles["MainPage-container"]}>
                <h1>Welcome!</h1>
                <label className={styles["Maininput-title"]}> search a location for finding near restaurants</label>
                <input type="text" className={styles["Maininput-text"]} placeholder = "Enter a direction" /> 
            </div>
            <div className={styles["MainPage-Categorycontainer"]}>
                <CategoryCard text = "hi"/>
                <CategoryCard text = "hi"/>
                <CategoryCard text = "hi"/>
                <CategoryCard text = "hi"/>
                <CategoryCard text = "hi"/>
                <CategoryCard text = "hi"/>

            </div>

            <div className={styles["MainPage-Recommendationcontainer"]}>
                <h1>Recomendations</h1>
                <RestaurantCard title = "The restaurant - Premium food quality" category = "Premium food" location = "Near you"/>
                <RestaurantCard title = "The restaurant - Premium food quality" category = "hi" location = "hi"/>
                <RestaurantCard title = "The restaurant - Premium food quality" category = "hi" location = "hi"/>
            </div>

        </div>
    )
}

export {MainPage}