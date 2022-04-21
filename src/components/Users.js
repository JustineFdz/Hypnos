// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import { DataGrid } from '@mui/x-data-grid';
// //import {useParams} from 'react-router-dom';

// export default function Users() {

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'Nom', width: 130 },
//     { field: 'lastName', headerName: 'Prénom', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },

//   ];
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
//   const [listOfBookings, setListOfBookings] = useState([]);

//   useEffect(() => {
//     const isLoggedIn = sessionStorage.getItem("accessToken");
//     const userId = sessionStorage.getItem("userId");
//     if (isLoggedIn) {
//       axios
//         .get(`https://hypnos-booking-backend.herokuapp.com/bookings/user/${userId}`)
//         .then((response) => {
//           setListOfBookings(response.data);
//         });
//     }
//   }, []); 


//   return (
//     <>
//       <Navbar />
//       <div className="allForms-container">
//         <div className="allForms mx-3 py-3">
//           <div className="content">
//             <div className="title-container">
//               <h2>Account</h2>
//             </div>
//             {listOfBookings.map((value, key) => {
//               return (
//                   <div key={key}>
//                   <div>{value.checkIn}</div>
//                   <div>{value.checkOut}</div>
//                   {/* nom de la suite */}
//                   <div>{value.RoomId}</div>
//                   {/*nom de l'hotel  */}
//                   <div>Nom de l'hotel ici</div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="booking-dataGrid" style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//         </div>
//       </div>
//     </>
//   );
// };
