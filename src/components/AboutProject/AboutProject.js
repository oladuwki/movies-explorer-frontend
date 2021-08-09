import './AboutProject.css';
import React from "react";

function AboutProject() {
  return (
    <div className = 'about'>
      <h2 className = 'about__title'>О проекте</h2>
      <div className = 'about__title-line'></div>
      <div className = 'about__table'>
      <div>
        <div><h2 className = 'about__table-title'>Дипломный проект включал 5 этапов</h2></div>
        <div><p className = 'about__table-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p></div>
      </div>
      <div>
        <div><h2 className = 'about__table-title'>На выполнение диплома ушло 5 недель</h2></div>
        <div><p className = 'about__table-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p></div>
      </div>
      </div>
      <div className = 'about__time'>
        <div className = 'about__time-backend_background'><p className = 'about__time-backend'>1 неделя</p></div>
        <div className = 'about__time-frontend_background'><p className = 'about__time-frontend'>4 недели</p></div>
        <p className = 'about__time-web'>Back-end</p>
        <p className = 'about__time-web'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;