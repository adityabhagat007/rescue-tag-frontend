import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";


export default function AppContainer() {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}
