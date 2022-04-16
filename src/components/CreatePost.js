// import React from 'react';
// import axios from 'axios';
// import {Formik, Form, Field, ErrorMessage} from "formik";
// import * as Yup from 'yup';
// import { useNavigate } from "react-router-dom";

// function CreatePost() {
//   let navigate = useNavigate();
//   const initialValues={
//     title:"",
//     postText:"",
//     username:"",
//   };

//   const validationSchema = Yup.object().shape({
//     title: Yup.string().required("Titre requis"),
//     postText: Yup.string().required("Description requise"),
//     username: Yup.string().min(3).max(15).required("Nom requis"),
//   });

//   const onSubmit=(data)=>{
//     axios.post("http://localhost:3001/posts", data).then((response) => {
//       navigate("/test")
//     },[])
//   };

  

//   return (
//     <div className='createPostPage'>
//       <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//         <Form className='formContainer'>
//           <label>Title :</label>
//           <ErrorMessage name="title" component="span"/>
//           <Field 
//           id="inputCreatePost" 
//           name="title" 
//           placeholder="title"/>
//           <label>Post :</label>
//           <ErrorMessage name="post" component="span"/>
//           <Field 
//           id="inputCreatePost" 
//           name="postText" 
//           placeholder="post"/>
//           <label>Username :</label>
//           <ErrorMessage name="username" component="span"/>
//           <Field 
//           id="inputCreatePost" 
//           name="username" 
//           placeholder="name"/>

//           <button type='submit'>Create post</button>
//         </Form> 
//       </Formik> </div>
//   )
// }

// export default CreatePost;


