//import React from 'react';
import styles from './Projects.module.scss';
 import projects from '../Projects/ProjectsList'
 import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {

  return (
    <div className="projects__container">
      <h3>кейсы</h3>
      <div className={styles.projectsContainer}>
        {projects.map((proj) => {
          let helperClassName = `projectCard${proj.id}`
          return (
            <div key={proj.id} className={styles.helperClassName}>
              <ProjectCard project={proj} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects