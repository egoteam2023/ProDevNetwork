import React, { useLayoutEffect, useState } from 'react';
import styles from './Feetback.module.scss';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import axios from 'axios';
import { ScrollTrigger } from 'gsap/all';

import loadingSvg from '../../assets/icons/Loading.svg';
import gsap from 'gsap';

const Feetback = () => {
  const [loading, setLoading] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.feetbackInner}`,
        start: 'top 95%',
        end: 'bottom 70%',
      },
    });
    tl.fromTo(
      `.${styles.wrapper}`,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
    ).fromTo(
      `.${styles.feetbackInnerFormWrap}`,
      { x: -1500, opacity: 0.5 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
      },
    );
  }, []);

  const { values, handleBlur, handleChange, handleSubmit, touched, errors, resetForm } = useFormik({
    initialValues: {
      name: '',
      tel: '',
      checkbox: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('*Введите ваше имя'),
      tel: Yup.string()
        .matches(/^\+\d\(\d{3}\)\s?\d{2}-\d{2}-\d{2}$/, '*Введите номер полностью')
        .required('*Введите номер телефона'),
      checkbox: Yup.boolean().oneOf(
        [true],
        '*Вы должны согласиться с политикой конфиденциальности',
      ),
    }),
    onSubmit: async () => {
      const serviceId = 'service_s7l5ikb';
      const templateId = 'template_xt3tcya';
      const publicKey = 'i2M1MTXDm220LbQU3';

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: values.name,
          message: values.tel,
          to_name: 'ego team',
        },
      };
      try {
        setLoading(true);
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
        console.log(response.data);
        if (response.data !== 'OK') {
          alert('Ошибка при отправке данных');
        }
        setLoading(false);
        resetForm();
      } catch (errors) {
        console.error(errors);
      }
    },
  });

  return (
    <div className="feetback__container">
      <div className={styles.feetbackInner}>
        <div className={styles.wrapper}>
          <h2 className={styles.services_title}>Контакты</h2>
        </div>
        <div className={styles.feetbackInnerFormWrap}>
          <div className={styles.feetbackInnerFormWrap__title}>Оставьте заявку</div>
          <form onSubmit={handleSubmit} className={styles.feetbackInner__Form}>
            <div className={styles.input_wrapper}>
              <label htmlFor="name" className={styles.feetbackInner__Form_label}>
                Имя:
              </label>
              <input
                id="name"
                placeholder="Введите ваше имя"
                type="text"
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                value={values.name}
                className={styles.feetbackInner__Form_name}
              />
              {errors.name && touched.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="phone" className={styles.feetbackInner__Form_label}>
                Номер телефона:
              </label>
              <InputMask
                mask="+0(999) 99-99-99"
                id="phone"
                name="tel"
                placeholder="Введите ваш номер телефона"
                type="text"
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                value={values.tel}
                className={styles.feetbackInner__Form_phone}
              />
              {errors.tel && touched.tel && <p className={styles.error}>{errors.tel}</p>}
            </div>
            <div className={styles.input_wrapper}>
              <label className={styles.labelForCheckbox}>
                <input
                  type="checkbox"
                  name="checkbox"
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  checked={values.checkbox}
                  className={styles.feetbackInner__Form_agree}
                />
                Нажимая кнопку “Отправить” я соглашаюсь с политикой конфидециальности
              </label>
              {errors.checkbox && touched.checkbox && (
                <p className={styles.error}>{errors.checkbox}</p>
              )}
            </div>
            {loading ? (
              <img src={loadingSvg} alt="" style={{ width: '80px', margin: '0 auto' }} />
            ) : (
              <button className={styles.feetbackInner__Form_btn} type="submit">
                Отправить
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feetback;
