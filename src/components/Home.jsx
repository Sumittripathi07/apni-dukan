import React from "react";
import Products from "./Products";
import Scrol from "./Scrol";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg4.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">Welcome to R.N Traders</h5>
            <p className="card-text lead fs-2">
              Checkout all the latest products and services from us.
            </p>
          </div>
        </div>
      </div>
      <Products/>
      <Scrol showBelow={250}/>
    </div>
  );
};

export default Home;
