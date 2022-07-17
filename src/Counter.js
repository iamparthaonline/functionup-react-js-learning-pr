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

  showTypeOfCount() {
    if (this.state.count % 2 === 0) {
      return <span id="even"> Even</span>;
    } else {
      return <span id="odd"> Odd</span>;
    }
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

        <div className="count-type">
          {/* {this.state.count % 2 === 1 && <span>Odd</span>}
          {this.state.count % 2 === 0 && <span>Even</span>} */}

          {/* {this.state.count % 2 === 0 ? (
            <span> Even </span>
          ) : (
            <span> Odd </span>
          )} */}

          {/* {this.showTypeOfCount()} */}

          <span
            style={{
              display: this.state.count % 2 === 0 ? "inline" : "none",
            }}
          >
            Even
          </span>

          <span
            style={{
              display: this.state.count % 2 === 1 ? "inline" : "none",
            }}
          >
            Odd
          </span>
        </div>
      </div>
    );
  }
}

export default Counter;
