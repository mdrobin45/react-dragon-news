import { NavLink } from "react-router-dom";
import "./active.css";

const NavLinks = () => {
   return (
      <nav className="w-1/3">
         <ul className="flex items-center justify-center gap-3">
            <li className="text-md font-normal text-secondary font-poppins leading-medium">
               <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-md font-normal text-secondary font-poppins leading-medium">
               <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-md font-normal text-secondary font-poppins leading-medium">
               <NavLink to="/career">Career</NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default NavLinks;
