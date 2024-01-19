import React, { useLayoutEffect, useRef } from 'react';
import ServicesList from '../../components/ServicesList/ServicesList';
import styles from './Services.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Веб-разработка',
      list: [
        'Разработка уникальных и функциональных веб-сайтов, от простых визиток до сложных корпоративных ресурсов.',
        'Создание адаптивных интерфейсов, обеспечивающих оптимальное взаимодействие с пользователями на различных устройствах.',
      ],
    },
    {
      id: 2,
      title: 'Приложения для Мобильных Устройств',
      list: [
        'Разработка кросс-платформенных мобильных приложений для iOS и Android.',
        'Создание интуитивно понятных и эффективных мобильных интерфейсов, соответствующих современным стандартам.',
      ],
    },
    {
      id: 3,
      title: 'Техническая Поддержка и Обслуживание',
      list: [
        'Поставка надежных решений с последующей технической поддержкой.',
        'Регулярные обновления и обслуживание для обеспечения стабильной и безопасной работы ваших проектов.',
      ],
    },
    {
      id: 4,
      title: 'Проектирование UX/UI',
      list: [
        'Индивидуальный и тщательный подход к дизайну пользовательского интерфейса и опыта пользователя.',
        'Создание привлекательных и удобных интерфейсов, соответствующих уникальным требованиям проекта.',
      ],
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );
  }, []);

  return (
    <div className="services__container" id="services">
      <div className={styles.wrapper}>
        <h2 className={styles.services_title} ref={titleRef}>
          услуги
        </h2>
      </div>
      <ul className={styles.services_list}>
        {services.map((s, index) => {
          const ref = useRef(null);

          useLayoutEffect(() => {
            gsap.fromTo(
              ref.current,
              { x: -1500, opacity: 0.5 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                delay: index * 0.2,
                scrollTrigger: {
                  trigger: ref.current,
                  start: 'top 95%',
                  end: 'bottom 70%',
                },
              },
            );
          }, [index]);

          return <ServicesList key={s.id} services={s} className={`li${s.id}`} ref={ref} />;
        })}
      </ul>
    </div>
  );
};

export default Services;
