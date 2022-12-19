import React from "react";
import ReactDOM from "react-dom/client";

import { render } from "react-dom";

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

import RegisterForm from "./pages/registerForm";
import LoginForm from "./pages/loginForm";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1> Hello from react root</h1>
    <RegisterForm />
    <LoginForm />
  </div>
);
