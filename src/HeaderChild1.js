import React from "react";
import logo from "./logo.png";
import image from "./house.jpg";
import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

function HeaderChild1() {
    return( 
        <Fragment> 
        <img src={image} className="headerImage" alt="image" />
        <img src={logo} className="headerLogo" alt="logo" />
        </Fragment>  
    );
}
export default HeaderChild1;