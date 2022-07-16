import React from "react";

export default function Team({ hasTitle, bgColor }) {
  return (
    <>
      <section id="team" className={`team-member-section ptb-100 ${bgColor}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                {hasTitle ? (
                  <span className="text-uppercase color-secondary sub-title">
                    Lovely Team
                  </span>
                ) : (
                  ""
                )}
                <h2>Our Team Members</h2>
                <p className="lead">Meet our amazing leadership team!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src="assets/img/team-1.jpg"
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">Peter Nguyen</h5>
                  <h6>CEO/Founder</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <a href="#/">
                        <span className="ti-youtube"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#/">
                        <span className="ti-twitter"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#/">
                        <span className="ti-github"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src="assets/img/team-2.jpg"
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">Joseph Nguyen</h5>
                  <h6>COO/Develper</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <a href="#/">
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#/">
                        <span className="ti-instagram"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#/">
                        <span className="ti-github"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
