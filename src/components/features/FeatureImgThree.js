import React from "react";

export default function FeatureImgThree() {
  return (
    <>
      <section id="features" className="feature-section ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-4">
              <div className="download-img">
                <img
                  src="assets/img/image-10.png"
                  alt="download"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="feature-contents section-heading">
                <h2>Easy Process with Best Features</h2>
                <p>
                  Deliver the best User Experience for both you and your
                  customers.
                </p>

                <div className="feature-content-wrap">
                  <ul className="nav nav-tabs feature-tab" data-tabs="tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active h6"
                        href="#tab6-1"
                        data-toggle="tab"
                      >
                        <span className="ti-palette"></span>
                        Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link h6"
                        href="#tab6-2"
                        data-toggle="tab"
                      >
                        <span className="ti-desktop"></span>
                        Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link h6"
                        href="#tab6-3"
                        data-toggle="tab"
                      >
                        <span className="ti-harddrives"></span>
                        Database
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content feature-tab-content">
                    <div className="tab-pane active" id="tab6-1">
                      <ul className="list-unstyled">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="badge badge-circle badge-primary mr-3">
                                <span className="ti-check"></span>
                              </div>
                            </div>
                            <div>
                              <p className="mb-0">
                                Clean Material UI components
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="badge badge-circle badge-primary mr-3">
                                <span className="ti-check"></span>
                              </div>
                            </div>
                            <div>
                              <p className="mb-0">Researched User Journeys</p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="badge badge-circle badge-primary mr-3">
                                <span className="ti-check"></span>
                              </div>
                            </div>
                            <div>
                              <p className="mb-0">Easy to Navigate</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="tab6-2">
                      <div className="single-feature">
                        <div className="d-flex align-items-center mb-2">
                          <span className="ti-loop rounded mr-3 icon icon-color-1"></span>
                          <h5 className="mb-0">Continuous Updates</h5>
                        </div>
                        <p>
                          Making the app faster and more efficient. We can
                          handle making sure the technical side is all good to
                          go so that you and the customers can make reservations
                        </p>
                      </div>
                      <div className="single-feature mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <span className="ti-layers rounded mr-3 icon icon-color-2"></span>
                          <h5 className="mb-0">New Features</h5>
                        </div>
                        <p>
                          We are always looking to add new features so you can
                          do more and provide more.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab6-3">
                      <div className="row">
                        <div className="col single-feature mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <span className="ti-stats-up rounded mr-3 icon icon-color-2"></span>
                            <h5 className="mb-0">Growth </h5>
                          </div>
                          <p>
                            Auto scaling to be able to handle even if the number
                            of your reservation goes up.
                          </p>
                        </div>
                        <div className="col single-feature mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <span className="ti-lock rounded mr-3 icon icon-color-3"></span>
                            <h5 className="mb-0">Secure & Dependability</h5>
                          </div>
                          <p>
                            We use AWS which creates backups and has Amazon
                            level of security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
