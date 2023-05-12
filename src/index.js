import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { render } from "react-dom";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Radeon2 from "./pages/radeon2";
import "./index.css";
import store from "./store";
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
import Header from "./components/reduxCounter";
import DogsList from "./pages/DogsList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <div>
      <h1> Common Area for all routes </h1>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="dog" element={<DogsList />} />
          <Route path="signup" element={<RegisterForm />} />
          <Route path="login/:id/:name" element={<LoginForm />} />
          <Route path="crypto" element={<CryptoCurrencyList />} />
          <Route
            path="/"
            element={
              <div>
                <h2>Home</h2>
                <div>
                  <Link to="signup"> Sign Up </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
);
