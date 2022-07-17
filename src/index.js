import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import HeadingComponentFunctional from "./HeadingComponentFunctional.js";
import HeadingComponentUsingClass from "./HeadingComponentUsingClass";
import "./index.css";
import Counter from "./Counter";
import List from "./List";
import FormComponent from "./Form";
const root = ReactDOM.createRoot(document.getElementById("root"));

const CurrentTIme = () => {
  return (
    <p>
      {" "}
      {+new Date()} --
      <HeadingComponentUsingClass title=" passed from currenttime" />{" "}
    </p>
  );
};

root.render(
  <React.StrictMode>
    <FormComponent />
    <HeadingComponentFunctional title="Hello from COmponent" count="2" />
    <CurrentTIme />
    <Counter />
    <List />
  </React.StrictMode>
);
