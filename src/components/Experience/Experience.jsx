import React from 'react';
import styles from './experience.module.css';
import skills from '../../data/skills.json';
import experience from '../../data/history.json';
import { imageUrl } from '../../utils';

function Experience() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills} data-aos="fade-right">
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={imageUrl(skill.imageSrc)} alt="skills-img" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {experience.map((history, id) => {
            return (
              <li key={id} className={styles.historyItem} data-aos="zoom-in" >
                <div className={styles.historyItemDetails}>
                  <h3>{`${history.role}, ${history.organisation}`}</h3>
                  <p>{`${history.startDate} - ${history.endDate}`}</p>
                  <ul>
                    {history.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience