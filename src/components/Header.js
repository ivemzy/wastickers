import React from "react";
import "./Header.css"; // Import the custom CSS file

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="/">
        <img
          src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png"
          width="100px"
          className="d-inline-block align-top"
          alt="WhatsApp logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.naijazone.co">
              Entertainment
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
