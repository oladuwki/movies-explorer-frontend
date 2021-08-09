import './SearchForm.css';
import React, { useState } from "react";

function SearchForm({ onSearch, onFilter }) {
  const [data, setdata] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setdata(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      setError("Введите ключевое слово");
    } else {
      onSearch(data);
      setError("");
    }
  };

  return (
    <div className = 'search'>
      <form className = 'search__form' noValidate onSubmit={handleSubmit}>
        <input className = 'search__form-input' required onChange={handleInput} placeholder = 'Фильмы' />
        
        <button className = 'search__form-button'>Найти</button>
      </form>
      {error && (
        <span id='input-error' className={
            error
              ? "search__error search__error_active"
              : "search__error"
          }>
          {error}
        </span>
      )}
      <div className = 'filter'>
        <label className='filter-check-box__switch' htmlFor='checkbox'>
          <input
          className='filter-check-box__checkbox'
          type='checkbox'
          id='checkbox'
          onClick={onFilter}
          />
          <div className='slider round'></div>
        </label>
        <p className = 'filter__text'>Короткометражки</p>
      </div>
      <div className = 'search__line'></div>
      
    </div>
  );
}

export default SearchForm;