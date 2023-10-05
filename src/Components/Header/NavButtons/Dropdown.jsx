import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../MyContext/AuthProvider";

const Dropdown = ({ expandProfile }) => {
   const { userInfo, sendVerificationLink, logOut } = useContext(AuthContext);
   const navigate = useNavigate();
   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         navigate("/");
      });
   };

   // Send email verification link
   const handleSendVerificationLink = () => {
      sendVerificationLink().then(() => {
         alert("Email verification sent!");
      });
   };
   return (
      <div
         className={`z-10 ${
            !expandProfile ? "hidden" : ""
         } absolute top-12 right-0 bg-primary divide-y divide-gray-500 rounded-lg shadow w-44`}>
         <div className="px-4 py-3 text-sm text-white font-normal">
            <div>{userInfo.displayName ? userInfo.displayName : "No name"}</div>
            <div className=" font-normal truncate">
               {userInfo.email ? userInfo.email : "email not found"}
            </div>
            {userInfo.emailVerified ? (
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
   );
};

export default Dropdown;
