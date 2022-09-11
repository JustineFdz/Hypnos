import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';
//import {useParams} from 'react-router-dom';

export const Booking = () => {
  //let {hotelId} = useParams();
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');

  const [listOfHotels, setListOfHotels] = useState([]);
  const [listOfRooms, setListOfRooms] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedSuite, setSelectedSuite] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/hotels").then((response) => {
      setListOfHotels(response.data); 
    });
  }, []);
  
  useEffect(() => {
    if (selectedHotel) {
      axios.get(`http://localhost:3001/rooms/${selectedHotel}`).then((response) => {
      setListOfRooms(response.data); 
    });
    }
  }, [selectedHotel]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/bookings/hotel/${selectedHotel}/room/${selectedSuite}`, {
      checkIn: startDate, 
      checkOut: endDate,
      userId: sessionStorage.getItem("userId")
    }).then((response) => {
      console.log('>>>>>>>>>>>>>> booking call returned', response.data) 
    });
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      navigate("/account");
      // ensuite renvoyer réservation si le user arrive d'une page booking
    });
  };  
  
    return (
      <>
        <Navbar />
    <div className="allForms-container">
      <div className="allForms mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Réservation</h2>
          </div>
              <form className="contact-container" onSubmit={handleSubmit}>
            <label htmlFor="Choix">Choisissez un Hotel</label>
                <select onChange={(e) => {
                  setSelectedHotel(e.target.value)
                }}>
              <option>--- Hôtels ---</option>
              {
                listOfHotels.map((value,key)=>{
                  return (
                    <option className="hotel" key={key} value={value.id}>{value.name}</option>
                  );
                })
              }
            </select>
            <label htmlFor="Choix">Choisissez une Suite</label>
                <select onChange={(e) => {
                  setSelectedSuite(e.target.value)
                }}>
                  <option>--- Suites ---</option>
                  {listOfRooms.map((value, key) => {
                  return (
                    <option className="room" key={key} value={value.id}>{value.title}</option>
                  );
                })
              }
            </select>
            <label htmlFor="checkin">Date d'arrivée: {startDate}</label>
                <input id="checkin" type="date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}></input>
            <label htmlFor="checkout">Date de départ: {endDate}</label>
            <input id="checkout" type="date"  value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}></input>
            <button type="submit">Réserver</button>
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