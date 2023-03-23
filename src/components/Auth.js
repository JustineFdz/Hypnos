import React, {useEffect, useState} from 'react';
import axios from "axios";


export default function Auth() {
  const [role, setRole] = useState('');

  useEffect(() =>{
    axios.get("http://hypnos-booking-backend.herokuapp.com/auth/login").then((response) =>{
      if(response.data.loggedIn ==true) {
        setRole(response.data.user[0].role)
      }
    }
    )
  }, [])

  return (
    <div>
    <h1>{role}</h1>
    <h1>User</h1>
    <h1>Owner</h1>
    </div>
  )
}

