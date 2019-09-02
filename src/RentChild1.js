import React, { Component } from "react";

class RentChild1 extends Component {
  render() {
    // "call" or display prop
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.address}</p>
      </div>
    );
  }
}
export default RentChild1;
