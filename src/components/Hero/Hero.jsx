import React from "react";
import styles from "./hero.module.css";
import { imageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title} data-aos="flip-down">
          I'm Guruprasad  
        </h3>
        <p className={styles.description}>
        A Passionate and Driven Software Engineer With a Deep Love for Creating Clean, Efficient, and Innovative Applications.

        </p>
        <a
          href="https://drive.google.com/file/d/1VQbvPCSzN2Mvs5gckO0vFTK28gH6iwT6/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <img
        src={imageUrl("hero/coder_avatar.jpeg")}
        alt=""
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
