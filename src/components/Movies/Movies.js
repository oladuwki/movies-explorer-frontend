import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState } from "react";
import { DURATION_MOVIE } from "../../utils/constants";

function Movies({
  toggleLikeHandler,
  movieAdded,
  savedMovies,
  handleSearchMovies,
  preloader,
  presenceFilms,
  foundMovies
}) {

  const [filter, setfilter] = useState(false);
  
  const filterMovies = (movies) =>
    movies.filter((item) => {
      return item.duration < DURATION_MOVIE;
    });

  const onFilter = () => {
    setfilter(!filter);
  };


  return (
    <div className = 'movies'>
    <SearchForm onSearch={handleSearchMovies} onFilter={onFilter} />
      <section>
        {presenceFilms ? (
          <MoviesCardList
            foundMovies={filter ? filterMovies(foundMovies) : foundMovies}
            preloader={preloader}
            toggleLikeHandler={toggleLikeHandler}
            savedMovies={savedMovies}
            movieAdded={movieAdded}
          />
        ) : (
          <h3>Ничего не найдено</h3>
        )}
      </section>
    </div>
  );
}

export default Movies;