import React, { useLayoutEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/small-logo.svg';
import gsap from 'gsap';
const Header = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      '.li',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
      },
    );
  }, []);

  return (
    <header className={styles.root}>
      <div className="header__container">
        <nav>
          <ul>
            <li className="li">
              <a href="#logo">
                <img src={logo} alt="logo" />
              </a>
            </li>
            <li className="li">
              <a href="#about">о нас</a>
            </li>
            <li className="li">
              <a href="#services">услуги</a>
            </li>
            <li className="li">
              <a href="#cases">кейсы</a>
            </li>
            <li className="li">
              <a href="#contacts">контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
