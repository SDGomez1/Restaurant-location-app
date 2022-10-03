import React from 'react'
import Link from 'next/link'
import styles from '@styles/OptInButton.module.css'


const OptInButton = (props) => {
    return(
        <Link href={props.route}>
            <button className={styles.optInButton}> {props.buttonText}</button>
        </Link>
    )  
}

export {OptInButton}