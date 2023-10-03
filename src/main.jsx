import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./MyContext/AuthProvider.jsx";
import NewsProvider from "./MyContext/NewsProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <NewsProvider>
            <RouterProvider router={router} />
         </NewsProvider>
      </AuthProvider>
   </React.StrictMode>
);
