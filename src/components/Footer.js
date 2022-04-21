import React from 'react';
import { Link } from 'react-router-dom';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import InstagramIcon from '@mui/icons-material/Instagram';
//import FacebookIcon from '@mui/icons-material/Facebook';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className='footer '>
      <div className="brand">
          <span><Link to ='/' ><img className='gold-footer' src='././assets/gold.png'/></Link></span>
      </div>  
      {/* <div className='social'>
      <Link to ='/' ><TwitterIcon/></Link>
      <Link to ='/' ><InstagramIcon/></Link>
      <Link to ='/' ><FacebookIcon/></Link>
      <Link to ='/' ><LinkedInIcon/></Link>
      </div>    */}
    </div>
  )
}

export default Footer