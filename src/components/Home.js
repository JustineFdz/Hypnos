import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

import Navbar from './Navbar';
import NavbarDashboard from './NavbarDashboard';


export const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("accessToken");
  const name = sessionStorage.getItem("name");
  const surname = sessionStorage.getItem("surname");
  const role = sessionStorage.getItem( "role")

      return (
        <>
        {role=='admin' ? (<NavbarDashboard />):(<Navbar />) }      
        <div className="home-container mx-3 py-3">
          <div className="container">
              <div className="title-container"> 
                
              <p>Hypnos est un groupe hôtelier fondé en 2004. Propriétaire de 7 établissements dans les quatre coins 
                  de l’hexagone, chacun de ces hôtels s’avère être une destination idéale pour les couples en quête d’un séjour romantique à deux.
              </p>

              <img className='img-home'
              src='https://evasionasantorin.fr/wp-content/uploads/2020/08/hotels-vue-coucher-de-soleil-36-1024x683.jpg'></img>
            
            {isLoggedIn ? (
                  <div>
                    {/* <div className='hello'>Bonjour {`${name} ${surname}`}</div> */}
                    <div className='hello'>Bonjour {`${name} ${surname}`}</div>
                    <div>
                     <a onClick={() => {  navigate('/account')}}> Mes reservations</a>
                    </div>
                    <div>
                      <a className='liens'
                        onClick={() => { 
                          sessionStorage.removeItem("accessToken");
                          sessionStorage.removeItem("name");
                          sessionStorage.removeItem("surname");
                          sessionStorage.removeItem("userId"); // useerId ?
                          navigate('/login')
                        }}>
                        Se deconnecter 
                      </a>
                    </div>
                  </div>
                ) : (
                    <div>
                      <a onClick={() => { navigate('/login') }}>Se Connecter</a>
                    </div>
                )}
    
            <div className="content">
            
              <div className="hotels">
              </div>
              </div>
            </div>
          </div>
        </div>
       </>
      )
}