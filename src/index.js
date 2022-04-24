import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import App from "./App";
import { initializeContract } from "./utils/near";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);

window.nearInitPromise = initializeContract()
  .then(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.error);
