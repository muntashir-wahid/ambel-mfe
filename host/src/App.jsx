import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "home/Home";
import Pricing from "pricing/Pricing";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pricing", element: <Pricing /> },
]);

const App = () => <RouterProvider router={router} />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
