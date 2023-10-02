import logo from "../../assets/logo.png";

const Topbar = () => {
   return (
      <div className="text-center mx-auto">
         <img className="mx-auto my-3" src={logo} alt="The Dragon News" />
         <p className="leading-medium text-secondary font-poppins font-normal text-md">
            Journalism Without Fear or Favour
         </p>
         <p className="font-poppins text-primary font-medium text-md leading-medium">
            Sunday, <span className="text-secondary">November 27, 2022</span>
         </p>
      </div>
   );
};

export default Topbar;
