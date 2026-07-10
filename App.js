import Navegation from "./src/navigation/Navegation.js"
import { Provider } from 'react-redux';
import { store } from "./src/store/Index.js";
import React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <Navegation />
    </Provider>
  );
}