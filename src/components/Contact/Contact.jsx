import React from 'react';
import styles from './contact.module.css';
import { imageUrl } from '../../utils';

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={imageUrl("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:mguru2401@gmail.com" target="_blank">
            email
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={imageUrl("contact/linkedinIcon.png")}
            alt="linkedinIcon-icon"
          />
          <a href="https://www.linkedin.com/in/guru-prasad-79250a19b/" target="_blank">
            linkedin
          </a>
        </li>

        <li className={styles.link}>
          <img src={imageUrl("contact/githubIcon.png")} alt="githubIcon-icon" />
          <a href="https://github.com/mguru2401" target="_blank">
          
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact