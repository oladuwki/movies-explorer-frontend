import './Footer.css';
import logo from "../../images/logo.png";
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

function Footer() {
  return (
    <Switch>
      <Route exact path = '/'>
        <div className = 'footer'>
          <h2 className = 'footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className = 'footer__container'>
            <p className = 'footer__date'>&copy; 2021</p>
            <div className = 'footer__links'>
              <a href = '#' className = 'footer__link'>Яндекс.Практикум</a>
              <a href = '#' className = 'footer__link'>Github</a>
              <a href = '#' className = 'footer__link'>Facebook</a>
            </div>
          </div>
        </div>
      </Route>
      <Route path = '/movies'>
        <div className = 'footer'>
          <h2 className = 'footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className = 'footer__container'>
            <p className = 'footer__date'>&copy; 2021</p>
            <div className = 'footer__links'>
              <a href = '#' className = 'footer__link'>Яндекс.Практикум</a>
              <a href = '#' className = 'footer__link'>Github</a>
              <a href = '#' className = 'footer__link'>Facebook</a>
            </div>
          </div>
        </div>
      </Route>
      <Route path = '/saved-movies'>
        <div className = 'footer'>
          <h2 className = 'footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className = 'footer__container'>
            <p className = 'footer__date'>&copy; 2021</p>
            <div className = 'footer__links'>
              <a href = '#' className = 'footer__link'>Яндекс.Практикум</a>
              <a href = '#' className = 'footer__link'>Github</a>
              <a href = '#' className = 'footer__link'>Facebook</a>
            </div>
          </div>
        </div>
      </Route>
      <Route path = '/signup'>
      <div className = 'register-footer'>
        <div className = 'register-footer__container'>
          <button className = 'register-footer__btn'>Зарегестрироваться</button>
          <span className = 'register-footer__span'>Уже зарегестрированы? <Link to = '/signin' className = 'register-footer__link'>Войти</Link></span>
        </div>
      </div>
      </Route>
      <Route path = '/signin'>
      <div className = 'login-footer'>
        <div className = 'login-footer__container'>
          <button className = 'login-footer__btn'>Войти</button>
          <span className = 'login-footer__span'>Ещё не зарегистрированы? <Link to = 'signup' className = 'login-footer__link'>Регистрация</Link></span>
        </div>
      </div>
      </Route>
    </Switch>
    
  );
}

export default Footer;