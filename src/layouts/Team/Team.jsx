import React, { useLayoutEffect, useRef } from 'react';
import styles from './Team.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
 
const Team = () => {
  const team = [
    {
      image: 'https://i.ibb.co/X4SjtYq/gojo.jpg',
      name: 'Данияр Кашкаралиев',
      nickname: 'drtya',
      position: 'Frontend developer',
      about:
        'Frontend разработчик с опытом работы более 1 года. Проекты: Разработка приложения "сборник задач". Разработка веб сайта для компании предоставляющая it услуги. Разработка приложения "прогноз погоды" для компании Рога и Копыта.',
      specialize: 'JavaScript, React, Redux-Toolkit, HTML, CSS, Sass, git, next js',
      socialLinks: {
        instagram: '',
        github: 'https://github.com/drtya',
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/kashkaraliev/',
      },
    },
    {
      image: 'https://i.ibb.co/8zVzxyv/blue-lock.jpg',
      name: 'Бекназар Бекмурзаев (Сооснователь)',
      nickname: 'escapch',
      position: 'Frontend developer',
      about:
        'Фронтенд разработчик. Более 1 года опыта в разработке. Проекты: Разработка и внедрение Todo List на стеке MERN. Создание интернет-магазина кроссовок с полным функционалом. Приложение для заказа пицц и кондитерский сайт на React. Mobi Market (аналог Lalafo)',
      specialize: 'HTML, CSS, JavaScript, React, Redux-Toolkit, Vue.js, Sass, git',
      socialLinks: {
        instagram: 'https://www.instagram.com/bekmurzaev_0106/',
        github: 'https://github.com/escapch',
        facebook: '',
        linkedIn: '',
      },
    },
    {
      image: 'https://i.ibb.co/X4SjtYq/gojo.jpg',
      name: 'Актан',
      nickname: 'Актан',
      position: 'UI UX designer',
      about:
        'UI UX дизайнер. Опыт работы в сфере UI UX дизайне более 2-х лет. Разработка: Дизайна сайта, прототипирование, дизайн мобильных приложений, CRM система, презентации и т.д',
      specialize: 'Figma, Adobe Photoshop',
      socialLinks: {
        instagram: '',
        github: '',
        facebook: '',
        linkedIn: '',
      },
    },
    {
      image: 'https://i.ibb.co/8zVzxyv/blue-lock.jpg',
      name: 'Элдияр Долбеков',
      nickname: 'eldiyarchess',
      position: 'Frontend Developer',
      about: 'Фронтенд разработчик. В сфере разработки 1 год',
      specialize:
        'HTML5, CSS3, SCSS, Tailwind CSS, JavaScript (ES6+), React.js, Redux, Git / GitLab,REST API, NPM / Yarn',
      socialLinks: {
        instagram: 'https://www.instagram.com/eldiyarchess',
        github: 'https://github.com/Eldyaar',
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/eldiyar-dolbekov-676aa9267/',
      },
    },
    {
      image: 'https://i.ibb.co/8zVzxyv/blue-lock.jpg',
      name: 'Беслан Адилбеков (Сооснователь)',
      nickname: 'Nero',
      position: 'Проект менеджер&Графический дизайнер',
      about:
        'Проект менеджер&Графический дизайнер с опытом более 3 лет, полное брендирование, упаковка продукта, разработка логотипов и брендбуков, гайдлайнов, разработка постеров. Проекты: Креативное комьюнити «unmode», брендбуки “Hydra group”, «ШТАБ», «Ak keme» и др., также разработка логотипов',
      specialize: 'adobe family, corel draw, figma, midjourney',
      socialLinks: {
        instagram:
          'https://www.instagram.com/unmode_cc?igsh=MWlnb2xueTE3NXQ0dg%3D%3D&utm_source=qr',
        github: '',
        facebook: '',
        linkedIn: '',
      },
    },
    {
      image: 'https://i.ibb.co/8zVzxyv/blue-lock.jpg',
      name: 'Канай Раимкулов',
      nickname: 'Канай',
      position: 'Backend Developer',
      about: 'Бэкенд C# девелопер',
      specialize: 'C#, ASP.NET WEB API, Entity Framework, LinQ, SOLID, GIT, HTML, CSS, JS',
      socialLinks: {
        instagram: 'https://www.instagram.com/eldiyarchess',
        github: 'https://github.com/Eldyaar',
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/eldiyar-dolbekov-676aa9267/',
      },
    },
  ];

  const leftArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
      <path d="M12 1L1.5 11.5L12 22" stroke="#5064AF" strokeWidth="2" />
    </svg>
  );

  const rightArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
      <path d="M1 1L11.5 11.5L1 22" stroke="#5064AF" strokeWidth="2" />
    </svg>
  );

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: rightArrowSvg,
    prevArrow: leftArrowSvg,
  };

  const baDecore = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: baDecore.current,
        start: 'top center',
        end: 'bottom 30%',
      },
    });
    timeline
      .fromTo(
        `.${styles.team_title}`,
        { opacity: 0, y: 30 },
        { duration: 1, opacity: 1, delay: 0.3, y: 0 },
      )
      .fromTo(
        `.${styles.team_slide}`,
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
        },
      );
  }, []);

  return (
    <div className="team__container">
      <div className={styles.team}>
        <h2 className={styles.team_title} ref={baDecore}>
          команда
        </h2>
        <div className={styles.team_slider_block}>
          <Slider {...settings}>
            {team.map((el, index) => (
              <div className={styles.team_slide} ref={ref} key={index}>
                <div className={styles.slide_wrapper}>
                  <div className={styles.image_wrapper}>
                    <img className={styles.team_image} src={el.image} alt="image" />
                    <div className={styles.image_content}>
                      <p>
                        {el.nickname}
                        <br />
                        <span>{el.position}</span>
                      </p>
                      <ul className={styles.sci}>
                        {el.socialLinks.facebook && (
                          <li>
                            <a href={el.socialLinks.facebook}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-facebook"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                            </a>
                          </li>
                        )}

                        {el.socialLinks.linkedIn && (
                          <li>
                            <a href={el.socialLinks.linkedIn}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-linkedin"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </a>
                          </li>
                        )}

                        {el.socialLinks.github && (
                          <li>
                            <a href={el.socialLinks.github}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-github"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                            </a>
                          </li>
                        )}

                        {el.socialLinks.instagram && (
                          <li>
                            <a href={el.socialLinks.instagram}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-instagram"
                              >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                              </svg>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className={styles.team_info}>
                    <h3 className={styles.team_info_name}>{el.name}</h3>
                    <p className={styles.team_info_about}>{el.about}</p>
                    <p className={styles.team_info_specialize}>{el.specialize}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
