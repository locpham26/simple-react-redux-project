import React from "react";
import "./App.css";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { Switch, Route } from "react-router-dom";
import Products from "./components/products/products";
import Cart from "./components/cart/cart";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </>
    </Provider>
  );
}

export default App;
