import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

function Hotel() {
  let {id} = useParams();
  let navigate = useNavigate();
  const [hotelObject, setHotelObject] = useState({});
  const [rooms, setRooms] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCoverPicture, setNewCoverPicture] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newBookingLink, setNewBookingLink] = useState('');
  // const [newPicture1, setNewPicture1] = useState('');
  // const [newPicture2, setNewPicture2] = useState('');
  // const [newPicture3, setNewPicture3] = useState('');
  // const [newPicture4, setNewPicture4] = useState('');
  // const [newPicture5, setNewPicture5] = useState('');
  // const [newPicture6, setNewPicture6] = useState('');
  // const [newPicture7, setNewPicture7] = useState('');
  

  useEffect(() => {
    axios.get(`https://hypnos-booking-backend.herokuapp.com/hotels/byId/${id}`).then((response) => {
      // setListOfHotel(response.data);
      setHotelObject(response.data);
    });

    axios.get(`https://hypnos-booking-backend.herokuapp.com/rooms/${id}`).then((response) => {
      // setListOfHotel(response.data);
      setRooms(response.data);
      setNewTitle(response.data);
      setNewDescription(response.data);
      setNewCoverPicture(response.data);
      setNewPrice(response.data);
      setNewBookingLink(response.data);
      // setNewPicture1(response.data);
      // setNewPicture2(response.data);
      // setNewPicture3(response.data);
      // setNewPicture4(response.data);
      // setNewPicture5(response.data);
      // setNewPicture6(response.data);
      // setNewPicture7(response.data);
    });

  },[]);
  //(newTitle,newDescription,newCoverPicture,newPrice,newBookingLink)
  const addRoom = () =>{
    axios
    .post("https://hypnos-booking-backend.herokuapp.com/rooms", {
      title:newTitle,
      description:newDescription,
      coverPicture:newCoverPicture,
      price:newPrice,
      bookingLink:newBookingLink,
      // picture1:newPicture1,
      // picture2:newPicture2,
      // picture3:newPicture3,
      // picture4:newPicture4,
      // picture5:newPicture5,
      // picture6:newPicture6,
      // picture7:newPicture7,
      HotelId:id}, 
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },}) 
    .then((response) =>{

      
    });
  };
  // const isLoggedIn = sessionStorage.getItem("accessToken");

  


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
                <div className="hotel"  key={key} >
                  <img src={value.coverPicture} alt="hotel" />
                  <h4>{value.title}</h4>
                  <p >{value.description}</p>
                  <p >{value.price}€</p>
                  {/* <button > Lien vers la resa</button> */}
                  {/* <p>{value.bookingLink}</p> */}
                  {/*  */}
                  <div className='roomsButton'>
                    <button onClick={() => navigate(`/room/hotel/${id}/room/${value.id}`, { state: { hotelName: hotelObject.name, suiteName:  value.title } })}> Voir plus </button> 
                    {/* <button onClick={() => navigate(`/book-room/${value.id}`)}> Réserver </button>  */}
                    
                    {/* {isLoggedIn &&<button onClick={() => navigate(`/book-room/${value.id}`)}> Réserver </button>} 
                    {!isLoggedIn &&  <Link to='/login'><button>Réserver</button></Link>} */}
                  </div>
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

            <label htmlFor="bookingLink">Lien vers la reservation booking:</label>
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

//onClick={() => navigate(`/room/${value.id}`)}