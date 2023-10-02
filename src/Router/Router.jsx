import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Root/Root";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/career",
            element: <Career />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
]);

export default router;
