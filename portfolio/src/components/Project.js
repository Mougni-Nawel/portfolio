// Projects.js
import React from 'react';
import styles from '../assets/styles/Projects.module.scss';

const Project = ({ title, description, stack, image, github }) => {

  const openGithub = () => {
    window.open(github, '_blank');
  };


  return (
    <div className={styles.contactContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.presentation}>
          <h3>{title}</h3>
          <p>{description}</p>
          <hr className={styles.hrColor} />
          <div className={styles.languageContainer}>
            {stack.map((tech, index) => (
              <div key={index} className={styles.stackItem}>
                <i className={`fab ${tech} ${styles.languageCircle}`} style={{ color: 'black' }}><span>{tech}</span></i>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="Project Image" onClick={openGithub}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
