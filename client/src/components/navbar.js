import React from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="head">
      <div className="head-div">
        <div className="head-container">
          <Link className="image-link" to="/">
            <img className="head__image" src={Logo} alt="Instock Logo" />
          </Link>
        </div>
        <nav className="nav-container">
          <Link className="nav-link" to="/">
            Inventory
          </Link>

          <Link className="nav-link" to="/locations">
            Locations
          </Link>
        </nav>
      </div>
    </header>
  );
}
