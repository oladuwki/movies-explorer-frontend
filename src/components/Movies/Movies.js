import './Movies.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from "react";
import close from "../../images/close.svg";
import profile from '../../images/profile.png';

function Movies(props) {

  return (
    <div className = 'movies'>
      <div className = {`popup ${props.isOpen}`}>
      <div className = 'popup__container'>
        <button type = 'button' onClick = {props.onClose} className = 'popup__close-btn'><img src = { close } alt = 'close-btn' className = 'popup__close' /></button>
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
      <SearchForm />
      <MoviesCardList />
      <div className = 'movies-loading'>
        <button className = 'movies-btn'>Ещё</button>
      </div>
      <Preloader />
    </div>
  );
}

export default Movies;