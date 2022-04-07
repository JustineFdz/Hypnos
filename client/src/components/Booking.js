import React from "react";
import { useState } from "react";


export const Booking = () => {
    const hotels = [
        {
            hotelTitle:"La Bergerie",
            roomsTitle:[
                "La diamant",
                "La rubis",
                "La saphir",
                "L'améthyste",
                "L'eben"
            ]
        },
        {
            hotelTitle:"Le Chabichou",
            roomsTitle:[
                "La diamant1",
                "La rubis1",
                "La saphir1",
                "L'améthyste1",
                "L'eben1"
            ]
        },
        {
            hotelTitle:"L'Altapure'",
            roomsTitle:[
                "La diamant2",
                "La rubis2",
                "La saphir2",
                "L'améthyste2",
                "L'eben2"
            ]
        },
    ]
        const [value, onChange] = useState(new Date());

    return (
    <div className="allForms-container">
      <div className="allForms mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Réservation</h2>
          </div>
          <form className="contact-container">
            <label htmlFor="Choix">Choisissez un Hotel</label>
            {
                hotels.map(({hotelTitle},index)=>{
                  return (
                    <select className="select">
                      <option value={index}>{hotelTitle}</option>
                    </select>
                );
                })
            }

            <label htmlFor="name">Nom</label>
            <input type="text" />
            <label htmlFor="name">Prénom</label>
            <input type="text"/>
            <label htmlFor="name">Email</label>
            <input type="email" />

            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );

  }