import React, { Fragment } from "react";

import HeaderComponent from "./HeaderComponent";
import "./App.css";
import HomeComponent from "./HomeComponent";
import FooterComponent from "./FooterComponent";
import BuyComponent from "./BuyComponent";
import RentComponent from "./RentComponent";
import SellComponent from "./SellComponent";
import AboutComponent from "./AboutComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/buy" exact component={BuyComponent} />
            <Route path="/rent" exact component={RentComponent} />
            <Route path="/sell" exact component={SellComponent} />
            <Route path="/about" exact component={AboutComponent} />
          </Switch>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
