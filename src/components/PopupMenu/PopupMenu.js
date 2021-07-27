import './PopupMenu.css';
import React from "react";
import close from "../../images/close.svg";
import profile from '../../images/profile.png';
import { Link, Route, Switch } from 'react-router-dom';

function PopupMenu() {
  return (
    <div className = 'popup'>
      <div className = 'popup__container'>
        <button type = 'button' className = 'popup__close-btn'><img src = { close } alt = 'close-btn' className = 'popup__close' /></button>
        <div className = 'popup__container-links'>
          <div className = 'popup__links'>
            <Link to = '/main' className = 'popup__link'>Главная</Link>
            <Link to = '/movies' className = 'popup__link'>Фильмы</Link>
            <Link to = '/saved-movies' className = 'popup__link'>Сохраненные фильмы</Link>
          </div>
          <button type = 'button' className = 'popup__profile-btn'><img src = { profile } alt = 'profile' className = 'popup__profile' /></button>
        </div>
      </div>
    </div>
  );
}

export default PopupMenu;