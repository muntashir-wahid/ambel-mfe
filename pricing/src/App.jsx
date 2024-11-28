import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "./index.scss";

import Pricing from "./Pricing";

const router = createBrowserRouter([
  { path: "/pricing", element: <Pricing /> },
  {
    path: "*",
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-4xl font-semibold mb-4">
            Page Not Found
          </h2>
          <Link
            to="/pricing"
            className="px-6 py-4 bg-[#19525A] rounded-2xl text-white"
          >
            Pricing Page
          </Link>
        </div>
      </div>
    ),
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Pricing />
    </RouterProvider>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
