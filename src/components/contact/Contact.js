import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ bgColor }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [alert, setalert] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const sendEmail = async () => {
    if (name && email && message) {
      try {
        emailjs
          .send(
            "service_0bmg4vj",
            "template_dtf0mro",
            {
              name,
              email,
              message,
            },
            "OPe_wxPtmE9yC7IHy"
          )
          .then((res) => {
            setSent(true);
            console.log(res);
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, "5000");
    }
  };

  return (
    <>
      <section
        id="contact"
        className={`contact-us ptb-100 ${bgColor ? "gray-light-bg" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3 message-box d-none">
              <div className="alert alert-danger"></div>
            </div>
            <div className="col-md-5">
              <div className="section-heading">
                <h2>Contact With Us</h2>
                <p>
                  It's very easy to get in touch with us. Just use the contact
                  form to ask any questions you have about the app or to request
                  a demo.
                </p>
              </div>
              <div className="footer-address">
                <h6>
                  <strong>Head Office</strong>
                </h6>
                <p>Seattle, WA</p>
                <ul>
                  <li>
                    <span>Phone: +1 206 265 3633</span>
                  </li>
                  <li>
                    <span>
                      Email :
                      <a href="mailto:nguyen@petertrung.com">
                        nguyen@petertrung.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {sent ? (
              <div className="col-md-7 text-center">
                <h2>
                  Sent <span className="ti-check"></span>
                </h2>
              </div>
            ) : (
              <div className="col-md-7">
                {/* <form
                action="#"
                id="contactForm"
                className="contact-us-form"
                onSubmit={() => {
                  sendEmail();
                }}
              > */}
                <h5>Reach us quickly</h5>
                {alert ? (
                  <p className="form-message">Please fill all Fields</p>
                ) : null}
                <div className="row">
                  <div className="col-sm-12 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter full name"
                        required="required"
                        onChange={(text) => {
                          setName(text.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        defaultValue=""
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        onChange={(text) => {
                          setEmail(text.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="7"
                        cols="25"
                        placeholder="Message"
                        onChange={(text) => {
                          setMessage(text.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className="btn solid-btn"
                      id="btnContactUs"
                      onClick={() => {
                        sendEmail();
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                {/* </form> */}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
