import React from "react";
class HeadingComponentUsingClass extends React.Component {
  constructor() {
    super();
    console.log("Hello from Constructor");
    this.state = {
      a: 2,
      b: 1,
    };
  }
  componentDidMount() {
    console.log("Hello from didMount");
    this.updateVariableValue();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  updateVariableValue() {
    console.log("Value is being updated");
    setTimeout(() => {
      this.setState(
        {
          a: this.state.a + 1,
        },
        () => {
          console.log("Value updated successfully");
        }
      );
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Class Component - {this.props.title} </h1> <br />{" "}
        <p>Value - {this.state.a} </p>
      </div>
    );
  }
}

export default HeadingComponentUsingClass;
