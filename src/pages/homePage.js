// const HomePage = () => (
//   <div>
//     <h1> Home Page</h1>
//     <div>
//       <a href="/payment">go to payment page</a>
//     </div>
//     <div>
//       <a href="/product">go to product page</a>
//     </div>
//     <div>
//       <a href="/crypto">go to crypto page</a>
//     </div>
//   </div>
// );

/** Functional Component */
import React, { useState, useEffect } from "react";

const FunctionalComponent = (props) => {
  const [x, setX] = useState(1);
  useEffect(() => {
    console.log("Functional Component Useeffect -  Value of X --", x);
  });

  return (
    <div
      style={{
        padding: "40px",
        border: "1px solid #444",
        margin: "20px",
        background: "red",
      }}
    >
      Hello from Functional COmponent -<p> Count -- {x}</p>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        Increase
      </button>
      <div style={{ display: x % 2 === 0 ? "block" : "none" }}>
        <ClassComponent initialCountValue={5} />
      </div>
    </div>
  );
};

/** Class Component */
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCountValue || 1,
    };
    console.log("initialCountValue ---- ", this.props.initialCountValue);
  }

  componentDidMount() {
    console.log("Class component || component mounted");
  }

  componentDidUpdate() {
    console.log("Class component || updated");
  }

  componentWillUnmount() {
    console.log("Class component || unmounted");
  }

  render() {
    let c = 5;
    return (
      <div
        style={{
          padding: "40px",
          border: "1px solid #444",
          margin: "20px",
          backgroundColor: "green",
        }}
      >
        Hello from Class Component
        <p>Count - {this.state.count}</p>
        <button
          onClick={() => {
            this.setState(
              {
                count: this.state.count + 1,
              },
              () => {
                console.log(
                  "Class component state change || count -- ",
                  this.state.count
                );
              }
            );
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default FunctionalComponent;
