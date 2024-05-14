"use client";
import React,{ useState } from 'react';
import styles from '../assets/styles/Contact.module.scss';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const sendMail = (name, email, message) => {
  return emailjs.send(
    "service_3ov284g",
    "template_78er04y",
    {
      from_name: email,
      to_name: name,
      message,
    },
    "sIvZp7e75gosLGv_F"
  );
};

const success = (setMail, setMessage, setNom) => {
  console.log('Mail envoyé !');
  setNom("");
  setMail("");
  setMessage("");
  toast.success('Email sent successfully!');
}

const ContactForm = () => {
    const [nom, setNom] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const handleNomChange = (e) => {
      setNom(e.target.value);
    };
  
    const handleMailChange = (e) => {
      setMail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (nom === "" || mail === "" || message === "") {
          alert('Les champs sont vides');
        } else {
          sendMail(nom, mail, message)
          .then(() => {
            success(setMail, setMessage, setNom);
            
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
        }
      } catch (error) {
        console.error('Error lors de l\'envoi du mail '+error+':', error);
      }
    };

  return (
    <div className={styles.contactForm}>
      <h2>Me Contacter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={nom} onChange={handleNomChange} />

        <label htmlFor="mail">Mail:</label>
        <input type="email" id="mail" name="mail" value={mail} onChange={handleMailChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" value={message}
          onChange={handleMessageChange}
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
