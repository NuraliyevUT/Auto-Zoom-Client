import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App.jsx";
import "./index.css";
import { BrandProvider } from "./context/BrandContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { CarsProvider } from "./context/CarsContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <BrandProvider>
          <CategoryProvider>
            <CarsProvider>
              <App />
            </CarsProvider>
          </CategoryProvider>
        </BrandProvider>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
