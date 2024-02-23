import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
// import { MonsterProvider } from "./components/Context";
import React from "react";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={router} />)
  {/* <MonsterProvider>
    {router}
  </MonsterProvider>
</RouterProvider>); */}

