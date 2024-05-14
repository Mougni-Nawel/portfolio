// Projects.js
import React from 'react';
import styles from '../assets/styles/Projects.module.scss';

const Project = ({ title, description, stack, image }) => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.presentation}>
          <h3>{title}</h3>
          <p>{description}</p>
          <hr className={styles.hrColor} />
          <div className={styles.languageContainer}>
            {stack.map((tech, index) => (
              <i key={index} className={`fab ${tech} ${styles.languageCircle}`}></i>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="Project Image" />
        </div>
      </div>
    </div>
  );
};

export default Project;
