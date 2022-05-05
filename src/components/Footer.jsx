import React from "react";
import "../Style/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            RN<span>Traders</span>
          </h3>

          <p className="footer-company-name">RN Traders &copy; 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>New Hill View Apt. Navrepark</span> Ambernath West, 421501
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>9545916348 , 9503335718</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="##">
                <span
                  className="__cf_email__"
                  data-cfemail="4f3c3a3f3f203d3b0f2c20223f2e2136612c2022"
                >
                  {" "}
                  sumit.tpt07@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Shop</span>
            We sell all types of{" "}
            <b> Stationery Items, Cold Drinks, Ice-Cream, Gift Items</b>
            <br />
            Etc...
          </p>

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
      </footer>
    </div>
  );
};

export default Footer;
