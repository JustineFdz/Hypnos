import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';


export default function Room() {
  let {hotelId, roomId} = useParams();
  const [room, setRoom] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/hotels/${hotelId}/room/${roomId}`).then((response) => {
      setRoom(response.data);
    });
  },[]);
  const { coverPicture, title, description, price, bookingLink, name} = room
    return (
      <>
      <Navbar />
      <div className="hotel-container mx-3 py-3">
        <div className="container">
          <div className="title-container">
            <h1>
            {name}
            </h1>
            <p>
            {description}
            </p>
          </div>
          <h2>Nos Suites</h2>
          <div className="content">
            <div className="hotels">
                  <div className="hotel" >
                    <img src={coverPicture} alt="hotel" />
                    <h4>{title}</h4>
                    <p >{description}</p>
                    <p >{price}€</p>
                    <p>{bookingLink}</p>
                    {/*  */}
                    <button > Voir plus </button> 
                  </div>
            </div>
          </div>
        </div>
      </div>
    //  </>
    )
}

