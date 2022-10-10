import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

import { images } from "../../constants";

const NavBar = () => {
    return (
        <div className='app__navbar'>
            <div className='app__navbar-logo'>
                <p>HowTo Guide</p>
            </div>

            {/* use any classname that suits you for this wrapper */}
            <div className='app__navbar-wrapper'>
                <div className='app__navbar-menu'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Articles</a>
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
                    <a href=''>
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
