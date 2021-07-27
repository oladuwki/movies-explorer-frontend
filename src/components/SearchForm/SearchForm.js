import './SearchForm.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import checkbox from "../../images/checkbox.png"

function SearchForm() {
  return (
    <div className = 'search'>
      <form className = 'search__form'>
        <input className = 'search__form-input' placeholder = 'Фильмы' />
        <button className = 'search__form-button'>Найти</button>
      </form>
      <div className = 'filter'>
        <button className = 'filter__btn'><img src = { checkbox } alt = 'checkbox' className = 'filter__image' /></button>
        <p className = 'filter__text'>Короткометражки</p>
      </div>
      <div className = 'search__line'></div>
    </div>
  );
}

export default SearchForm;