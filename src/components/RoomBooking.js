import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

import axios from "axios";
import Navbar from './Navbar';

export const RoomBooking = () => {

  const { id } = useParams();
  const [roomData, setRoomData] = useState({});
  

  useEffect(() => {
    const { data } = axios.get(`https://hypnos-booking-backend.herokuapp.com/rooms/${id}`);
    setRoomData(data);
  },[]);
  console.log('>>>>>>>>>>>>', {roomData})  
    return (
      <>
        <Navbar />
    <div className="allForms-container">
           { `Room Booking for room ${id}`}
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