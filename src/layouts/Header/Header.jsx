import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/small-logo.svg';
const Header = () => {
  return (
    <header className={styles.root}>
      <div className="header__container">
        <nav>
          <ul>
            <li>
              <a href="#logo">
                <img src={logo} alt="logo" />
              </a>
            </li>
            <li>
              <a href="#about">о нас</a>
            </li>
            <li>
              <a href="#services">услуги</a>
            </li>
            <li>
              <a href="#cases">кейсы</a>
            </li>
            <li>
              <a href="#contacts">контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
