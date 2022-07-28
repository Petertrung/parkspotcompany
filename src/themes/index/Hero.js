export default function Hero() {
  return (
    <>
      <section className="hero-section hero-section-2 ptb-100">
        <div className="circles">
          <div className="point animated-point-1"></div>
          <div className="point animated-point-2"></div>
          <div className="point animated-point-3"></div>
          <div className="point animated-point-4"></div>
          <div className="point animated-point-5"></div>
          <div className="point animated-point-6"></div>
          <div className="point animated-point-7"></div>
          <div className="point animated-point-8"></div>
          <div className="point animated-point-9"></div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="hero-content-left ptb-100 text-white">
                <h1 className="text-white font-weight-bold">Park Spot</h1>
                <p className="lead">
                  Make the reservation process easier. Add more options and
                  devices to rent from.
                </p>

                <a href="#contact" className="btn app-store-btn">
                  Contact us
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="hero-animation-img">
                <img
                  className="img-fluid d-block animation-one"
                  src="assets/img/hero-animation-04.svg"
                  alt="animation "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
