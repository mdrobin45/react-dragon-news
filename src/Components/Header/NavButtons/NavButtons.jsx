import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../MyContext/AuthProvider";

const NavButtons = () => {
   const [expandProfile, setExpandProfile] = useState(false);
   const { userInfo, sendVerificationLink, logOut } = useContext(AuthContext);

   const { email, photoURL, displayName, emailVerified } = userInfo;
   // Toggle user profile dropdown
   const handleProfileExpand = () => {
      setExpandProfile(!expandProfile);
   };

   // Send email verification link
   const handleSendVerificationLink = () => {
      sendVerificationLink().then(() => {
         alert("Email verification sent!");
      });
   };

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         alert("You are logged out!");
      });
   };
   return (
      <div className="relative">
         {photoURL ? (
            <img
               onClick={handleProfileExpand}
               type="button"
               className="w-10 h-10 rounded-full border cursor-pointer"
               src={photoURL ? photoURL : "https://i.ibb.co/238dYyx/user.png"}
               alt="User"
            />
         ) : (
            <Link
               to="/login"
               className="px-4 py-1 ml-3 text-lg font-poppins font-medium text-center text-white bg-primary">
               Login
            </Link>
         )}

         <div
            className={`z-10 ${
               !expandProfile ? "hidden" : ""
            } absolute top-12 right-0 bg-primary divide-y divide-gray-500 rounded-lg shadow w-44`}>
            <div className="px-4 py-3 text-sm text-white font-normal">
               <div>{displayName ? displayName : "No name"}</div>
               <div className=" font-normal truncate">
                  {email ? email : "email not found"}
               </div>
               {emailVerified ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                     Verified
                  </span>
               ) : (
                  <span
                     onClick={handleSendVerificationLink}
                     className="bg-red-100 cursor-pointer text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                     Click here to verify
                  </span>
               )}
            </div>
            <ul
               className="py-2 text-sm text-white font-normal"
               aria-labelledby="avatarButton">
               <li>
                  <Link
                     to="/dashboard"
                     className="block px-4 py-2 hover:bg-gray-600">
                     Bookmarks
                  </Link>
               </li>
               <li>
                  <Link
                     to="/profile"
                     className="block px-4 py-2 hover:bg-gray-600">
                     Profile
                  </Link>
               </li>
            </ul>
            <div className="py-1">
               <button
                  onClick={handleLogOut}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600">
                  Sign out
               </button>
            </div>
         </div>
      </div>
   );
};

export default NavButtons;
