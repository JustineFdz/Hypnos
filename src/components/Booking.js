import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';

export const Booking = () => {
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');

  const [listOfHotels, setListOfHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/hotels").then((response) => {
      setListOfHotels(response.data);
    });
  },[]);


        
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
            <select>
              <option>--- Hôtels ---</option>
              {
          listOfHotels.map((value,key)=>{
            return (
              <div className="hotel" key={key} >
                <option>{value.name}</option>
              </div>
            );
          })
        }
            </select>
            <label htmlFor="Choix">Choisissez une Suite</label>
                        <select>
              <option>--- Suites ---</option>
            </select>
            <label htmlFor="Choix">Date d'arrivée: {startDate}</label>
            <input type="date" onChange={(e)=>{setStartDate(e.target.value)}}></input>
            <label htmlFor="Choix">Date de départ: {endDate}</label>
            <input type="date" onChange={(e)=>{setEndDate(e.target.value)}}></input>
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );

  }

  // {
  //   rooms.map((value,key)=>{
  //     return (
  //       <div className="hotel"  key={key}>
  //         <h4>{value.title}</h4>
  //       </div>
  //     );
  //   })
  // }