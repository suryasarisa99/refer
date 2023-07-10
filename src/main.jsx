import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fonts/FiraCode-Medium.ttf";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "../context/DataContext";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </>
);
