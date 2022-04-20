import React from 'react';
import { Link } from 'react-router-dom';
// import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';


function Footer() {
  return (
    <div className='footer '>
      <div className="brand">
          <span><Link to ='/' ><img className='gold-footer' src='././assets/gold.png'/></Link></span>
      </div>  
      {/* <div className='social'>
      <Link to ='/' ><FacebookSharpIcon/></Link>
      </div>    */}
    </div>
  )
}

export default Footer