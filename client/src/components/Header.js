import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
              <div className="container-fluid ">
                <Link className="navbar-brand" href="#">
                  Ecommerce
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() =>
                    setShow((prev) => (prev === true ? true : false))
                  }
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${show ? "show" : ""}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link active"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/policy" className="nav-link">
                        Policy
                      </Link>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
