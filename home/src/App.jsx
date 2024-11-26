import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Home from "./Home";

const App = () => <Home />;

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
