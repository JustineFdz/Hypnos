import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';

export const Booking = () => {
        const [value, onChange] = useState(new Date());


        const [hotels, setHotels] = useState([]);

        useEffect(async () => {
          const result = await axios(
            "https://hypnos-booking-backend.herokuapp.com/hotels"
          );
    
          setHotels(result.data); 
        });
        
    return (
      <>
        <Navbar />
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
    </>
  );

  }