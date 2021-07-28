import './MoviesCardList.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useEffect, useState } from "react";


function MoviesCardList(props) {

  const [isSaveBtn, setSaveBtn] = useState(false);

  function handleSaveBtn() {
    setSaveBtn(true);
  }

  function closeSaveBtn() {
    setSaveBtn(false);
  }

  return (
    <div>
    <Switch>
    <Route exact path = '/movies'>
      <MoviesCard isSave = { handleSaveBtn } button = 'Сохранить' buttonActive = " ✓ " isClick = {isSaveBtn ? 'movie-btn_active' : '' } isClose = {closeSaveBtn} />
    </Route>
    <Route exact path = '/saved-movies'>
      <SavedMovies isSave = { handleSaveBtn } button = '×' buttonActive = " ✓ " isClick = {isSaveBtn ? '' : 'movie-btn_active' } isClose = {closeSaveBtn} />
    </Route>
    </Switch>
    
    </div>
  );
}

export default MoviesCardList;