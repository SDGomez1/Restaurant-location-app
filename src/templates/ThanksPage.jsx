import React from 'react'
import { Navbar } from 'components/Navbar';
import { OptInButton } from 'components/OptInButton';
import { Footer } from 'components/Footer';
import styles from '@styles/ThanksPage.module.css'

const ThanksPage = () => {
    return (
        <div>
            <Navbar route = "/" buttonText = "Log In"/>
            <div className= {styles["ThanksPage-container"]}>
                <h1> Thank you for signing in </h1>
                <p> Now you have the power for locating any restaurant in your area</p>
                  
                <OptInButton route = "/home" buttonText = "Explore"/>
            </div>
            <Footer/>
        </div>
    )
}
export {ThanksPage}