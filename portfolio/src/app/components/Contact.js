import React from 'react';
import styles from '../styles/Contact.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <h2>Me Contacter</h2>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Mail:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
