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
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
    {
      image: 'https://i.ibb.co/8zVzxyv/blue-lock.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
    {
      image: 'https://i.ibb.co/X4SjtYq/gojo.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
    {
      image: 'https://i.ibb.co/8zVzxyv/blue-lock.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
  ];

  const leftArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
      <path d="M12 1L1.5 11.5L12 22" stroke="#5064AF" stroke-width="2" />
    </svg>
  );

  const rightArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
      <path d="M1 1L11.5 11.5L1 22" stroke="#5064AF" stroke-width="2" />
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
        `.${styles.team_decore}`,
        { opacity: 0, color: '#fff' },
        { duration: 1.5, opacity: 1, color: '#ffffff1e' },
      )
      .fromTo(
        `.${styles.team_title}`,
        { opacity: 0, y: 30 },
        { duration: 1, opacity: 1, delay: 0.3 },
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
          <p className={styles.team_decore}>команда</p>
          <Slider {...settings}>
            {team.map((el) => (
              <div className={styles.team_slide} ref={ref}>
                <div className={styles.slide_wrapper}>
                  <div className={styles.image_wrapper}>
                    <img className={styles.team_image} src={el.image} alt="" />
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
