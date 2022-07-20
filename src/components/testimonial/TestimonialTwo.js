import React from "react";

export default function TestimonialTwo({ hasBg, user }) {
  return (
    <>
      {user.companies ? (
        <section
          className={`testimonial-section ptb-100 ${
            hasBg ? "gray-light-bg " : ""
          }`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-12">
                <div className="section-heading mb-5">
                  {hasBg ? (
                    <span className="text-uppercase color-secondary sub-title">
                      Our Trusted Clients
                    </span>
                  ) : (
                    ""
                  )}
                  <h2>Former Companies</h2>
                  {/* <p className="lead">
                  Rapidiously morph transparent internal or "organic" sources
                  whereas resource sucking e-business. Conveniently innovate
                  compelling internal.
                </p> */}

                  <div className="client-section-wrap d-flex flex-row align-items-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          src="/assets/img/shield.png"
                          width="170"
                          alt="client"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="/assets/img/columbiabank.png"
                          width="160"
                          alt="client"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src="/assets/img/3.svg"
                          width="85"
                          alt="client"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
