import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decreaseCounter() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  changeInputValue(value) {
    this.setState({
      count: value,
    });
  }

  render() {
    return (
      <div className="count-component">
        <p>Count - {this.state.count}</p>

        <input
          type="number"
          value={this.state.count}
          onChange={(event) => this.changeInputValue(event.target.value)}
        />

        <button
          onClick={() => {
            this.increaseCounter();
          }}
        >
          + Increase
        </button>
        <button onClick={() => this.decreaseCounter()}> - Decrease </button>
      </div>
    );
  }
}

export default Counter;
