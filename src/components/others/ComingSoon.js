import React from "react";

export default function ComingSoon() {
  return (
    <>
      <section
        class="hero-section ptb-100 background-img full-screen"
        style={{
          background:
            "url('assets/img/app-hero-bg.jpg')no-repeat center center / cover",
        }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-9 col-lg-7">
              <div class="hero-content-left text-white text-center">
                <h1 class="text-white">We're Coming Soon</h1>
                <p class="lead">
                  Our website is under construction. We'll be here soon with our
                  new awesome site, subscribe to be notified.
                </p>

                <div id="clock" class="countdown-wrap my-5">
                  <div class="row">
                    <div class="col">
                      <h2 class="mb-1">16</h2>
                      <h5>Days</h5>
                    </div>
                    <div class="col">
                      <h2 class="mb-1">12</h2>
                      <h5>Hours</h5>
                    </div>
                    <div class="col">
                      <h2 class="mb-1">13</h2>
                      <h5>Minutes</h5>
                    </div>
                    <div class="col">
                      <h2 class="mb-1">04</h2>
                      <h5>Seconds</h5>
                    </div>
                  </div>
                </div>

                <form
                  action="#"
                  method="post"
                  class="subscribe-form text-center m-auto"
                >
                  <div class="d-flex align-items-center">
                    <input
                      type="text"
                      class="form-control input"
                      id="email"
                      name="email"
                      placeholder="info@yourdomain.com"
                    />
                    <input
                      type="submit"
                      class="button btn solid-btn"
                      id="submit"
                      value="Subscribe"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
