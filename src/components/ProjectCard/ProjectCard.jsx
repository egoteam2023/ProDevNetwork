// import React from 'react'
import styles from './ProjectCard.module.scss'

const ProjectCard = (project) => {
  return (
    <a href="#" onClick={(e) => e.preventDefault()}>
      <img 
        src={project.projectScreen !== '' ? project.projectScreen : project.defaultProjectScreen} 
        alt="project img" 
        className={styles.projectCard__img} 
      />
      <div className={styles.projectCard__name}>{project.title}</div>
      <p className={styles.projectCard__price}>{project.price}</p>
    </a>
  )
}

export default ProjectCard