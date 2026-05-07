import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="hero-container" id="navbar">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid" id="navbar">
          <a class="navbar-brand" href="#">
            <img
              src="./src/assets/images/wayhirebg.png"
              alt=""
              className="img-fluid"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="contianer-fluid" id="hero-section">
        <div className="row">
          <div className="col-lg-6 hero-left">
            <h1>Operations-Driven</h1>
            <h1>Staffing Solutions</h1>

            <h4>
              More than staffing - we support your operation, reduce waste, and
              deliver reliable labour that keeps your business moving.
            </h4>

            <p className="hero-left-h5">
              Built for Manufacturing, Warehousing & Production
            </p>

            <button
              className="contact-btn"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Us{" "}
              <span className="arrow">
                <i class="fa-solid fa-arrow-down"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
