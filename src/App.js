import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import background from "./images/bcg.jpg";

class App extends Component {
  state = {
    count: 0,
    array: [],
  };

  countHandler(change = 0) {
    const { array, count } = this.state;
    let countChanged = count + change;

    this.setState({
      count: countChanged,
      array: [...array, countChanged],
    });
  }

  handleReset = () => {
    this.setState({ count: 0, array: [] });
  };

  handleIncrement = () => {
    this.countHandler(1);
  };
  handleDecrement = () => {
    this.countHandler(-1);
  };

  getList() {
    const { array } = this.state;
    return array.map((item, index) => <li key={index}>{item}</li>);
  }

  render() {
    const { count } = this.state;

    return (
      <div
        className="bg-dim full-bg-size"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="counter">
          <h1>Counter App</h1>
          <h2>{count}</h2>
          <div className="buttons">
            <Button onClick={this.handleIncrement} title="+" />
            <Button onClick={this.handleDecrement} title="-" />
            <Button id="reset" onClick={this.handleReset} title="Reset" />
          </div>
          <div className="list">
            <ul>{this.getList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
