import { Outlet } from "react-router-dom";
import MarqueeTitle from "../Components/Header/Marquee/Marquee";
import Header from "../Layouts/Header/Header";
import Topbar from "../Layouts/Topbar/Topbar";

const Root = () => {
   return (
      <div className="container">
         <Topbar />
         <MarqueeTitle />
         <Header />
         <Outlet />
      </div>
   );
};

export default Root;
