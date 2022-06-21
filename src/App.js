import React from "react";
import Form from "./Form";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Form />
      </Provider>
    </div>
  );
};

export default App;
