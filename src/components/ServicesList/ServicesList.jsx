import React, { useLayoutEffect, forwardRef } from 'react';
import styles from './ServicesList.module.scss';
import gsap from 'gsap';

const ServicesList = forwardRef(({ services }, ref) => {
  return (
    <li className={styles.service} ref={ref}>
      <div className={styles.service_id}>
        {services.id.toString().length < 2 ? '0' + services.id : services.id}
      </div>
      <div className={styles.service_descr}>
        <h4 className={styles.service_title}>{services.title}</h4>
        <ul className={styles.service_info}>
          {services.list.map((el, index) => (
            <li key={index} className={styles.service_info_list}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
});

export default ServicesList;
