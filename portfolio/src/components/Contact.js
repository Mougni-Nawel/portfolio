"use client";
import React,{ useState } from 'react';
import styles from '@/app/styles/Contact.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({ nom: '', mail: '', message: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Mail envoyé !');
          setFormData({ nom: '', mail: '', message: '' });
        } else {
          console.error('Error lors de l\'envoi du mail.');
        }
      } catch (error) {
        console.error('Error lors de l\'envoi du mail:', error);
      }
    };

  return (
    <div className={styles.contactForm}>
      <h2>Me Contacter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" />

        <label htmlFor="mail">Mail:</label>
        <input type="email" id="mail" name="mail" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
