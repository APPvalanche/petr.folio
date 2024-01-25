import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";

import App from "./App";
import "./index.css";

const loadingMarkup = (
  <div className="loadingMarkup">
    <h2 className="head-text">Loading..</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);
