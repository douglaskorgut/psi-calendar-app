import React from 'react';
import styles from './GoogleLogin.module.css';
import googleImg from '../../../assets/images/google_img.png';

const googleLogin = () => {
    return <div className={styles.GoogleLogin}>
        <img alt="" src={googleImg}/>
        <p>Entre com o Google</p>
    </div>
}

export default googleLogin;