import React from 'react'
import logo from "./../assets/logo-brand.png";

const NavbarComp = () => {
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          {<img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />}
            {' '}Lombok Trv
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-lg-4 mb-3 mb-lg-0 mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#packages">Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#articles">Articles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>
      	  <button className="primaryBtn mb-3 mb-lg-0">Book Now</button>
        </div>
      </div>
      </nav>
    );
  }
  
  export default NavbarComp;