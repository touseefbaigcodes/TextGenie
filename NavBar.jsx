import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./Context";

export default function NavBar() {
  const { navdmode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>    <div className="mb-1 w-100 " style={navdmode}>
      <nav className="navbar navbar-expand-lg w-100" >
        <div className="container-fluid ">
          <a className="navbar-brand fw-semibold"  href="#">
            TextGenie
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item" >
                <Link to="/" className="nav-link active fw-medium" aria-current="page">
                
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fw-medium text-dark" >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link fw-medium text-dark" >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-medium text-dark" >
                  Contact Us
                </Link>
              </li>
            </ul>
           
           
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
    </div>
    </>

  );
}
