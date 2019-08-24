import React from "react";
import "./header.css";
import HeaderChild3 from './HeaderChild3';
import HeaderChild2 from './HeaderChild2';
import HeaderChild1 from './HeaderChild1';

function HeaderComponent() {
  return (
    <header>
      <div className="mainHeader">
        <HeaderChild1/>
        <HeaderChild2/>
      </div>
      <HeaderChild3/>
    </header>
  );
}
export default HeaderComponent;
