import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className={styles.root}>
      <div className="footer__container">
        <div className={styles.footer_wrapper}>
          <div className={styles.logo}>
            <a className="a" href="#logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="50"
                viewBox="0 0 154 50"
                fill="none"
              >
                <path
                  d="M101.693 25.0044L97.4497 29.3022L77.0134 49.9999L75.664 48.6332L74.0039 46.9609L91.4395 29.3022H81.1859L76.9424 25.0044H101.693Z"
                  fill="#5065AF"
                />
                <path
                  d="M79.9516 46.961L76.9421 50L52.2534 24.9955L61.7969 15.33L66.0581 11.0232L72.6986 4.29779L76.9421 0V6.08703L72.6986 10.3848L72.0683 11.0232L67.807 15.33L58.2636 24.9955L79.9516 46.961Z"
                  fill="white"
                />
                <path
                  d="M49.3684 24.9955L45.1249 29.2933L38.4845 36.0187L34.2321 40.3345L27.6982 46.961L24.6886 50L0 24.9955L3.00951 21.9565L9.54344 15.33L13.8047 11.0232L20.4451 4.29779L24.6886 0V6.08703L20.4451 10.3848L19.8148 11.0232L15.5536 15.33L6.01015 24.9955L24.6886 43.913L34.2321 34.2474L38.4845 29.9317L39.1148 29.2933L43.3583 24.9955H49.3684Z"
                  fill="white"
                />
                <path
                  d="M144.466 15.33L140.204 11.0232L129.32 0L125.077 4.29779L118.437 11.0232L114.175 15.33L104.632 24.9955L129.312 49.991H129.32H129.329L132.321 46.961L154 24.9955L144.457 15.33H144.466ZM129.338 43.9309H129.32V43.913L110.651 24.9955L120.194 15.33L124.456 11.0232L125.086 10.3848L129.329 6.08703L133.573 10.3848L134.203 11.0232L138.464 15.33L148.008 24.9955L129.329 43.913L129.347 43.9309H129.338Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <nav>
            <ul className={styles.navigate}>
              <li className={styles.li}>
                <a className={styles.a} href="#about">
                  о нас
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#services">
                  услуги
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#cases">
                  кейсы
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#contacts">
                  контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.box}></div>
          <div className={styles.arrow_up} onClick={() => scrollUp()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
