import React from "react";
import { NavLink } from "react-router-dom";

function HeaderChild2() {
    return( 
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
    );
}
export default HeaderChild2;