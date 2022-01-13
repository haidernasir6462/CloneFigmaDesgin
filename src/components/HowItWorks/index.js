import React, { useState } from "react";
import AddUsername from './AddUsername.js.js'
import BadGifts from './BadGifts.js'
import Gifts from './Gifts.js'
import Occasion from './Occasion.js'


const HowItWorks = () => {
  return (
    <>
      <section className="container main-hero-container">
        <div>
          <h1 className='text-center fw-bold text-decoration-underline'>How it works</h1>
          <AddUsername />
          <Gifts />
          <Occasion />
          <BadGifts />
        </div>
      </section>
    </>
  );
};

export default HowItWorks;