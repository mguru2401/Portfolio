import React from 'react';
import styles from './project.module.css';
import projects from '../../data/projects.json';
import { imageUrl } from '../../utils';

function Project() {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.Projects}>{
         projects.map((project,id)=> {
            return (
              <div
                key={id}
                className={styles.cardContainer}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src={imageUrl(project.imageSrc)}
                  alt={project.title}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <hr style={{marginBottom:"5px", marginTop:"5px"}}/>
                <p className={styles.cardDescription}>{project.description}</p>
                <ul className={styles.skills}>
                  {project.skills.map((skill, id) => {
                    return (
                      <li key={id} className={styles.skill}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.links}>
                  <a href={project.demo} target='_blank' className={styles.link}>
                   Live Demo
                  </a>
                
                </div>
              </div>
            );
         })
         }
         </div>
    </section>
  )
}

export default Project