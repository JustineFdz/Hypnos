import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Hotel() {
  let {id} = useParams();
  const [hotelObject, setHotelObject] = useState({});
  const [rooms, setRooms] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCoverPicture, setNewCoverPicture] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newBookingLink, setNewBookingLink] = useState('');
  

  useEffect(() => {
    axios.get(`http://localhost:3001/hotels/byId/${id}`).then((response) => {
      // setListOfHotel(response.data);
      setHotelObject(response.data);
    });

    axios.get(`http://localhost:3001/rooms/${id}`).then((response) => {
      // setListOfHotel(response.data);
      setRooms(response.data);
      setNewTitle(response.data);
      setNewDescription(response.data);
      setNewCoverPicture(response.data);
      setNewPrice(response.data);
      setNewBookingLink(response.data);
    });

  },[]);
  //(newTitle,newDescription,newCoverPicture,newPrice,newBookingLink)
  const addRoom = () =>{
    axios
    .post("http://localhost:3001/rooms", {
      title:newTitle,
      description:newDescription,
      coverPicture:newCoverPicture,
      price:newPrice,
      bookingLink:newBookingLink,
      HotelId:id},
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },}) 
    .then((response) =>{

      
    });
  };
  


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
          {
            rooms.map((value,key)=>{
              return (
                <div className="hotel"  key={key}>
                  <img src={value.coverPicture} alt="hotel" />
                  <h4>{value.title}</h4>
                  <p >{value.description}</p>
                  <p >{value.price}€</p>
                  {/* <button > Lien vers la resa</button> */}
                  <p>{value.bookingLink}</p>
                  {/*  */}
                  {/* <button onClick={() => navigate(`/post/${name}`)}> Voir plus </button> */}
                </div>
              );
            })
          }
          </div>
        </div>
      </div>
    </div>
    <div className="allForms-container">
      <div className="allForms mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Ajouter une chambre</h2>
          </div>
          <form className="contact-container">
            <label htmlFor="title">Nom de la suite:</label>
            <input type="text"  onChange={(e)=>{setNewTitle(e.target.value)}}/>

            <label htmlFor="description">Description:</label>
            <input type="text" onChange={(e)=>{setNewDescription(e.target.value)}}/>

            <label htmlFor="coverPicture">Image:</label>
            <input type="text" onChange={(e)=>{setNewCoverPicture(e.target.value)}}/>

            <label htmlFor="price">Prix:</label>
            <input type="text" onChange={(e)=>{setNewPrice(e.target.value)}}/>

            <label htmlFor="bookingLink">Liens vers la reservation booking:</label>
            <input type="text" onChange={(e)=>{setNewBookingLink(e.target.value)}} />
            <button onClick={addRoom}>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default Hotel


// onClick={() => navigate(`/hotel/${room.id}`)}