import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import NewsProvider from "./MyContext/NewsProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NewsProvider>
         <RouterProvider router={router} />
      </NewsProvider>
   </React.StrictMode>
);
