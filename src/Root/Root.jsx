import { Outlet, useLocation } from "react-router-dom";
import MarqueeTitle from "../Components/Header/Marquee/Marquee";
import NewsFeed from "../Components/Pages/Home/NewsFeed";
import Header from "../Layouts/Header/Header";
import LeftSidebar from "../Layouts/Sidebar/LeftSidebar/LeftSidebar";
import RightSidebar from "../Layouts/Sidebar/RightSidebar/RightSidebar";
import Topbar from "../Layouts/Topbar/Topbar";

const Root = () => {
   const { pathname } = useLocation();
   console.log(pathname);
   return (
      <div className="container">
         <Topbar />
         <MarqueeTitle />
         <Header />
         <section className="flex justify-center mt-7">
            {pathname === "/" || pathname.includes("/category") ? (
               <div className=" w-1/4 p-2">
                  <LeftSidebar />
               </div>
            ) : (
               ""
            )}

            <div
               className={
                  pathname === "/" || pathname.includes("/category")
                     ? "w-2/4 p-2"
                     : "w-3/4 p-2"
               }>
               {pathname === "/" ? <NewsFeed /> : <Outlet />}
            </div>

            {pathname === "/login" || pathname === "/register" ? (
               ""
            ) : (
               <div className=" w-1/4 p-2">
                  <RightSidebar />
               </div>
            )}
         </section>
      </div>
   );
};

export default Root;
