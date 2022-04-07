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
          <span>Hypnoss</span>
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
                <Link to ='/'>Accueil</Link>
              </li>
              <li>
                <Link 
                  aria-controls='menu'
                  onClick={handleOpenMenu}
                  to ='/hotel'>
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
              <Link to ='/signup'>Connexion</Link>
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
