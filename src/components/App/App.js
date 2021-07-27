import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import React, { useEffect, useState } from "react";

function App() {
  const [isMenuIcon, setMenuIconOpen] = useState(false);
  const [isMenuCloseIcon, setMenuCloseIconOpen] = useState(false);  
  const [isMenuOpened, setMenuOpened] = useState(false);


  function handleMenuClick() {
    setMenuOpened(true);
    setMenuIconOpen(true);
    setMenuCloseIconOpen(true);
  }

  function closeAllPopups() {
    setMenuOpened(false);
    setMenuIconOpen(false);
    setMenuCloseIconOpen(false);
  }

  return (
    <div className="page">
      
      <Header  onMenu={handleMenuClick} 
    isMenuIcon={isMenuIcon && 'popup_closed'}
    isMenuCloseIcon={isMenuCloseIcon ? 'popup_opened' : 'popup_closed'}   onClose={closeAllPopups} />
      <Route path = '/signup'>
          <Register />
      </Route>
      <Route path = '/signin'>
        <Login />
      </Route>
      <Switch>
        <Route exact path = '/'>
        <Main />
        </Route>
        <Route exact path = '/movies'>
          <Movies isOpen = {isMenuOpened && 'popup_opened'} onClose={closeAllPopups}  />
        </Route>
        <Route exact path = '/saved-movies'>
          <Movies isOpen = {isMenuOpened && 'popup_opened'} onClose={closeAllPopups}  />
        </Route>
        <Route path = '/profile'>
          <Profile />
        </Route>
      </Switch>
        <Footer />
      
    </div>
  );
}

export default App;
