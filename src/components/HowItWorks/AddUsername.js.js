import React, { useState } from "react";
import image1 from '../../assests/images/image1.jpg'
import addUsername from '../../assests/graphics/Add Usernames and Other Information people know you by.svg'


const AddUsername = () => {
  return (
    <>
      <section>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-10 col-md-5 col-lg-5 header-left-side d-flex align-items-center justify-content-center flex-column">
            <h3>
              Add username and other <br />Information people knows
            </h3>
            <p className="main-hero-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
              of Ipsa officia ad deserunt voluptate quam, nisi odio
              of
            </p>
          </div>
          {/*  --------------- main header right side--------------  */}
          <div className="col-10 col-md-5 col-lg-5 d-flex justify-content-center align-items-center main-herosection-images">
            <img
              src={addUsername}
              alt="heroimg"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AddUsername;