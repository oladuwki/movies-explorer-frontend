import './Movies.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import PopupMenu from '../PopupMenu/PopupMenu';
import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <div className = 'movies'>
      <PopupMenu />
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