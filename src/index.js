import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import SimpleComponent from "./components/simpleComponent";

import ClassComponent from "./components/classComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <div id="simple-container">
      <SimpleComponent label="Functionup" />
      <SimpleComponent label="Facebook" />
      <SimpleComponent label="Instagram" />
      <SimpleComponent label="tiktok" />
      <SimpleComponent label="youtube" />
    </div>
    <div id="class-container">
      <ClassComponent label="Functionup" />
      {/* <ClassComponent label="Facebook" />
      <ClassComponent label="Instagram" />
      <ClassComponent label="tiktok" />
      <ClassComponent label="youtube" /> */}
    </div>
  </div>
);
