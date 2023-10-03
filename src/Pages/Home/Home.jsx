import { Outlet, useLocation } from "react-router-dom";
import NewsFeed from "../../Components/Pages/Home/NewsFeed";
import LeftSidebar from "../../Layouts/Sidebar/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Layouts/Sidebar/RightSidebar/RightSidebar";

const Home = () => {
   const { pathname } = useLocation();
   return (
      <section className="flex justify-between mt-7">
         <div className=" w-1/4 p-2">
            <LeftSidebar />
         </div>
         <div className=" w-1/2 p-2">
            {pathname === "/" ? <NewsFeed /> : <Outlet />}
         </div>
         <div className=" w-1/4 p-2">
            <RightSidebar />
         </div>
      </section>
   );
};

export default Home;
