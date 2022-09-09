import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
// import { useNavigate } from "react-router-dom";

function Users() {
  let {id} = useParams();
  // let navigate = useNavigate();
  const [usersObject, setUsersObject] = useState({});
  const [newName, setNewName] = useState('');
  const [newSurname, setNewSurname] = useState('');
  const [newMail, setNewMail] = useState('');
  // const [newPwd, setNewPwd] = useState('');
  // const [newBookingLink, setNewBookingLink] = useState('');


  useEffect(() => {
    axios.get("https://hypnos-booking-backend.herokuapp.com/users/").then((response) => {
      // setListOfHotel(response.data);
      setUsersObject(response.data);
    });

    axios.get("https://hypnos-booking-backend.herokuapp.com/users").then((response) => {
      setUsers(response.data);
      setNewName(response.data);
      setNewSurname(response.data);
      setNewMail(response.data);
      setNewRole(response.data);
      // setNewBookingLink(response.data);
    });

  },[]);

  const addUser = () =>{
    axios
    .post("https://hypnos-booking-backend.herokuapp.com/users", {
      name:newName,
      surname:newSurname,
      mail:newMail,
      pwd:newPwd,
      role:newRole,
      UserId:id}, 
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
        {/* <div className="title-container">
          <h1>
         blabla
          </h1>
          <p>
          </p>
        </div> */}
        <h2>Nos Utilisateurs</h2>
        <div className="content">
          <div className="hotels">
          {
            rooms.map((value,key)=>{
              return (
                <div className="hotel"  key={key} >
                  <img src={value.name} alt="hotel" />
                  <h4>{value.surname}</h4>
                  <p >{value.mail}</p>
                  <p >{value.role}</p>
                  <p >{value.pwd}</p>
                  <p >{value.role}</p>
                  <div className='roomsButton'>
                    {/* <button onClick={() => 
                      navigate(`/room/hotel/${id}/room/${value.id}`, 
                      { state: { hotelName: hotelObject.name, suiteName:  value.title } })}> 
                      Voir plus 
                    </button>  */}
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
            <h2>Ajouter un gérant</h2>
          </div>
          <form className="contact-container">
          <label htmlFor="title">Nom du gérant</label>
            <input type="text"  onChange={(e)=>{setNewName(e.target.value)}}/>

            <label htmlFor="description">Surname:</label>
            <input type="text" onChange={(e)=>{setNewSurname(e.target.value)}}/>

            <label htmlFor="coverPicture">Mail:</label>
            <input type="text" onChange={(e)=>{setNewMail(e.target.value)}}/>

            <label htmlFor="price">Pwd:</label>
            <input type="text" onChange={(e)=>{setNewPwd(e.target.value)}}/>

            <label htmlFor="bookingLink">Role:</label>
            <input type="text" onChange={(e)=>{setNewRole(e.target.value)}} />
            <button onClick={addUser}>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default Users;