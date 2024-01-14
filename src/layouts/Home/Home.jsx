import React, { useLayoutEffect, useRef } from 'react';
import style from './Home.module.scss';
import ego from '../../assets/img/ego.png';
import gsap from 'gsap';

const Home = () => {
  const sloganRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      sloganRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      },
    );
  }, []);

  return (
    <div className={style.root}>
      <div className="home__container">
        <div className={style.content}>
          <div className={style.name}>
            <div className={style.loadingPage}>
              <div className={style.svgContainer}>
                <svg
                  className={style.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="245"
                  height="244"
                  viewBox="0 0 245 244"
                >
                  <path
                    d="M244.919 121.867L223.867 142.821L190.923 175.612L169.827 196.654L137.412 228.961L122.481 243.778L0 121.867L14.9303 107.05L47.3454 74.7424L68.4856 53.7444L101.429 20.9542L122.481 0V29.6778L101.429 50.6319L98.3022 53.7444L77.1619 74.7424L29.8166 121.867L122.481 214.101L169.827 166.976L190.923 145.934L194.05 142.821L215.102 121.867H244.919Z"
                    fill="white"
                  />
                </svg>
                <div className={style.middleSvg}>
                  <svg
                    className={style.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    width="138"
                    height="244"
                    viewBox="0 0 138 244"
                    fill="none"
                  >
                    <path
                      d="M137.644 228.961L122.714 243.778L0.232422 121.867L47.5778 74.7424L68.7181 53.7444L101.662 20.9542L122.714 0V29.6778L101.662 50.6319L98.5346 53.7444L77.3943 74.7424L30.049 121.867L137.644 228.961Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className={style.svg2}
                    xmlns="http://www.w3.org/2000/svg"
                    width="138"
                    height="123"
                    viewBox="0 0 138 123"
                    fill="none"
                  >
                    <path
                      d="M137.503 0.911133L116.451 21.8653L15.066 122.778L8.37165 116.115L0.135742 107.961L86.6346 21.8653H35.7659L14.7137 0.911133H137.503Z"
                      fill="#5065AF"
                    />
                  </svg>
                </div>
                <svg
                  className={style.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="245"
                  height="244"
                  viewBox="0 0 245 244"
                  fill="none"
                >
                  <path
                    d="M197.698 74.7424L176.558 53.7444L122.562 0L101.51 20.9542L68.5667 53.7444L47.4264 74.7424L0.0810547 121.867L122.518 243.735H122.562H122.606L137.449 228.961L245 121.867L197.654 74.7424H197.698ZM122.651 214.188H122.562V214.101L29.9417 121.867L77.287 74.7424L98.4273 53.7444L101.554 50.6319L122.606 29.6778L143.659 50.6319L146.786 53.7444L167.926 74.7424L215.271 121.867L122.606 214.101L122.695 214.188H122.651Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={style.nameContainer}>
                <div className={style.team} ref={sloganRef}>
                  team
                </div>
              </div>
            </div>
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
