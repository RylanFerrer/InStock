import React, { Component } from "react";
import Logo from "../assets/Logo/Logo-instock.svg";

export default function Navbar() {
  return (
    <header>
      <div className="header-logo">
        <a href="index.html">
          <img className="header__image" src={Logo} alt="Instock Logo" />
        </a>
      </div>
      <nav className="nav-container">
        <a className="header__nav" href="#">
          Inventory
        </a>
        <a className="header__nav" href="#">
          Locations
        </a>
      </nav>
    </header>
  );
}
