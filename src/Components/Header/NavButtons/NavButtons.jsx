import userIcon from "../../../assets/images/user.png";

const NavButtons = () => {
   return (
      <div className="w-1/3 flex justify-end items-center">
         <div>
            <img
               className="w-10 h-10 rounded-full"
               src={userIcon}
               alt="Rounded avatar"
            />
         </div>
         <button
            type="button"
            className="px-4 py-1 ml-3 text-lg font-poppins font-medium text-center text-white bg-primary">
            Login
         </button>
      </div>
   );
};

export default NavButtons;
