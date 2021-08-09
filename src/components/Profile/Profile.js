import './Profile.css';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import arrow from "../../images/arrow.png";

function Profile({ signOut, editUserInfo, errorProfile, preloader }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [nameError, setNameError] = useState("Имя не должен быть пустым");
  const [emailError, setEmailError] = useState("Email не должен быть пустым");

  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  useEffect(() => {
    if (!name) {
      setNameError("Имя не должен быть пустым");
    } else if (name.length < 2) {
      setNameError("Имя не должно быть больше 2х букв");
    } else {
      setNameError("");
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      setEmailError("Email не должен быть пустым");
    } else if (!re.test(String(email).toLowerCase())) {
      setEmailError("Некорректный email, пример: text@mail.ru");
    } else {
      setEmailError("");
    }
  }, [name, email]);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArray = { name: name, email: email };
    editUserInfo(newArray);
  };

  return (
    <form className = 'profile' onSubmit={handleSubmit} noValidate>
      <h2 className = 'profile__title'>Привет, {currentUser.name}!</h2>
      <div className = 'profile__container'>
       <div className = 'profile__box'>
         <p className = 'profile__name'>Имя</p>
         <input className ='profile__input'
                id='name-input'
                type='name'
                name='name'
                value={name}
                required
                onChange={(event) => nameHandler(event)}
         />
       </div>
       <div className = 'profile__line'></div>
       {nameError && (
              <span id='name-input-error' className={
            nameError
              ? "profile__error profile__error_active"
              : "profile__error"
          }>
                {nameError}
              </span>
            )}
       <div className = 'profile__box'>
         <p className = 'profile__name'>E-mail</p>
         <input className ='profile__input'
                id='email-input'
                type='email'
                name='email'
                value={email}
                required
                onChange={(event) => emailHandler(event)}
         />
       </div>
       {emailError && (
              <span id='email-input-error' className={
            emailError
              ? "profile__error profile__error_active"
              : "profile__error"
          }>
                {emailError}
              </span>
            )}
      </div>
      <div className = 'profile__buttons'>
        <button className = 'profile__edit-btn'  disabled={
                (currentUser.name === name && currentUser.email === email) ||
                !formValid
              }
              type='submit'
              value='Редактировать'>Редактировать</button>
        <Link to = 'signin' onClick={signOut} className = 'profile__exit-btn'>Выйти из аккаунта</Link>
        {errorProfile && (
            <span id='submit-error' className={
            errorProfile
              ? "profile__error profile__error_active"
              : "profile__error"
          }>
              Ошибка редактирования
            </span>
          )}
      </div>
    </form>
  );
}

export default Profile;