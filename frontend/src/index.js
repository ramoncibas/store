import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
  <CookiesProvider>
    {/* <StrictMode> */}
      <App />
    {/* </StrictMode> */}
  </CookiesProvider>,
);
