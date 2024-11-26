import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import Home from "./Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // { path: "/pricing", element: <Pricing /> },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
