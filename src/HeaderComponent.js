import React from "react";
import "./header.css";
import logo from "./logo.png";
import image from "./house.jpg";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <header>
      <div className="mainHeader">
        <img src={image} className="headerImage" alt="image" />
        <img src={logo} className="headerLogo" alt="logo" />
        <ul>
          <li>
            <NavLink to="/buy" exact active className="active">
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink to="/rent" exact active className="active">
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink to="/sell" exact active className="active">
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact active className="active">
              About
            </NavLink>
          </li>
          <li>Contact</li>
          <li className="login">Login</li>
        </ul>
      </div>
      <div className="headerFooter">
        <p>WHAT ARE YOU LOKKING FOR?</p>
        <button>Button</button>
      </div>
    </header>
  );
}
export default HeaderComponent;
