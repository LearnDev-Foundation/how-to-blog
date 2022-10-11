import React, { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

import { images } from "../../constants";

const NavBar = () => {
    //handles the hamburger menu state change
    const [toggle, setToggle] = useState({
        isOpen: false
    })

     // toggles the hamburger menu open and close
    function open(){
        setToggle(prevToggle=>{
            return{
                ...prevToggle,
                isOpen:!toggle.isOpen
            }  
        })
    }
   //this is to reduce the space between the close menu and the search icon
    const showSearch = {
        position: toggle.isOpen?'absolute': '',
        right: toggle.isOpen?'35px':' '
    }
    
    return (
        <div className='app__navbar'>
            <div className='app__navbar-logo'>
                <p>HowTo Guide</p>
            </div>

            {/* use any classname that suits you for this wrapper */}
            <div className='app-search' style={showSearch}>
                <img src={images.search} alt='search' />
            </div>
        
            {/* added this to create hamburger menu */}
            <div className={toggle.isOpen?'app_navbar-open':'app_navbar-hamburger'} onClick={open}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* controls how the navbar items are being displayed on different screen size */}
            <div className={toggle.isOpen?'app_navbar-show':'app__navbar-wrapper'}>
                <div className='app__navbar-menu'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <Link to='/allposts'>Articles</Link>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* menu-line */}
                <div className='app__navbar-menu_line' />
                {/* social icons */}
                <div className='app__navbar-social'>
                    <a href=''>
                        <img src={images.facebook} alt='' />
                    </a>
                    <a href='https://github.com/LearnDev-Foundation/how-to-blog'>
                        <img src={images.github} alt='' />
                    </a>
                    <a href=''>
                        <img src={images.linkedin} alt='' />
                    </a>
                    <a href=''>
                        <img src={images.twitter} alt='' />
                    </a>
                </div>
                {/* menu-line */}
                <div className='app__navbar-menu_line' />
                {/* search icon */}
                <div className='app__navbar-search'>
                    <Link to="/search">
                        <img src={images.search} alt='search' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
