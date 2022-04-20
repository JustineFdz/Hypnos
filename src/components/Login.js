import React, { useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import Navbar from './Navbar';
// import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [authError, setAUthError] = useState(false);
  const  redirectionUrl  = location?.state?.redirectionUrl;
  const initialValues={
    mail:"",
    password:"",
  };

  const validationSchema = Yup.object().shape({
    mail: Yup.string().email(),
    password: Yup.string().min(4).max(20).required(),
  });

  const login = (data) => {
    axios.post("http://localhost:3001/auth/login", data).then((response) =>{
      if (response.data.error) {
        setAUthError(true);
      }


      else {
        setAUthError(false);
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("surname", response.data.surname);
        if (redirectionUrl) {
          navigate(`/${redirectionUrl}`);
        } else { 
          navigate(`/`);
        }
       
      }
    })
  
  };  

  return (
    <>
    <Navbar />
    <div className='allForms-container'>
      <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
        <Form className='formContainer'>
        <h1>Se connecter</h1>
            <label>Email :</label>
          <ErrorMessage name="mail" component="span"/>
          <Field 
            // type="email"
            className="field"
            id="inputMail" 
            name="mail" 
            // placeholder="name"
            />
          <label>Mot de passe :</label>
          <ErrorMessage name="password" component="span"/>
          <Field 
            className="field"
            type="password"
            id="inputPassword" 
            name="password" 
            // placeholder="Your password"
            />
            <button type='submit'>Connexion</button>
            { authError && <div className='alertMessage'> Mauvaise combinaison mail / mot de passe</div>}
          <p>
        Pas encore inscrit ?<br />
        <span className="line">
          <Link to ='/registration'>Inscription</Link>
        </span>
      </p>
        </Form> 
        
      </Formik> 

      </div>
      </>
  )
}

export default Login


