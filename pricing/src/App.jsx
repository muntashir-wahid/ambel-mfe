import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const App = () => (
  <div className="mt-5 text-3xl mx-auto max-w-6xl">
    <h1 className="text-4xl text-current">Hello from the pricing app.</h1>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
