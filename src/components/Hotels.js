import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function Hotels() {
  // const [hotelObject, setHotelObject] = useState({});
  let navigate = useNavigate();

  const [listOfHotels, setListOfHotels] = useState([]);

  useEffect(() => {
    axios.get("http://hypnos-booking-backend.herokuapp.com/hotels").then((response) => {
      console.log('>>>>>>>>>> hotels Data',response.data)
      setListOfHotels(response.data);
    });
  },[]);

  // `http://hypnos-booking-backend.herokuapp.com/hotels/byId/${id}`
  

  return (
    <>
    <Navbar />
    <div className="hotel-container mx-3 py-3">
    <div className="container">
      <div className="title-container">
        <h2>Nos établissements</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="content">
        <div className="hotels">
        {
          listOfHotels.map((value,key)=>{
            return (
              <div className="hotel" key={key} onClick={() => navigate(`/hotel/${value.id}`)}>
                <img src={value.picture} alt="hotel" />
                <h4>{value.name}</h4>
                <p>{value.description}</p>
                <p>{value.adress}</p>
                <p>{value.postCode}</p>
                <p>{value.city}</p>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  </div>
  </>
    
  )
}

export default Hotels;