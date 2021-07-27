import './Login.css';
import React from "react";
import arrow from "../../images/arrow.png"
import { Link, Route, Switch } from 'react-router-dom';

function Login() {
  return (
    <div className = 'login'>
      <div className = 'login__container'>
        <span className = 'login__span'>E-mail</span>
        <input className = 'login__input' />
        <div className = 'login__line'></div>
        <span className = 'login__error'>Что-то пошло не так...</span>
        <span className = 'login__span'>Пароль</span>
        <input className = 'login__input' />
        <div className = 'login__line'></div>
        <span className = 'login__error'>Что-то пошло не так...</span>
      </div>
    </div>
  );
}

export default Login;