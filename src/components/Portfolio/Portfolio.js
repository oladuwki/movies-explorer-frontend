import './Portfolio.css';
import React from "react";
import arrow from "../../images/arrow.png"

function Portfolio() {
  return (
    <div className = 'portfolio'>
      <h2 className = 'portfolio__title'>Портфолио</h2>

      <div className = 'portfolio__container'>
        <div className = 'portfolio__box'>
          <p className = 'portfolio__box-title'>Статичный сайт</p>
          <a href = '#' className = 'portfolio__box-link'><img src = { arrow } alt = 'arrow' className = 'portfolio__box-arrow' /></a>
        </div>
        <div className = 'portfolio__box'>
          <p className = 'portfolio__box-title'>Адаптивный сайт</p>
          <a href = '#' className = 'portfolio__box-link'><img src = { arrow } alt = 'arrow' className = 'portfolio__box-arrow' /></a> 
        </div>
        <div className = 'portfolio__box'>
          <p className = 'portfolio__box-title'>Одностраничное приложение</p>
          <a href = '#' className = 'portfolio__box-link'><img src = { arrow } alt = 'arrow' className = 'portfolio__box-arrow' /></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;