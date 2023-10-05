import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../MyContext/AuthProvider";
import Dropdown from "./Dropdown";

const NavButtons = () => {
   const [expandProfile, setExpandProfile] = useState(false);
   const { userInfo } = useContext(AuthContext);

   // Toggle user profile dropdown
   const handleProfileExpand = () => {
      setExpandProfile(!expandProfile);
   };

   return (
      <div className="relative w-1/3 flex items-center justify-end">
         {userInfo ? (
            <>
               <img
                  onClick={handleProfileExpand}
                  type="button"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                  src={
                     userInfo.photoURL
                        ? userInfo.photoURL
                        : "https://i.ibb.co/238dYyx/userInfo.png"
                  }
                  alt="User"
               />
               <Dropdown expandProfile={expandProfile} />
            </>
         ) : (
            <Link
               to="/login"
               className="px-4 py-1 ml-3 text-lg font-poppins font-medium text-center text-white bg-primary">
               Login
            </Link>
         )}
      </div>
   );
};

export default NavButtons;
