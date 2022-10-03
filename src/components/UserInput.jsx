import React, { Fragment } from 'react'
import styles from '@styles/UserInput.module.css'

const UserInput = (props) => {
    return (
        <div className={styles.UserInput}>
            <label className={styles["input-title"]}> {props.text}</label>
            <input type={props.typeInput} className={styles["input-text"]} placeholder = {props.placeholderText} /> 
        </div>
    );
}

export {UserInput}