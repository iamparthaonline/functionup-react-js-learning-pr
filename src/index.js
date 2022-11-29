import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Radeon2 from "./pages/radeon2";
import "./index.css";

import Payment from "./pages/paymentPage";
import Product from "./pages/productPage";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import CryptoCurrencyList from "./pages/cryptoCurrencyList";
import FormComponent from "./pages/form/";
import Cats from "./pages/Cats";
import WrapperComponent from "./pages/WrapperComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <WrapperComponent />
  </div>
);
