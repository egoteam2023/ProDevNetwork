import React from 'react'
import styles from './Feetback.module.scss'
import { useForm } from 'react-hook-form'

const Feetback = () => {
  const {register, handleSubmit} = useForm({})

  const submit = data => {
    console.log(data)
  }

  return (
    <div className='feetback__container'>
      <div className={styles.feetbackInner}>
        <div className={styles.feetbackInner__Title}>Контакты</div>
        <div className={styles.feetbackInnerFormWrap}>
          <div className={styles.feetbackInnerFormWrap__title}>Оставьте заявку</div>
          <form 
            action='#' 
            onSubmit={handleSubmit(submit)}
            className={styles.feetbackInner__Form} 
          >
            <label htmlFor='name' className={styles.feetbackInner__Form_label}>
              Имя:
            </label>
            <input 
              id='name' 
              placeholder='Введите ваше имя' 
              type='text' 
              {...register('name')}
              className={styles.feetbackInner__Form_name} 
            />
            <label htmlFor='phone' className={styles.feetbackInner__Form_label}>
              Номер телефона:
            </label>
            <input 
              id='phone' 
              placeholder='Введите ваш номер телефона' 
              type='phone' 
              {...register('phone')}
              className={styles.feetbackInner__Form_phone} 
            />
            <label className={styles.labelForCheckbox}> 
              <input 
                type='checkbox' 
                className={styles.feetbackInner__Form_agree} />
              Нажимая кнопку “Отправить” я соглашаюсь с политикой конфидециальности
            </label>
            <button className={styles.feetbackInner__Form_btn}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feetback