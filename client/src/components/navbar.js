import React, { Component } from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img className="header__image" src={Logo} alt="Instock Logo" />
        </Link>
      </div>
      <nav className="nav-container">
        <Link to="/">
          <a className="header__nav" href="#">
            Inventory
          </a>
        </Link>

        <Link to="/Locations">
          <a className="header__nav" href="#">
            Locations
          </a>
        </Link>
      </nav>
    </header>
  );
}
