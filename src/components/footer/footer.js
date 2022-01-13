import React from "react";
import foooterBg from '../../assests/graphics/Footer BG.svg'
import logo from '../../assests/graphics/file 041-1.png'
import facebook from '../../assests/graphics/facebook.svg'
import twitter from '../../assests/graphics/twitter.svg'
import linkdin from '../../assests/graphics/linkdin.svg'
import pintrest from '../../assests/graphics/pintrest.svg'

const footer = () => {
  return (
    <>
      {/* Footer */}
      <footer
        className="page-footer font-small blue-grey lighten-5 text-white"
        style={{ backgroundImage: foooterBg }}>
        {/* Footer Links */}
        <div className="container text-center text-md-left mt-5 p-5">
          {/* Grid row */}
          <div className="row pt-3 dark-grey-text">
            {/* Grid column */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-4">
              {/* Content */}
              <img className="p-3 w-100" src={logo} alt='logo'/>
              <ul className=" d-flex align-item-center justify-content-center">
                <li>
                  <a
                    href="#"
                    className="text-white p-2"
                  >
                    <img src={facebook} alt="facebook" className="w-75" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white p-2"
                  >
                    <img src={twitter} alt="twitter" className="w-75" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white p-2"
                  >
                    <img src={linkdin} alt="linkdin" className="w-75" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white p-2"
                  >
                    <img src={pintrest} alt="pintrest" className="w-75" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Links</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <div href="#!">Home</div>
              </p>
              <p>
                <div href="#!">Your Home</div>
              </p>
              <p>
                <div href="#!">BrandFlow</div>
              </p>
              <p>
                <div href="#!">Bootstrap</div>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Support</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <div href="#!">FAQ</div>
              </p>
              <p>
                <div href="#!">Become an Affiliate</div>
              </p>
              <p>
                <div href="#!">Shipping Rates</div>
              </p>
              <p>
                <div href="#!">Help</div>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-33 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> Address
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}

        {/* Copyright */}

        <hr />

        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8">
            <p class="text-center text-md-left">
              © 2020 Copyright: All right reserved.
            </p>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0">
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <p class="btn-floating btn-sm rgba-white-slight mx-1">
                    term of use
                  </p>
                </li>
                <li class="list-inline-item">
                  <p class="btn-floating btn-sm rgba-white-slight mx-1">
                    Privacy policy
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default footer;
