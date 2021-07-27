import './MoviesCardList.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <div className = 'movies-cards'>
      <MoviesCard />
    </div>
  );
}

export default MoviesCardList;