import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RegisterCtxProvider } from "./context/RegisterCtx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RegisterCtxProvider>
    <App />
  </RegisterCtxProvider>
);
