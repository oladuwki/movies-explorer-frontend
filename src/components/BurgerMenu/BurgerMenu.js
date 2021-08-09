
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import closeImg from "../../images/close.svg";
import profile from '../../images/profile.png';
import './BurgerMenu.css'

function BurgerMenu({ open, close }) {
  return (
      <div className = {`popup ${open ? "" : "popup_opened"}`}>
        <div className = 'popup__container'>
          <button onClick={close} className = 'popup__close-btn'><img src = { closeImg } alt = 'close-btn' className = 'popup__close' /></button>
          <div className = 'popup__container-links'>
            <div className = 'popup__links'>
              <Link to = '/' className = 'popup__link'>Главная</Link>
              <Link to = '/movies' className = 'popup__link'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'popup__link'>Сохраненные фильмы</Link>
            </div>
            <button type = 'button' className = 'popup__profile-btn'><img src = { profile } alt = 'profile' className = 'popup__profile' /></button>
          </div>
        </div>
      </div>  
  );
}

export default BurgerMenu;