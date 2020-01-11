import React, { Component } from "react";
import Coin from "./coin";

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: 0,
      tails: 0,
      flips: 0,
      coin: "heads"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(st => ({ flips: st.flips + 1 }));
    let num = Math.floor(Math.random() * 2) + 1;
    if (num === 1) {
      this.setState(st => ({ heads: st.heads + 1 }));
      this.setState({ coin: "heads" });
    } else {
      this.setState(st => ({ tails: st.tails + 1 }));
      this.setState({ coin: "tails" });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>
        <Coin src={this.state.coin} />
        <button onClick={this.handleClick}>Flip the coin</button>
        <p>
          Out {this.state.flips} flips, there have been {this.state.heads} heads
          and {this.state.tails} tails.
        </p>
      </div>
    );
  }
}

export default Flipper;
