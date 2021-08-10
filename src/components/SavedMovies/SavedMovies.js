import './SavedMovies.css';
import React, { useState, useEffect } from "react";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { DURATION_MOVIE } from "../../utils/constants";

function SavedMovies({ toggleLikeHandler, movieAdded, savedMovies }) {
  const [showFoundMovies, setShowFoundMovies] = useState([]);
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setShowFoundMovies(savedMovies);
  }, [savedMovies]);

  const [filter, setfilter] = useState(false);
  const filterMovies = (movies) =>
    movies.filter((item) => item.duration < DURATION_MOVIE);

  const onFilter = () => {
    setfilter(!filter);
  };

  function handleSearchMovies(data) {
    setPreloader(true);
    const filteredArray = savedMovies.filter((obj) => {
      return (
        obj.description?.toLowerCase().includes(data.toLowerCase()) ||
        obj.director?.toLowerCase().includes(data.toLowerCase()) ||
        obj.nameEN?.toLowerCase().includes(data.toLowerCase()) ||
        obj.nameRU?.toLowerCase().includes(data.toLowerCase())
      );
    });

    setShowFoundMovies(filteredArray);

    setTimeout(() => {
      setPreloader(false);
    }, 300);
  }

  return (
    <>
      <SearchForm onSearch={handleSearchMovies} onFilter={onFilter} />
      <section className='movies'>
        {savedMovies.length !== 0 || showFoundMovies.length !== 0 ? (
          <MoviesCardList
            movieAdded={movieAdded}
            preloader={preloader}
            showFoundMovies={
              filter ? filterMovies(showFoundMovies) : showFoundMovies
            }
            toggleLikeHandler={toggleLikeHandler}
          />
        ) : (
          <h3 className='text-nothing-found'>Ничего не найдено</h3>
        )}
      </section>
    </>
  );
}
export default SavedMovies;