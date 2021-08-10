import React from "react";
import MoviesCard from "./MoviesCard";
import Preloader from "../Preloader/Preloader";
import '../MoviesCardList/MoviesCardList';

function MoviesCardList({
  toggleLikeHandler,
  movieAdded,
  preloader,
  showFoundMovies,
}) {
  return (
    <>
      <div className='line'></div>
      {showFoundMovies.length !== 0 ? (
        <>
          {preloader ? (
            <Preloader />
          ) : (
            <section className='movies-cards'>
              {showFoundMovies.map((item) => {
                return (
                  <MoviesCard
                    key={item._id}
                    card={item}
                    toggleLikeHandler={toggleLikeHandler}
                    movieAdded={movieAdded}
                  />
                );
              })}
            </section>
          )}
        </>
      ) : (
        <h3 className='text-nothing-found'>Ничего не найдено</h3>
      )}
      <div className='movies-card-list__box-button'></div>
    </>
  );
}
export default MoviesCardList;