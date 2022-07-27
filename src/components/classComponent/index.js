import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Component is loaded");
  }
  handleClick() {
    console.log("hello");
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidMount() {
    console.log("Component is shown");
  }
  componentDidUpdate() {
    console.log("Component just got updated");
  }

  render() {
    const { label } = this.props;
    const { count } = this.state;
    return (
      <h1 onClick={() => this.handleClick()}>
        {label} - {count}
      </h1>
    );
  }
}

export default ClassComponent;
