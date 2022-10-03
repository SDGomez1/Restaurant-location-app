import React from 'react'
import styles from '@styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = (props ) => {

    return( 
        <div className= {styles.Navbar}>
            <h1> FoodSearch</h1>
            <Link href={props.route}>
                <button> {props.buttonText}   </button>
            </Link>            
        </div>
)}

export {Navbar}