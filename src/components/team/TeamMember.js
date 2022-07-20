import React from "react";

export default function TeamMember(props) {
  const teamMember = props.user;
  return (
    <>
      <section className="team-single-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-5">
              <div className="team-single-img">
                <img
                  src={teamMember.img}
                  alt="member"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6">
              <div className="team-single-text">
                <div className="team-name mb-4">
                  <h4 className="mb-1">{teamMember.name}</h4>
                  <span>{teamMember.title}</span>
                </div>
                <ul className="team-single-info">
                  <li>
                    <strong>Phone:</strong>
                    <span> {teamMember.phone}</span>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <span> {teamMember.email}</span>
                  </li>
                </ul>
                <div className="text-content mt-20">
                  <p>{teamMember.des}</p>
                </div>
                <ul className="team-social-list list-inline mt-4">
                  {teamMember.socials.map((social, index) => (
                    <li className="list-inline-item" key={index}>
                      <a href={social.link} className="color-primary">
                        <span className={social.icon}></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-6 col-12">
              <div className="section-heading">
                <h5>Activities And Skills</h5>
                <div className="section-heading-line-left"></div>
              </div>
              <ul className="list-unstyled">
                {teamMember.skills.map((skill, index) => (
                  <li className="py-2" key={index}>
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-primary mr-3">
                          <span className="ti-check"></span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">{skill}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="section-heading mt-40">
                <h5>Professional Skills</h5>
                <div className="section-heading-line-left"></div>
              </div>
              <div className="mt-3">
                {teamMember.proSkill.map((skill, index) => (
                  <div className="progress-item" key={index}>
                    <div className="progress-title">
                      <h6>
                        {skill.name}
                        <span className="float-right">
                          <span className="progress-number">{skill.num}</span>%
                        </span>
                      </h6>
                    </div>
                    <div className="progress p-1">
                      <span style={{ width: `${skill.num}%` }}>
                        <span className="progress-line"></span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
