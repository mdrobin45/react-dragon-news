import FindUsOn from "../../../Components/Sidebar/RightSidebar/FindUsOn/FindUsOn";
import Qzone from "../../../Components/Sidebar/RightSidebar/Qzone/Qzone";
import SocialLogin from "../../../Components/Sidebar/RightSidebar/SocialLogin/SocialLogin";

const RightSidebar = () => {
   return (
      <div className="sticky top-0">
         <SocialLogin />
         <FindUsOn />
         <Qzone />
      </div>
   );
};

export default RightSidebar;
