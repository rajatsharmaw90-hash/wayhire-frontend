import React from "react";
import images from "../data/images";

function Footer() {
  return (

      <div className="container-fluid" id="footer">
        <button className="top-btn"
              onClick={() => {
                document.getElementById("navbar").scrollIntoView({
                  behavior: "smooth",
                });
              }}>Back to Top</button>
        <div className="row">
          <div className="col-lg-4">
            <a class="footer-brand" href="#">
              <img
                src={images.footer}
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-4" id="footer-content">
            <p>
                info@mywayhire.com
            </p>
            <p>www.mywayhire.com</p>
          </div>

          <div className="col-lg-4" id="footer-content">
            <ul>
                <h5>Services</h5>
                <li>Staffing & Recruiting</li>
                <li>Lumping Services</li>
                <li>Direct Placements</li>
                <li>Machine Operators</li>
            </ul>
          </div>
        </div>
      </div>
   
  );
}

export default Footer;
