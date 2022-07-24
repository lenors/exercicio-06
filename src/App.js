import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: 1,
  };

  Add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1,
      });
    }
  };

  remove = () => {
    this.setState({
      numero: this.state.numero - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <p>{this.state.numero}</p>
        <button onClick={this.Add}>+1</button>
        <button onClick={this.remove}>remove 1</button>
      </div>
    );
  }
}
