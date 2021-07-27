import './MoviesCard.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import card from "../../images/card.png"

function MoviesCard(props) {
  return (
    <div className = "movies-cards">
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = { props.isSave } onClose = { props.isClose } className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
          <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
      <div className = 'movies-card__container'>
        <div className = 'movies-card__title-box'>
          <h2 className = 'movies-card__title'>В погоне за Бенкси</h2>
          <p className = 'movies-card__time'>27 минут</p>
        </div>
        <img src = { card } alt = 'card' className = '' className = 'movies-card__image' />
        <div className = 'movies-card__button-box'>
        <button onClick = {props.isSave} className = {`movies-card__button ${props.isClick}`} type = 'button'>{props.isClick ? props.buttonActive : props.button}</button>
        </div>
      </div>
    </div>
      
  );
}

export default MoviesCard;