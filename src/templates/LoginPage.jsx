import { Navbar } from 'components/Navbar';
import { UserInput } from 'components/UserInput';
import { OptInButton } from 'components/OptInButton';
import { Footer } from 'components/Footer';
import styles from '@styles/LoginPage.module.css'


const LoginPage = () => {
    return(
    <div className= {styles.LoginPage}>
        <Navbar route = "/register" buttonText = "Sign In"/>
        <div className= {styles["LoginPage-container"]}>
            <h1> Connect to your account</h1>
            <UserInput text = "User" typeInput = "text" placeholderText = "User Name"/>
            <UserInput text = "Password" typeInput = "password" placeholderText = "Password"/>  
            <OptInButton route = "/home" buttonText = "Log In"/>   
        </div>
        <Footer/>
    </div>
    )
}

export {LoginPage}

