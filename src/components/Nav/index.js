import React, { useState } from "react";
// import "./style.css";
import Logo from "../../assests/graphics/file 01-1.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav shadow">
        {/* 1st logo part  */}
        <div className="logo">
          <a href="#" className='w-75'>
            <img src={Logo} alt='Logo' className='navbar-brand-md w-75' />
          </a>        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a to="/">My Lookup information</a>
            </li>
            <li>
              <a to="/about">My Registery</a>
            </li>
          </ul>

        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;