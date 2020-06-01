import React from 'react';
import {Link} from 'react-router-dom';
import './headerComponent.css';

const Header = () => (  
<div className='header'>
    
     <div  className="logo"
     style={{
         backgroundImage:'url(/images/logo-second.JPG)'
     }}
     />
   
    <div  className='header-links'>
        <Link>HOME</Link>
        <Link>PODCAST</Link>
        <Link>BLOG</Link>
        <Link>EVENTS</Link>
        <Link>CONTACT</Link>
        <Link>STORY</Link>
        <Link>CHARITY</Link>
        <Link>CARRERS</Link>
      <div className='language'>LANGUAGE</div>
      <div className="search">SEARCH </div>
    </div>

</div>

);
export default Header;