import React, { StrictMode } from "react";
import Router from "./route/routes";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";

import { NavBar } from "./shared";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement: HTMLElement | null = document.getElementById("root");

const renderApp = (element: HTMLElement) => {
  const root = createRoot(element);

  root.render(
    <CookiesProvider>
      <StrictMode>
        <div className="App">
          <NavBar />
          <div className="margin-top-navbar-height">
            <Router />
          </div>
        </div>
      </StrictMode>
    </CookiesProvider>,
  );
};

if (rootElement) {
  renderApp(rootElement);
} else {
  console.error("Element with id 'root' not found in the document.");
}
