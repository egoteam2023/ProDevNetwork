import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/small-logo.svg';
import gsap from 'gsap';
const Header = () => {
  const [burger, setBurger] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const openMenu = () => {
    setBurger(true);
    setIsChecked(true);
  };

  const closeMenu = () => {
    setBurger(false);
    setIsChecked(false);
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.a}`,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <header className={styles.root}>
      <div className="header__container">
        <div className={styles.header_wrapper}>
          <div className={styles.logo}>
            <a className="a" href="#logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav>
            {burger && (
              <div className={styles.modal_window} onClick={() => closeMenu()}>
                <ul className={styles.modal_nav} onClick={(e) => e.stopPropagation()}>
                  <li className={styles.modal_nav_li}>
                    <a className={styles.modal_nav_a} href="#about">
                      о нас
                    </a>
                  </li>
                  <li className={styles.modal_nav_li}>
                    <a className={styles.modal_nav_a} href="#services">
                      услуги
                    </a>
                  </li>
                  <li className={styles.modal_nav_li}>
                    <a className={styles.modal_nav_a} href="#cases">
                      кейсы
                    </a>
                  </li>
                  <li className={styles.modal_nav_li}>
                    <a className={styles.modal_nav_a} href="#contacts">
                      контакты
                    </a>
                  </li>
                </ul>
                <div className={styles.modal_overlay}></div>
              </div>
            )}
            <div className={styles.burger__wrapper} onClick={() => openMenu()}>
              <div id="webapp_cover">
                <div id="menu_button">
                  <input type="checkbox" id="menu_checkbox" checked={isChecked} />
                  <label for="menu_checkbox" id="menu_label">
                    <div id="menu_text_bar"></div>
                  </label>
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
