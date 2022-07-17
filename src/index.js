import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function component
const HeadingComponent = (props) => {
  return <h1>{props.title}</h1>;
};

class HeadingComponentUsingClass extends React.Component {
  render() {
    return <h1>Class Component - {this.props.title} </h1>;
  }
}

const CurrentTIme = () => {
  return (
    <p>
      {" "}
      {+new Date()} --
      <HeadingComponentUsingClass title=" passed from currenttime" />{" "}
    </p>
  );
};

setInterval(() => {
  root.render(
    <React.StrictMode>
      <HeadingComponent title="Hello from COmponent" count="2" />
      <CurrentTIme />
    </React.StrictMode>
  );
}, 1000);
