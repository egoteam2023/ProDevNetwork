import React, { useLayoutEffect, useRef } from 'react';
import styles from './About.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const About = () => {
  const baDecore = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__container',
        start: 'top 60%',
        end: 'bottom 30%',
      },
    });
    timeline

      .fromTo(
        `.${styles.bg_decore}`,
        { opacity: 0, color: '#fff' },
        { duration: 1.5, opacity: 1, color: '#ffffff1e' },
      )
      .fromTo(
        `.${styles.about_title}`,
        { opacity: 0, y: 30 },
        { duration: 1, opacity: 1, delay: 0.3 },
      )
      .fromTo(`.${styles.about_descr}`, { opacity: 0 }, { duration: 1, opacity: 1 });
  }, []);

  return (
    <div className="about__container">
      <div className={styles.about}>
        <h3 className={styles.about_title} ref={baDecore}>
          о нас
        </h3>
        <div style={{ position: 'relative' }}>
          <p className={styles.bg_decore}>о нас</p>
          <p className={styles.about_descr}>
            · Амбиции и Рост. Мы гордимся своими амбициями и стремлением к постоянному
            профессиональному росту. Даже будучи новичками, мы нацелены на достижение выдающихся
            результатов. <br />· Индивидуальность и Многогранность. Каждый член нашей команды вносит
            свой уникальный вклад, благодаря индивидуальному опыту и разнообразию профессиональных
            знаний. Творчество и Инновации. Мы не боимся выходить за пределы стандартных решений.
            Наш творческий подход и стремление к инновациям помогают нам создавать уникальные и
            современные проекты.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
