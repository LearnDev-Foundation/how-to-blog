import React, { useState, useRef, useEffect } from 'react';
import Notification from '../Notification/Notification';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './NavBar.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [navbarOpen, setNavbarOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(
                navbarOpen &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setNavbarOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [navbarOpen]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?search=${searchInput}`);
        }
    }

  return (
    <div className='app__navbar'>
        <Notification />
        <div className="app__navbar_container" ref={ref}>
            <div className="app__navbar_container-logo">
                <img src={logo} alt="" />
                <h1>LearnDev Foundation</h1>
            </div>
            <div className="app__navbar_container_menu">
                <div className="app__navbar_container_menu-links">
                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                    <a href="https://learndevfoundation.vercel.app/#/about" target="_blank" rel='noopener noreferrer'>About</a>
                </div>
                <div className="app__navbar_container_menu-search">
                    <div className="input">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search' value={searchInput} onChange={handleChange} onKeyPress={handleSearch}/>
                    </div>
                </div>
                <div className="app__navbar_hamburger">
					<FontAwesomeIcon icon={faBars} beat className='.app__navbar_hamburger-icon' onClick={() => setNavbarOpen((prev) => !prev)}/>
					<ul className={`hamburger ${navbarOpen ? "show-hamburger" : ""}`}>
						<li onClick={() => setNavbarOpen(false)}><Link to="/">Home</Link></li>
						<li onClick={() => setNavbarOpen(false)}><Link to="/articles">Articles</Link></li>
						<li onClick={() => setNavbarOpen(false)}><a href="https://learndevfoundation.vercel.app/#/about" target="_blank" rel='noopener noreferrer'>About</a></li>
                        <div className="app__navbar_hamburger-search">
                            <div className="input">
                                <img src={search} alt="" />
                                <input type="text" placeholder='Search' value={searchInput} onChange={handleChange} onKeyPress={handleSearch}/>
                            </div>
                        </div>
					</ul>
				</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar;