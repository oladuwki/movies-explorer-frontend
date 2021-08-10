import './AboutMe.css';
import React from "react";
import myPhoto from '../../images/myPhoto.jpg'

function AboutMe() {
  return (
    <div className = 'about-me'>
      <h2 className = 'about-me__title'>Студент</h2>
      <div className = 'about-me__title-line'></div>
      <div className = 'about-me__container'>
        <div className = 'about-me__text'>
          <h2 className = 'about-me__name'>Никита</h2>
          <h3 className = 'about-me__description'>Фронтенд-разработчик, 20 лет</h3>
          <p className = 'about-me__history'>Я родился и живу в Гродно, учусь в БГУИР на факультете компьютерного проектирования. Я люблю слушать музыку, а ещё увлекаюсь бегом. Со школьного возраста увлекаюсь версткой. На данный момент учусь на веб-разработчика на курсах от Яндекс.</p>
          <div className = 'about-me__links'>
            <a href = '#' className = 'about-me__link'>Facebook</a>
            <a href = '#' className = 'about-me__link'>Github</a>
          </div>
        </div>
        <div>
          <img alt ='Nikita' src = { myPhoto } className = 'about-me__photo'/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;