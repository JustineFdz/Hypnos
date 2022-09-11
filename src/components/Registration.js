import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";


function Registration() {
  let navigate = useNavigate();
  const initialValues={
    name:"",
    surname:"",
    mail:"",
    password:"",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    surname: Yup.string().min(3).max(15).required(),
    mail: Yup.string().email(),
    password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
            '8 à 24 caractères.Doit inclure des lettres majuscules et minuscules, un chiffre et un caractère spécial.'
            
        )
        .required(''),
  });
  
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      navigate("/login");
      // history.back? depuis login? renvoyer réservation si le user arrive d'une page booking
    });
  };  

  return ( 
    <>
    <Navbar />
    <div className='allForms-container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
        <h1>S'inscrire</h1>
          <label>Nom :</label>
          <ErrorMessage name="name" component="span"/>
          <Field 
            className="field"
            id="inputCreateName" 
            name="name" 
            // placeholder="name"
            />
            <label>Prénom :</label>
          <ErrorMessage name="surname" component="span"/>
          <Field 
            className="field"
            id="inputCreateSurname" 
            name="surname" 
            // placeholder="name"
            />
            <label>Email :</label>
          <ErrorMessage name="mail" component="span"/>
          <Field 
            // type="email"
            className="field"
            id="inputCreateMail" 
            name="mail" 
            // placeholder="name"
            />
          <label>Mot de passe :</label>
          <ErrorMessage name="password" component="span"/>
          <Field 
            className="field"
            type="password"
            id="inputCreatePassword" 
            name="password" 
            // placeholder="Your password"
            />
          <button type='submit'>Inscription</button>
          <p>
            Déjà inscrit?<br />
            <span className="line">
              <Link to ='/login'>Connexion</Link>
            </span>
          </p>
        </Form> 
      </Formik> 

      </div>
      </>
  )
}

export default Registration


