import { Outlet, useLocation } from "react-router-dom";
import NewsFeed from "../../Components/Pages/Home/NewsFeed";
import LeftSidebar from "../../Layouts/Sidebar/LeftSidebar/LeftSidebar";

const Home = () => {
   const { pathname } = useLocation();
   return (
      <section className="flex justify-between mt-7">
         <div className=" w-1/6 p-2">
            <LeftSidebar />
         </div>
         <div className=" w-2/3 p-2">
            {pathname === "/" ? <NewsFeed /> : <Outlet />}
         </div>
         <div className=" w-1/6 h-80"></div>
      </section>
   );
};

export default Home;
