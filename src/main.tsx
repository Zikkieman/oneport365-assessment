import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ParameterProvider } from "./context/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParameterProvider>
      <App />
    </ParameterProvider>
  </React.StrictMode>
);
