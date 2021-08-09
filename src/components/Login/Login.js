import './Login.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Login({ error, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не должен быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не должен быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
      
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handlerBlur = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Некорректный email, пример: text@mail.ru");
      if (!event.target.value) {
        setEmailError("Email не должен быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordError("Пароль должен быть больше 8-ми символов");
      if (!event.target.value) {
        setPasswordError("Пароль не должен быть пустым");
      }
    } else if (event.target.value.length > 255) {
      setPasswordError("Пароль должен быть меньше 255-ти символов");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className = 'login'>
      <form className = 'login__container' onSubmit={handleSubmit} name='login'>
        <span className = 'login__span'>E-mail</span>
        <input className = 'login__input' 
          value={email}
          id='email-input'
          type='email'
          name='email'
          required
          onBlur={(event) => handlerBlur(event)}
          onChange={(event) => emailHandler(event)}
        />
        <div className = 'login__line'></div>
        {emailDirty && emailError && (
          <span id='email-input-error'  className={
            emailError
              ? "login__error login__error_active"
              : "login__error"
          }>
            {emailError}
          </span>
        )}
        <span className = 'login__span'>Пароль</span>
        <input className = 'login__input' 
          value={password}
          id='password-input'
          type='password'
          name='password'
          required
          onBlur={(event) => handlerBlur(event)}
          onChange={(event) => passwordHandler(event)}
        />
        <div className = 'login__line'></div>
        {passwordDirty && passwordError && (
            <span id='password-input-error' className={
            passwordError
              ? "login__error login__error_active"
              : "login__error"
          }>
              {passwordError}
            </span>
          )}
          <div className = 'login-footer'>
            <div className = 'login-footer__container'>
              <button className = 'login-footer__btn'
              disabled={!formValid}
              type='submit'
              value='Войти'>Войти</button>
              <span className = 'login-footer__span'>Ещё не зарегистрированы? <Link to = 'signup' className = 'login-footer__link'>Регистрация</Link></span>
            </div>
          </div>
      </form>
    </div>
  );
}

export default Login;