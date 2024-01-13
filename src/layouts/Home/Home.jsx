import React from 'react';
import style from './Home.module.scss';
import ego from '../../assets/img/ego.png';

const Home = () => {
  return (
    <div className={style.root}>
      <div className="home__container">
        <div className={style.content}>
          <div className={style.name}>
            <img src={ego} alt="ego" />
            <p>team</p>
          </div>
          <div className={style.title}>
            <p>
              "ego" - это творческий союз молодых и амбициозных специалистов в сфере веб-разработки
              и создания приложений.
            </p>
            <button>бесплатная консультация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
