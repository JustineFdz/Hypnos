import React from "react";
import Navbar from './Navbar';

export default function Contact() {
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
          <form className="contact-container">
            <label htmlFor="name">Nom</label>
            <input type="text" />
            <label htmlFor="name">Prénom</label>
            <input type="text"/>
            <label htmlFor="name">Email</label>
            <input type="email" />
            <label htmlFor="Choix">Choisissez un sujet</label>
            <select className="select">
              <option value="complaint">Je souhaite poser une réclamation</option>
              <option value="addService">Je souhaite commander un service supplémentaire</option>
              <option selected value="info">Je souhaite en savoir plus sur une suite</option>
              <option value="bug">J'ai un souci avec cette application</option>
            </select>
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );

  }