import React, {useRef } from "react";
import Navbar from './Navbar';
import emailjs from "@emailjs/browser";

export default function Contact() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Hypnos', 'hypnos', form.current, 'bZd-EuZMdY7F6LxaZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Navbar />
    <div className="allForms-container">
      <div className="allForms mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Nous contacter</h2>
            <p>
              Pour toutes demandes, vous pouvez nous contacter via ce formulaire
            </p>
          </div>
          <form className="contact-container" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" required/>
            <label htmlFor="name">Prénom</label>
            <input type="text" name="surname" required/>
            <label htmlFor="name">Email</label>
            <input type="email" name="mail" required/>
            <label htmlFor="Choix">Choisissez un sujet</label>
            <select className="select">
              <option value="complaint" name="subject">Je souhaite poser une réclamation</option>
              <option value="addService" name="subject">Je souhaite commander un service supplémentaire</option>
              <option value="info" name="subject">Je souhaite en savoir plus sur une suite</option>
              <option value="bug" name="subject">J'ai un souci avec cette application</option>
            </select>
            <label htmlFor="Choix">Message</label>
            <textarea type="text-area" name="message" required/>
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );

  }