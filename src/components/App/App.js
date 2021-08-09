import './App.css';
import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute.js";
import Header from "../Header/Header";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as MainApi from '../../utils/MainApi'
import * as MoviesApi from '../../utils/MoviesApi'

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("loggedIn")) || false
  );
  const [currentUser, setCurrentUser] = useState({});
  const [errorSignUp, setErrorSignUp] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [errorProfile, setErrorProfile] = useState(false);
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const [preloader, setPreloader] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [presenceFilms, setPresenceFilms] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [preloaderAuth, setPreloaderAuth] = useState(false);

  // token check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.checkToken(token)
        .then((result) => {
          if (result) {
            setLoggedIn(true);
            history.push(location.pathname);
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
          history.push("/signin");
          console.log(`${err}`);
        });
    }
  }, []);

  // РЕГИСТРАЦИЯ
  function login(email, password) {
    setPreloaderAuth(true);
    MainApi.authorize(email, password)
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("loggedIn", true);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setErrorSignIn(true);
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setPreloaderAuth(false);
        }, 300);
      });
  }

  // ЛОГИН
  function register(name, email, password) {
    setPreloaderAuth(true);
    MainApi.register(name, email, password)
      .then(() => {
        login(email, password);
      })
      .catch((err) => {
        if (err) {
          setErrorSignUp(true);
          console.log(err);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setPreloaderAuth(false);
        }, 300);
      });
  }

  // ПОЛУЧИТЬ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЕ ВСЕ ФИЛЬМЫ И СОХРАНЕННЫЕ
  useEffect(() => {
    setPreloader(true);
    if (loggedIn) {
      Promise.all([
        MainApi.getUserInfo(),
        MoviesApi.getMovies(),
        MainApi.getSaveMovies(),
      ])
        .then(([userInf, allMovies, saveMovies]) => {
          setCurrentUser(userInf);
          setMovies(allMovies);
          const currentUserSavedMovies = saveMovies.filter((m) => {
            return m.owner == currentUser._id;
          });
          setSavedMovies(currentUserSavedMovies);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [loggedIn, currentUser._id]);

  // СОХРАНИТЬ ФИЛЬМ
  const saveMovie = (movie) => {
    MainApi.saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // УДАЛИТЬ ФИЛЬМ
  const deleteMovie = (movie) => {
    const movieId = movie._id
      ? movie._id
      : savedMovies.find((item) => {
          return item.movieId === movie.id;
        })._id;

    MainApi.deleteSaveMovie(movieId)
      .then((res) => {
        if (res.message === "Фильм удалён") {
          const newArray = savedMovies.filter((item) => {
            return item._id !== movieId;
          });
          setSavedMovies([...newArray]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleLikeHandler = (movie, added) =>
    added ? saveMovie(movie) : deleteMovie(movie);

  const movieAdded = (movie) => {
    return savedMovies.find((item) => {
      return movie._id ? item._id === movie._id : item.movieId === movie.id;
    });
  };

  // Поиск по всем фильмам
  function handleSearchMovies(data) {
    setPreloader(true);
    const filteredArray = movies.filter((obj) => {
      return (
        obj.description?.toLowerCase().includes(data.toLowerCase()) ||
        obj.director?.toLowerCase().includes(data.toLowerCase()) ||
        obj.nameEN?.toLowerCase().includes(data.toLowerCase()) ||
        obj.nameRU?.toLowerCase().includes(data.toLowerCase())
      );
    });

    if (filteredArray.length !== 0) {
      setPresenceFilms(true);
    } else {
      setPresenceFilms(false);
    }

    setFoundMovies(filteredArray);
    localStorage.setItem("allMovies", JSON.stringify(filteredArray));

    setTimeout(() => {
      setPreloader(false);
    }, 300);
  }

  useEffect(() => {
    const allMoviesArrey = JSON.parse(localStorage.getItem("allMovies"));
    setPresenceFilms(true);
    if (allMoviesArrey) {
      setFoundMovies(allMoviesArrey);
    }
  }, []);

  // редактирование профиля
  function editUserInfo({ name, email }) {
    setPreloader(true);
    MainApi.editUserInfo({ name: name, email: email })
      .then((res) => {
        setErrorProfile(false);
        setCurrentUser(res);
      })
      .catch((err) => {
        setErrorProfile(true);
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setPreloader(false);
        }, 300);
      });
  }

  // ВЫХОД
  function handleSignOut() {
    setPreloader(false);
    localStorage.removeItem("token");
    setLoggedIn(false);
    setMovies([]);
    setCurrentUser({});
    localStorage.removeItem("allMovies");
    localStorage.removeItem("loggedIn");
    history.push("/");
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
          <Route>
            <Header loggedIn={loggedIn} />
          </Route>

          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>

            <ProtectedRoute
              path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              toggleLikeHandler={toggleLikeHandler}
              movieAdded={movieAdded}
              savedMovies={savedMovies}
              movies={movies}
              handleSearchMovies={handleSearchMovies}
              preloader={preloader}
              presenceFilms={presenceFilms}
              foundMovies={foundMovies}
            />

            <ProtectedRoute
              path='/saved-movies'
              component={SavedMovies}
              loggedIn={loggedIn}
              toggleLikeHandler={toggleLikeHandler}
              movieAdded={movieAdded}
              savedMovies={savedMovies}
              preloader={preloader}
            />

            <ProtectedRoute
              path='/profile'
              errorProfile={errorProfile}
              loggedIn={loggedIn}
              component={Profile}
              editUserInfo={editUserInfo}
              signOut={handleSignOut}
              preloader={preloader}
            />

            <Route path='/signup'>
              <Register error={errorSignUp} onRegister={register} />
            </Route>
            <Route path='/signin'>
              <Login error={errorSignIn} onLogin={login} />
            </Route>
          </Switch>

          <Route>
            <Footer />
          </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
