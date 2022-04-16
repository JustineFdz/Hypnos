// import React from 'react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

// export default function Test() {
//   const[ListOfPosts, setListOfPosts] = useState([]);
//   let navigate = useNavigate();

//   useEffect(() => {

//     axios.get("http://localhost:3001/posts").then((response) => {
//       setListOfPosts(response.data);
//     });
//   },[])

//   return (
//     <div className='test'>
//       {ListOfPosts.map((value,key) => {
//          return (
//           <div className='post' onClick={() => navigate(`/post/${value.id}`)}>
//             <div key={key} className="titleTest"> {value.title} </div>
//             <div key={key} className="bodyTest"> {value.postText} </div>
//             <div key={key} className="footerTest"> {value.username} </div>
//           </div> 
//          )
//       })}</div>
//   )
// }
