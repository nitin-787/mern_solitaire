import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // temporarily wrapping App in StrictMode to find potential problems
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
