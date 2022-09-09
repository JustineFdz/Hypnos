import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export const Account = () => { 
  const [listOfBookings, setListOfBookings] = useState([]);
  // const [listOfHotels, setListOfHotels] = useState([]);
  // const [listOfRooms, setListOfRooms] = useState([]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("accessToken");
    const userId = sessionStorage.getItem("userId");
    //  debugger
    if (isLoggedIn) {
      axios
        .get(`https://hypnos-booking-backend.herokuapp.com/bookings/user/${userId}`)
        .then((response) => {
          console.log('>>>>>>>>>> booking Date',response.data)
          setListOfBookings(response.data);
          // setListOfRooms(response.data);
          // setListOfHotels(response.data);
        });
    }
  }, []);

  return (
    <>
    <Navbar />
    <div className="hotel-container mx-3 py-3">
      <div className="container">
        <h2>Liste des reservations</h2>
        <div className="content">
          <div className="hotels">
            {listOfBookings.map((value, key) => (
              <div className="hotel"  key={key} >
                <h4>Nom hotel{value.hotelId}</h4>
                <p >Nom chambre{value.roomId}</p>
                <p >Du {new Date(value.checkIn).toLocaleDateString()}</p>
                <p >Au {new Date(value.checkIn).toLocaleDateString()}</p>
                <div className='roomsButton'>
                <button className="delete">Supprimer</button> 
                {/* <button onClick={() => {deleteBooking(bookingObject.id)}} className="delete">Supprimer</button>  */}
                </div>
              </div>
              ))};
          </div>
        </div>
      </div>
    </div>
   </>
      
  );
};
