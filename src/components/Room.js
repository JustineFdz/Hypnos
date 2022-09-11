import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
// import {  MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Room() {
  let { hotelId, roomId } = useParams();
  //, param 
  const location = useLocation();
  const {hotelName, suiteName } = location.state;
  const [room, setRoom] = useState({});
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/hotels/${hotelId}/room/${roomId}`).then((response) => {
      setRoom(response.data);
    });

    axios.get(`http://localhost:3001/hotels/${hotelId}/bookings/${roomId}`).then((response) => {
      setCheckIn(response.data);
      setCheckOut(response.data);
      
    });
  },[]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/${hotelId}bookings/${roomId}`, {
      checkIn: startDate, 
      checkOut: endDate,
      userId: sessionStorage.getItem("userId")
    }).then((response) => {
      console.log( response.data) 
    });
  }

  const { coverPicture, title, description, price, bookingLink } = room;

  const isLoggedIn = sessionStorage.getItem("accessToken");
    return (
      <>
      <Navbar />
      <div className="room mx-3 py-3">
        <div className="container">
          <h2>{hotelName}</h2>
          <h3>{title}</h3>
          <div className="content">
            <div className="hotels">
                  <div className="room-content" >
                    <img src={coverPicture} alt="hotel" />
                    <p >{description}</p>
                    <p >{price}€</p>
                    <a href={bookingLink}>booking</a>  
                    {!isLoggedIn &&  <Link to='/login'><button>Réserver</button></Link>}
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
            <div className='book-hotel-name'>
            <p>Hotel:</p>
            <h3>{` ${ hotelName }`}</h3>
            </div>
            <div className='book-suite-name'>
            <p>Suite:</p>
            <h3>{` ${ suiteName }`}</h3>
            </div>
            <form className="contact-container" onSubmit={handleSubmit}>
              <label htmlFor="Choix">Date d'arrivée: </label>
              <input id="checkin" type="date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}></input>
              <label htmlFor="Choix">Date de départ:</label>
              <input id="checkout" type="date"  value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}></input>
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

