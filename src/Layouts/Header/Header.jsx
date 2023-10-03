import NavButtons from "../../Components/Header/NavButtons/NavButtons";
import NavLinks from "../../Components/Header/NavLinks/NavLinks";

const Header = () => {
   return (
      <div className="flex items-center justify-between mt-6">
         <div className="w-1/3"></div>
         <NavLinks />
         <NavButtons />
      </div>
   );
};

export default Header;
