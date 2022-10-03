import React from 'react'
import { Navbar } from 'components/Navbar';
import { UserInput } from 'components/UserInput';
import { OptInButton } from 'components/OptInButton';
import { Footer } from 'components/Footer';
import styles from '@styles/RegisterPage.module.css'

const RegisterPage = () => {
    return (
        <div>
            <Navbar route = "/" buttonText = "Log In"/>
            <div className= {styles["RegisterPage-container"]}>
                <h1> Register </h1>
                <UserInput text = "User" typeInput = "text" placeholderText = "User Name"/>
                <UserInput text = "Email" typeInput = "text" placeholderText = "user@example.com"/>
                <UserInput text = "Password" typeInput = "password" placeholderText = "Password"/>  
                <OptInButton route = "/thanks" buttonText = "Sign In"/>
            </div>
            <Footer/>
        </div>
    )
}
export {RegisterPage}