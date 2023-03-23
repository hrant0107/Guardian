import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import { App } from "./App";
import { ErrorBoundaryFallback } from "./components/core/ErrorBoundaryFallback/ErrorBoundaryFallback";
import { ScreenSizesContextProvider } from "./context/ScreenSizes/ScreenSizes";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <ScreenSizesContextProvider>
        <App />
      </ScreenSizesContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
