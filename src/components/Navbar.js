import { Link } from 'react-router-dom';
import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';


export default function Navbar() {
  const isLoggedIn = sessionStorage.getItem("accessToken");
  const [anchorEl, setAnchorEl] = useState(null);
  const [navState,setNavState] = useState(false);
  const html = document.querySelector("html");

  const handleOpenMenu = (e) =>{
    setAnchorEl(e.currentTarget);
  }

  const handleMenuClose = () =>{
    setAnchorEl(null);
  }

  html.addEventListener("click",()=>setNavState(false));

  return (
    <>
    <nav>
      <div className="container px-3 mx-3">
        <div className="brand">
          <span><Link to ='/' ><img className='gold' src='././assets/gold.png'/></Link></span>
        </div>
        <div className="links-container" onClick = {(e)=>e.stopPropagation()}>
          <div className="toggle">
            {navState?(
              <MdClose onClick={()=>setNavState(false)}/>
            ): (
              <GiHamburgerMenu 
                onClick={(e)=>{
                  e.stopPropagation();
                  setNavState(true);
                }
              } />
            )}
          </div>
          <div className={`links ${navState?"responsive-toggle":""}`}>
            <ul>
              <li>
                <Link to ='/' onClick={handleMenuClose}>Accueil</Link>
              </li>
              <li>
                <Link 
                  to ='/hotels'>
                    Hotels 
                </Link>
              </li>
              <li>
                <Link to ='/reservation'>Réserver</Link>
              </li>
              <li>
              <Link to ='/contact'>Contact</Link>
              </li>
              <li>
              {isLoggedIn ? (
                <Link to ='/' 
                  onClick={() => { 
                    sessionStorage.removeItem("accessToken");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("surname");
                    sessionStorage.removeItem("userId"); // useerId ?
                    sessionStorage.removeItem("role"); // useerId ?
                    navigate('/login')
                    }}
                >Déconnexion</Link>
                ) : (
                  <Link to ='/login'>Connexion</Link>
                )}
    
              
              
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </> 
  )
}
