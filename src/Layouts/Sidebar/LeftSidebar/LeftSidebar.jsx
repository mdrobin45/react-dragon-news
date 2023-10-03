import AllCategoryList from "../../../Components/Sidebar/LeftSidebar/AllCategoryList";
import BreakingNews from "../../../Components/Sidebar/LeftSidebar/BreakingNews/BreakingNews";

const LeftSidebar = () => {
   return (
      <div className="sticky top-0">
         <AllCategoryList />
         <BreakingNews />
      </div>
   );
};

export default LeftSidebar;
