import React from "react";

export default function Footer({ space }) {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top background-img-2  ${
            space ? "pt-150" : "pt-60"
          }`}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <div className="footer-nav-wrap text-white">
                  <img
                    src="/assets/img/logo_white.svg"
                    alt="footer logo"
                    width="120"
                    className="img-fluid mb-3"
                  />
                  <p>
                    Make the reservation process easier. Add more options and
                    devices to rent from.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Resources</h5>
                      <ul className="list-unstyled">
                        {/* <li className="mb-2">
                          <a href="#/">Help</a>
                        </li>
                        <li className="mb-2">
                          <a href="#/">Events</a>
                        </li> */}
                        <li className="mb-2">
                          <a href="https://github.com/Petertrung">
                            Documentation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Company</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2">
                          <a href="#about">About Us</a>
                        </li>
                        {/* <li className="mb-2">
                          <a href="#/">Careers</a>
                        </li> */}
                        <li className="mb-2">
                          <a href="#team">Our Team</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Location</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-mobile mr-2"></span>
                          <a href="tel:+12062653633"> +1 206 265 3633</a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-email mr-2"></span>
                          <a href="mailto:nguyen@petertrung.com">
                            {" "}
                            nguyen@petertrung.com
                          </a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-world mr-2"></span>
                          <a href="https://www.petertrung.com">
                            {" "}
                            www.petertrung.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-gray-light mt-5 py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-7">
                  <div className="copyright-wrap small-text">
                    <p className="mb-0 text-white">
                      ©ParkSpot All rights reserved
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-6 col-lg-5">
                  <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a className="small-text" href="#/">
                          Terms
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="small-text" href="#/">
                          Security
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="small-text" href="#/">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
