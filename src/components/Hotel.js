import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Hotel() {
  let {id} = useParams();
  const [hotelObject, setHotelObject] = useState({});
  

  useEffect(() => {
    axios.get(`http://localhost:3001/hotels/byId/${id}`).then((response) => {
      // setListOfHotel(response.data);
      setHotelObject(response.data);
    },[]);
  });


  return (
    <>
    <Navbar />
    <div className="hotel-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h1>
          {hotelObject.name}
          </h1>
          <p>
          {hotelObject.description}
          </p>
        </div>
        <h2>Nos Suites</h2>
        <div className="content">
        
          <div className="hotels">
          {/* {
            data.map(({image,title,description},index)=>{
              return (
                <div className="hotel" key={index}>
                  <img src={image} alt="hotel" />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })
          } */}
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Hotel