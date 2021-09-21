import React from 'react';
import styles from './Login.module.css';
import penOnBookImg from '../../assets/images/pen_on_book.png';
import UserInput from '../UI/UserInput/UserInput';
import Button from '../UI/Button/Button';
import Line from '../UI/Line/Line';
import GoogleLogin from './GoogleLogin/GoogleLogin';

const login = () => {
    return <div className={styles.Login}>
       <div className={styles.Landscape}>
           <img alt="" src={penOnBookImg}/>
           <h1>Organize-se</h1>
           <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        </div>
        <div className={styles.UserCredentials}>
            <h1>Psi.calendar</h1>
            <UserInput span={"Email"}/>
            <UserInput span={"Senha"}/>
            <Button name={"Entrar"}/>
            <Line/>
            <GoogleLogin/>
            <div className={styles.RegisterLogin}>
                <p>Não tem cadastro? Crie sua conta <span>aqui</span></p>
            </div>

        </div>
    </div>
}

export default login;