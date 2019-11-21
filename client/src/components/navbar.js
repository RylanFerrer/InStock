import React, { Component } from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="head">
      <div className="head-div">
        <div className="head-container">
          <Link to="/">
            <img className="head__image" src={Logo} alt="Instock Logo" />
          </Link>
        </div>
        <nav className="nav-container">
          <Link to="/">
            <a className="head__nav" href="#">
              Inventory
            </a>
          </Link>

          <Link to="/Locations">
            <a className="head__nav" href="#">
              Locations
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
