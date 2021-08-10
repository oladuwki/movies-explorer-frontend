import './Techs.css';
import React from "react";

function Techs() {
  return (
    <div className = 'techs'>
      <h2 className = 'techs__title'>Технологии</h2>
      <div className = 'techs__title-line'></div>
      <div className = 'techs__table'>
        <h2 className = 'techs__table-title'>7 технологий</h2>
        <p className = 'techs__table-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className = 'techs__lang-container'>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>HTML</p>
        </div>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>CSS</p>
        </div>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>JS</p>
        </div>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>React</p>
        </div>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>Git</p>
        </div>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>Express.js</p>
        </div>
        <div className = 'techs__lang-box'>
          <p className = 'techs__lang'>mongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Techs;