import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NavigationProvider } from "./contexts/navigation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
