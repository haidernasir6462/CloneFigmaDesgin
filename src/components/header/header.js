import React, { useState } from "react";
import header from '../../assests/graphics/Header Illustrations.svg'
import headerBg from '../../assests/graphics/Header BG.svg'
import Logo from '../../assests/graphics/file 01-1.png'
import search from '../../assests/graphics/Group 4692.svg'
import user from '../../assests/images/user.jpg'



const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-md navbar-light ">
          <div className="container-md">
            <a href="#" className='w-75'>
              <img src={Logo} alt='Logo' className='navbar-brand-md w-50' />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="/">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="/service">
                    Log In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="d-flex align-items-center justify-content-center">
        <div className="row container-md d-flex align-items-center justify-content-center ">
          <div className="col-10 col-md-6 col-lg-6 d-flex align-items-center justify-content-center flex-column">
            <h1>
              GIFT FOR <br />EVERY ONE!
            </h1>
            <p className="main-hero-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
              of
            </p>

            <div className="d-flex flex-row px-sm-5 align-items-center justify-content-center row">
              <div class="row shadow rounded-pill align-items-center justify-content-center">
                <input type="text" class="border-0 pl-5 col-md-7 col-6" aria-label="Text input with dropdown button" placeholder="Name Here" />
                <div class="input-group-append col-md-3 col-4">
                  <button class="btn btn-no-outline dropdown-toggle rounded-pill bg-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Twitter</button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div role="separator" class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className='col-2'>
                  <img src={search} alt='search' className="w-100" />
                </div>
              </div>
            </div>
          </div>
          {/*  --------------- main header right side--------------  */}
          <div className="col-10 col-md-6 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img
              src={header}
              alt="heroimg"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </header >

  );
};

export default Header;