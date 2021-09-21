import React from 'react';
import styles from './UserInput.module.css';

const userInput = ({span}) => {
    return <form className={styles.UserInput}>
        <input required={true} type="text"/>
        <label>
            <span>{span}</span>
        </label>
    </form>
}

export default userInput;