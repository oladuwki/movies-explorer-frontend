import './Register.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

function Register() {
  return (
    <div className = 'register'>
      <div className = 'register__container'>
        <span className = 'register__span'>Имя</span>
        <input className = 'register__input' />
        <div className = 'register__line'></div>
        <span className = 'register__error'>Что-то пошло не так...</span>
        <span className = 'register__span'>E-mail</span>
        <input className = 'register__input' />
        <div className = 'register__line'></div>
        <span className = 'register__error'>Что-то пошло не так...</span>
        <span className = 'register__span'>Пароль</span>
        <input className = 'register__input' />
        <div className = 'register__line'></div>
        <span className = 'register__error'>Что-то пошло не так...</span>
      </div>
    </div>
  );
}

export default Register;