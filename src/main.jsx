import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FolderProvider from "./contexts/FolderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FolderProvider>
      <App />
    </FolderProvider>
  </React.StrictMode>
);
