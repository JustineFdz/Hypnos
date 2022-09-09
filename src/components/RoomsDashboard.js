// import React, {useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';
// // import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import NavbarDashboard from './NavbarDashboard';

// export default function RoomsDashboard() {
//   // // let navigate = useNavigate();
//   // const initialValues={
//   //   name:"",
//   //   description:"",
//   //   picture:"",
//   //   adress:"",
//   //   postCode:"",
//   //   city:"",
//   // };

//   // const validationSchema = Yup.object().shape({
//   //   name: Yup.string().required(),
//   //   description: Yup.string().required(),
//   //   // picture: Yup.string()
//   //   //     .matches(
//   //   //         /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//   //   //         'Enter correct url!'
//   //   //     )
//   //   //     .required('Please enter website'),
//   //   picture: Yup.string().required(),
//   //   adress: Yup.string().required(),
//   //   postCode: Yup.number().required(),
//   //   city: Yup.string().required(),
//   // });

//   useEffect(() => {
//     axios.get(`http://hypnos-booking-backend.herokuapp.com/hotels/byId/${id}`).then((response) => {
//       // setListOfHotel(response.data);
//       setHotelObject(response.data);
//     });
//   },[]);

//   // const onSubmit=(data)=>{
//   //   axios.post("http://hypnos-booking-backend.herokuapp.com/hotels", data).then((response) => {
//   //     // setListOfHotels(response.data)
//   //     console.log('it worked')
//   //   })
//   // };

//   return (
//     <>
//     <NavbarDashboard/>
//     <div className="allForms-container">
//       <div className="allForms mx-3 py-3">
//         <div className="content">
//           <div className="title-container">
//             <h2>Ajouter une chambre</h2>
//           </div>
//           <form className="contact-container">
//             <label htmlFor="title">Nom de la suite:</label>
//             <input type="text" />
//             <label htmlFor="description">Description:</label>
//             <input type="text"/>
//             <label htmlFor="coverPicture">Image:</label>
//             <input type="text"/>
//             <label htmlFor="price">Prix:</label>
//             <input type="text" />
//             <label htmlFor="bookingLink">Liens vers la reservation booking:</label>
//             <input type="text" />
//             <button>Envoyer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//       </>
//   )
// }

