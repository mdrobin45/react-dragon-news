import { Outlet } from "react-router-dom";
import Topbar from "../Layouts/Topbar/Topbar";

const Root = () => {
   return (
      <div className="container">
         <Topbar />
         <Outlet />
      </div>
   );
};

export default Root;
