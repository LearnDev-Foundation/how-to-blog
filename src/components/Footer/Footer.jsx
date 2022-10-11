import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { images } from "../../constants"

const Footer = () => {
  return (
    <div>

      <div className="app__footer">
        <div className="app__footer-content">
          <div className="app__footer-content-info">
            <p>Contact Us</p>
            <a href="mailto:learndevfoundation@gmail.com">learndevfoundation@gmail.com</a>
          </div>
          <div className="app__footer-content-info">
            <p>Explore</p>
            <a href="#">About</a>
            {/* <a href="#">Partners</a>
            <a href="#">Job Opportunities</a> */}
            <a href="https://github.com/LearnDev-Foundation/how-to-blog">Contribute</a>
          </div>
          <div className="app__footer-content-info">
            <p>Our Products</p>
            <a href="#">LearnDev Foundation</a>
            <Link to="/">HowTo Guide</Link>
          </div>
          <div className="app__footer-content-info">
            <p>Connect With Us</p>
            <div className="app__footer-content-info-socials">
              <a href="#">
                <img src={images.facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={images.twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={images.linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/LearnDev-Foundation">
                <img src={images.github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="app__subFooter">
        <div className="app__subFooter-content">
          <div className="app__subFooter-content-title">
            2022 | LearnDev Foundation
          </div>
          <div className="app__subFooter-content-social">
            <a href="#">
              <img src={images.facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={images.twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={images.linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/LearnDev-Foundation">
              <img src={images.github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer