import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Cart from "./components/cart/Cart";
import cartReducer from "./components/cart/CartReducer";
import "./App.css";

const store = createStore(cartReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1 className="heading">Your Cart</h1>
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
