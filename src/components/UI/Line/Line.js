import React from 'react';
import styles from './Line.module.css';

const line = () => {
    return <div className={styles.Line}>
        <div className={styles.HalfLine}/>
        <p>ou</p>
        <div className={styles.HalfLine}/>
    </div>
}

export default line