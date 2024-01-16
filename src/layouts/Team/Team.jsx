import React from 'react';
import styles from './Team.module.scss';

// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Team = () => {
  const team = [
    {
      image:
        'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
    {
      image:
        'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
    {
      image:
        'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
    {
      image:
        'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      name: 'Firstname Lastname',
      about:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat unde quod repellat tenetur tempore. Nobis blanditiis nemo qui. Placeat rerum ad natus doloremque fuga qui eius aspernatur quaerat officia.',
      specialize: 'JavaScript, Node.JS, Sass, Bootstrap',
    },
  ];
  // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="team__container">
      <div className={styles.team}>
        <h2 className={styles.team_title}>команда</h2>
        <div className={styles.team_slider_block}>
          <p className={styles.team_decore}>команда</p>
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // spaceBetween={50}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {team.map((el) => (
              <SwiperSlide>
                <div className={styles.team_slide}>
                  <img className={styles.team_image} src={el.image} alt="" />
                  <div className={styles.team_info}>
                    <h3 className={styles.team_info_name}>{el.name}</h3>
                    <p className={styles.team_info_about}>{el.about}</p>
                    <p className={styles.team_info_specialize}>{el.specialize}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
