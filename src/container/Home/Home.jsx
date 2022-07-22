import React from 'react';
import { NavBar } from "../../components";

import './Home.scss';

const Home = () => {
  return (
    <div className='app__home'>
      <NavBar />
      <div className="app__home-welcome">
        <div className="app__home-welcome_title">
          Welcome
        </div>
        <div className="app__home-welcome_text">
          We are so glad you're here. You are now part of a growing community of readers and writers, who create, contribute and collaborate with each other via LearnDev Foundation.
        </div>
        <button className="app__home-welcome_button">
          Get Started
        </button>
      </div>
      <div className="app__home-goodReads">
        <div className="app__home-goodReads_title">
          Good Reads
        </div>
      </div>
    </div>
  )
}

export default Home