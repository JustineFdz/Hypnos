import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
//import {useParams} from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Account = () => {
  const [listOfBookings, setListOfBookings] = useState([]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("accessToken");
    const userId = sessionStorage.getItem("userId");
    if (isLoggedIn) {
      axios
        .get(`https://hypnos-booking-backend.herokuapp.com/${userId}`)
        .then((response) => {
          console.log('>>>>>>>>>> booking Date',response.data)
          setListOfBookings(response.data);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="allForms-container">
        <div className="allForms mx-3 py-3">
          <div className="content">
            <div className="title-container">
            <h2>Account</h2>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Gestion</TableCell>
                    <TableCell align="right">Hotel</TableCell>
                    <TableCell align="right">Suite</TableCell>
                    <TableCell align="right">Arrivée</TableCell>
                    <TableCell align="right">Départ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {listOfBookings.map((value, key) => (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" scope="row">
                  <button className="delete">Supprimer</button>
                  </TableCell>
                  <TableCell align="right">{value.hotelName}</TableCell>
                  <TableCell align="right">{value.roomName}</TableCell>
                  <TableCell align="right">{new Date(value.checkIn).toLocaleDateString()}</TableCell>
                  <TableCell align="right">{new Date(value.checkOut).toLocaleDateString()}</TableCell>
                  <TableCell align="right"></TableCell>
                  </TableRow>
                ))};
                </TableBody>
              </Table>
            </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
