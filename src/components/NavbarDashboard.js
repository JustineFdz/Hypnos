import { Link } from 'react-router-dom';
import {Menu, MenuItem} from '@mui/material'
import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';


export default function Navbar() {
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
          <span>Gestion</span>
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
                <Link to ='/' onClick={handleMenuClose}>Acceuil</Link>
              </li>
              <li>
                <Link to ='/users' >Utilisateurs</Link>
              </li>
              <li>
                <Link to ='/owners'>Gérants</Link>
              </li>
              <li>
                <Link 
                  aria-controls='menu'
                  onClick={handleOpenMenu}
                  to ='/establishments'>
                    Hotels 
                </Link>
              </li>
              <li>
              <Link to ='/messages'>Messages</Link>
              </li>
              <li>
              <Link to ='/logout'>Déconnexion</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <Menu className='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to ='/chabichou'>Chabichou</Link></MenuItem>
    </Menu>
    </> 
  )
}
