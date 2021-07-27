import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies'

function App() {
  return (
    <div className="page">
      
      <Header />
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
          <Movies />
        </Route>
        <Route exact path = '/saved-movies'>
          <SavedMovies />
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
