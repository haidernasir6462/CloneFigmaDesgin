import React, { useState } from "react";
import bad_gift from '../../assests/graphics/Never Get A Bad Gift Again.svg'


const BadGifts = () => {
  return (
    <>
      <section>
        <div className="row d-flex align-items-center justify-content-center">
          {/*  --------------- main header right side--------------  */}
          <div className="col-10 col-md-5 col-lg-5 d-flex justify-content-center align-items-center main-herosection-images">
            <img
              src={bad_gift}
              alt="heroimg"
              className="img-fluid"
            />
          </div>
          <div className="col-10 col-md-5 col-lg-5 header-left-side d-flex align-items-center justify-content-center flex-column">
            <h3>
              Add Gifts You would Like<br />Information people knows
            </h3>
            <p className="main-hero-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
              of Ipsa officia ad deserunt voluptate quam, nisi odio
              of
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BadGifts;