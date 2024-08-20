import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./Components/theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
