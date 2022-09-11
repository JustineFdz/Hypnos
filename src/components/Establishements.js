import React from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
// import { useNavigate } from "react-router-dom";
import NavbarDashboard from './NavbarDashboard';

export default function Establishements() {
  // let navigate = useNavigate();
  const initialValues={
    name:"",
    description:"",
    picture:"",
    adress:"",
    postCode:"",
    city:"",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    picture: Yup.string().required(),
    adress: Yup.string().required(),
    postCode: Yup.number().required(),
    city: Yup.string().required(),
  });

  const onSubmit=(data)=>{
    axios.post("http://localhost:3001/hotels", data).then((response) => {
      // setListOfHotels(response.data)
      console.log('it worked')
    })
  };

  return (
    <>
    <NavbarDashboard/>
    <div className='allForms-container'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
        <h1>Ajouter un nouvel hôtel</h1>
          <label>Nom de l'hôtel :</label>
          <ErrorMessage name="name" component="span"/>
          <Field 
          className="field"
          id="input" 
          name="name"/>
          <label>Description :</label>
          <ErrorMessage name="description" component="span"/>
          <Field 
          className="field"
          id="input" 
          name="description"/>
          <label>Url image:</label>
          <ErrorMessage name="picture" component="span"/>
          <Field 
          className="field"
          id="input" 
          name="picture"/>
          <label>Adresse:</label>
          <ErrorMessage name="adress" component="span"/>
          <Field 
          className="field"
          id="input" 
          name="adress"/>
          <label>Code Postal</label>
          <ErrorMessage name="postCode" component="span"/>
          <Field 
          className="field"
          id="input" 
          name="postCode"/>
          <label>Ville</label>
          <ErrorMessage name="city" component="span"/>
          <Field 
          className="field"
          id="input" 
          name="city"/>

          <button type='submit'>Creer un hôtel</button>
        </Form> 
      </Formik> </div>
      </>
  )
}

