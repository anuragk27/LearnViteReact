// Navbar.js

import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <> 

    {/* <Nav> */}
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    {/* </Nav> */}
    
    </>

      
  );
};

export default Navbar;
