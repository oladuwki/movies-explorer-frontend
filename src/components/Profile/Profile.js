import './Profile.css';
import React from "react";
import arrow from "../../images/arrow.png"
import { Link, Route, Switch } from 'react-router-dom';

function Profile() {
  return (
    <div className = 'profile'>
      <h2 className = 'profile__title'>Привет, Никита!</h2>
      <div className = 'profile__container'>
       <div className = 'profile__box'>
         <p className = 'profile__name'>Имя</p>
         <input className ='profile__input' />
       </div>
       <div className = 'profile__line'></div>
       <div className = 'profile__box'>
         <p className = 'profile__name'>E-mail</p>
         <input className ='profile__input' />
       </div>
      </div>
      <div className = 'profile__buttons'>
        <button className = 'profile__edit-btn'>Редактировать</button>
        <button className = 'profile__exit-btn'>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;