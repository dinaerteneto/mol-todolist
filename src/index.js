import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import App from "./App";

import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <App />
  </Provider>,
  rootElement
);
