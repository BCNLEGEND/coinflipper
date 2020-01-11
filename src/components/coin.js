import React, { Component } from "react";
import "./coin.css";

class Coin extends Component {
  render() {
    return (
      <img
        className="coin"
        src={`https://tinyurl.com/react-coin-${this.props.src}-jpg`}
        alt={this.props.src}
      />
    );
  }
}

export default Coin;
