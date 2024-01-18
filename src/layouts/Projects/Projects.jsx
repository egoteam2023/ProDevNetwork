import React, { useLayoutEffect, useRef } from 'react';
import styles from './Projects.module.scss';
import projects from '../Projects/ProjectsList';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectsList from '../Projects/ProjectsList';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects__container',
        start: 'top 95%',
        end: 'bottom 70%',
      },
    });

    tl.fromTo(
      '.case',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
      },
    );

    gsap.fromTo(
      ref1.current,

      { x: -500, opacity: 0.5 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );

    gsap.fromTo(
      ref2.current,
      { y: -300, opacity: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );

    gsap.fromTo(
      ref3.current,
      { x: 500, opacity: 0.5 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );

    gsap.fromTo(
      ref4.current,
      { y: 300, opacity: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );

    gsap.fromTo(
      ref5.current,
      { y: 300, opacity: 0.5 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );

    gsap.fromTo(
      ref6.current,
      { x: 500, opacity: 0.5 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top 95%',
          end: 'bottom 70%',
        },
      },
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className="projects__container">
        <div className={styles.content}>
          <div className={styles.title__wrapper}>
            <h2 className="case">кейсы</h2>
          </div>
          <div className={styles.grid}>
            <div className={styles.grid_el} ref={ref1}></div>
            <div className={styles.grid_el} ref={ref2}></div>
            <div className={styles.grid_el} ref={ref3}></div>
            <div className={styles.grid_el} ref={ref4}></div>
            <div className={styles.grid_el} ref={ref5}></div>
            <div className={styles.grid_el} ref={ref6}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
