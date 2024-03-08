import "./styles.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React from "react";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={router} />)

