import React from 'react';
import './NavBar.scss';

import { images } from '../../constants';

const NavBar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <p>HowTo Guide</p>
      </div>
      <div className='app__navbar-menu'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="app__navbar-menu_line" />
      <div className="app__navbar-social">
        
      </div>
      <div className="app__navbar-search_line" />
      <div className="app__navbar-search">

      </div>
    </div>
  )
}

export default NavBar;