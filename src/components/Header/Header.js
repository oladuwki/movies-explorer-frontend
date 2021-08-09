import './Header.css';
import logo from "../../images/logo.png";
import profile from '../../images/profile.png'
import openPopup from '../../images/openPopup.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';

function Header({loggedIn}) {

  const [openMenu, setOpenMenu] = useState(true);
  function handleOpen() {
    setOpenMenu(false);
  }
  function handleClose() {
    setOpenMenu(true);
  }

  return (
    <Switch>
      <Route exact path = '/'>
      {loggedIn ? (
        <div className = 'header'>
        <div className = 'header-profile__container'>
            <div>
            <Link to = '/'><img src={ logo } alt = 'logo' className = 'header-profile__logo' /></Link>
            </div>
            <div className = 'header-profile__movie-box'>
              <Link to = '/movies' className = 'header-profile__movies'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'header-profile__saved-movies'>Сохраненные фильмы</Link>
            </div>
            <img onClick={handleOpen} src = { openPopup } alt = 'openPopup-btn' className = 'header__popup-menu header__popup-menu_logeddin' />
            <BurgerMenu open={openMenu} close={handleClose} />
          </div>
          <Link to = '/profile'><img src = {profile} alt = 'profile' className = 'header-profile__image' /></Link>
        </div>
      ) : (
        <div className = 'header'>
        <div className = 'header__container'>
          <Link to = '/'><img src={ logo } alt = 'logo' className = 'header__logo' /></Link>
          <div className = 'header__auth'>
              <Link to = '/signup'><button className = 'header__register'>Регистрация</button></Link>
              <Link to = '/signin'><button className = 'header__login'>Войти</button></Link>
          </div>
        </div>
      </div>
      )}
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
              <Link to = '/movies' className = 'header-profile__movies header-decoration'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'header-profile__saved-movies'>Сохраненные фильмы</Link>
            </div>
            <img onClick={handleOpen} src = { openPopup } alt = 'openPopup-btn' className = 'header__popup-menu' />
            <BurgerMenu open={openMenu} close={handleClose} />
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
              <Link to = '/saved-movies' className = 'header-profile__saved-movies header-decoration'>Сохраненные фильмы</Link>
            </div>
            
            <img onClick={handleOpen} src = { openPopup } alt = 'openPopup-btn' className = 'header__popup-menu' />
            <BurgerMenu open={openMenu} close={handleClose} />
          </div>
          <Link to = '/profile'><img src = {profile} alt = 'profile' className = 'header-profile__image' /></Link>
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