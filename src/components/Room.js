import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';


export default function Room() {
  let { hotelId, roomId } = useParams();
  //, param 
  const location = useLocation();
  const {hotelName, suiteName } = location.state;
  const [room, setRoom] = useState({});
  const [checkIn, setCheckIn] = useState (new Date());
  const [checkOut, setCheckOut] = useState (new Date());

  useEffect(() => {
    axios.get(`http://localhost:3001/hotels/${hotelId}/room/${roomId}`).then((response) => {
      setRoom(response.data);
    });

    axios.get(`http://localhost:3001/hotels/${hotelId}/bookings/${roomId}`).then((response) => {
      setCheckIn(response.data);
      setCheckOut(response.data);
      
    });

  },[]);

  const { coverPicture, title, description, price, bookingLink, name } = room;

  const isLoggedIn = sessionStorage.getItem("accessToken");
    return (
      <>
      <Navbar />
      <div className="room mx-3 py-3">
        <div className="container">
          <div className="title-container">
            <h1>
            {name}
            </h1>
            <p>
            {description}
            </p>
          </div>
          <h2>{title}</h2>
          <div className="content">
            <div className="hotels">
                  <div className="room-content" >
                    <img src={coverPicture} alt="hotel" />
                    <p >{description}</p>
                    <p >{price}€</p>
                    <a href={bookingLink}>booking</a>
                    {isLoggedIn &&  <button >Réserver</button>}
                  </div>
            </div>
          </div>
        </div>
      </div>
        {isLoggedIn ? (
          <div className='make-booking'>
      <div className="allForms-container">
        <div className="allForms mx-3 py-3">
          <div className="content">
            <div className="title-container">
              <h2>Réservation</h2>
                  </div>
            <div>{`Hotel: ${ hotelName }`}</div>
            <div>{`Suite: ${ suiteName }`}</div>
            <form className="contact-container">
              <label htmlFor="Choix">Date d'arrivée: </label>
                    <input type="date" onChange={(e) => { setCheckIn(e.target.value) }}></input>
              <label htmlFor="Choix">Date de départ:</label>
              <input type="date" onChange={(e)=>{setCheckOut(e.target.value)}}></input>
              <button type="button">Réserver</button>
            </form>
          </div>
        </div>
      </div>
          </div>
        ) : null}
     </>
    )
}

