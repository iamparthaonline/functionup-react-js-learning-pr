import React from "react";

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: +new Date(),
      phone: 911,
    };
  }

  sum(a, b) {
    this.setState({ phone: 111, today: 1 });
    return a + b;
  }

  render() {
    return (
      <>
        <div className="cats-container">
          Cats - {this.state.today} {this.props.name}{" "}
        </div>
        <div className="cats-container">
          Cats - {this.state.today} {this.props.name}{" "}
        </div>
      </>
    );
  }
}

export default Cats;
