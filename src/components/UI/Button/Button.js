import React from 'react';
import styles from './Button.module.css';

const button = ({name}) => {
    return <div className={styles.Button}>
        <button>{name}</button>
    </div>
}

export default button;