import './Promo.css';
import React from "react";
import baner from "../../images/baner.svg";
import baner320 from "../../images/baner320.png";

function Promo() {
  return (
    <div className = 'promo'>
      <h1 className = 'promo__title'> Учебный проект студента факультета Веб-разработки. </h1>
      <img className = 'promo__baner' src = { baner } alt = 'baner' />
      <img className = 'promo__baner-320' src = { baner320 } alt = 'baner' />
    </div>
  );
}

export default Promo;