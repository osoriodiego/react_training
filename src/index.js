import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// import "./index.css";
import 'bulma/css/bulma.css'
import App from "./app/App";

import { Provider } from "react-redux";

import storeConfiguration from './app/redux/storeConfiguration';
const store = storeConfiguration()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
