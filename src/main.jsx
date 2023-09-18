import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import User from "./contextes/UserData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <User>
      <App />
    </User>
  </React.StrictMode>
);
