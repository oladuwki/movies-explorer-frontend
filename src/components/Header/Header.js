import './Header.css';
import logo from "../../images/logo.png";
import profile from '../../images/profile.png'
import openPopup from '../../images/openPopup.svg';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

function Header(props) {
  return (
    <Switch>
      <Route exact path = '/'>
      <div className = 'header'>
        <div className = 'header__container'>
          <Link to = '/'><img src={ logo } alt = 'logo' className = 'header__logo' /></Link>
          <div className = 'header__auth'>
              <Link to = '/signup'><button className = 'header__register'>Регистрация</button></Link>
              <Link to = '/signin'><button className = 'header__login'>Войти</button></Link>
          </div>
        </div>
      </div>
      </Route>
      <Route path = '/signup'>
        <div className = 'header-register'>
        <div className = 'header-register__container'>
        <Link to = '/'><img src={ logo } alt = 'logo' className = 'header-register__logo' /></Link>
            <h2 className = 'header-register__title'>Добро пожаловать!</h2>
          </div>
        </div>
      </Route>
      <Route path = '/signin'>
        <div className = 'header-login'>
        <div className = 'header-login__container'>
        <Link to = '/'><img src={ logo } alt = 'logo' className = 'header-login__logo' /></Link>
            <h2 className = 'header-login__title'>Рады видеть!</h2>
          </div>
        </div>
      </Route>
      <Route path = '/movies'>
        <div className = 'header-movies'>
        <div className = 'header-profile__container'>
            <div>
            <Link to = '/'><img src={ logo } alt = 'logo' className = 'header-profile__logo' /></Link>
            </div>
            <div className = 'header-profile__movie-box'>
              <Link to = '/movies' className = 'header-profile__movies'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'header-profile__saved-movies'>Сохраненные фильмы</Link>
            </div>
            <button onClick = {props.onMenu} type = 'button' className = {`header__popup-btn ${props.isMenuIcon}`}><img src = { openPopup } alt = 'openPopup-btn' className = 'header__popup-menu' /></button>
          </div>
          <Link to = '/profile'><img src = {profile} alt = 'profile' className = 'header-profile__image' /></Link>
        </div>
      </Route>
      <Route path = '/saved-movies'>
        <div className = 'header-movies'>
          <div className = 'header-profile__container'>
            <div>
            <Link to = '/'><img src={ logo } alt = 'logo' className = 'header-profile__logo' /></Link>
            </div>
            <div className = 'header-profile__movie-box'>
              <Link to = '/movies' className = 'header-profile__movies'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'header-profile__saved-movies'>Сохраненные фильмы</Link>
            </div>
          </div>
          <Link to = '/profile'><img src = {profile} alt = 'profile' className = 'header-profile__image' /></Link>
          <button onClick = {props.onMenu} type = 'button' className = {`header__popup-btn ${props.isMenuIcon}`}><img src = { openPopup } alt = 'openPopup-btn' className = 'header__popup-menu' /></button>
        </div>
      </Route>
      <Route path = '/profile'>
        <div className = 'header-profile'>
        <div className = 'header-profile__container'>
            <div>
            <Link to = '/'><img src={ logo } alt = 'logo' className = 'header-profile__logo' /></Link>
            </div>
            <div className = 'header-profile__movie-box'>
              <Link to = '/movies' className = 'header-profile__movies'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'header-profile__saved-movies'>Сохраненные фильмы</Link>
            </div>
          </div>
          <Link to = '/profile'><img src = {profile} alt = 'profile' className = 'header-profile__image' /></Link>
        </div>
      </Route>
    </Switch>
    
  );
}

export default Header;