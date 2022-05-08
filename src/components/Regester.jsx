import React from 'react'
import "../Style/regester.css"

const Regester = () => {
  return (
    <>
    <section className="background-radial-gradient overflow-hidden">

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{"zIndex": "10"}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{"color": "hsl(218, 81%, 95%)"}}>
          Get your need<br />
          <span style={{"color": "hsl(218, 81%, 75%)"}}>At your doorstep.</span>
        </h1>
        <p className="mb-4 opacity-70" style={{"color": "hsl(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <div className="text-center">
                <p>or sign up with:</p>
                <div className="footer-icons">
            <a
              href="https://www.facebook.com/sumittripathi07/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/iamSumit076"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-tripathi-932bb31b5/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/sumittripathi07"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Regester