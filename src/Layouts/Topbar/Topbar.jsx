import moment from "moment/moment";
import logo from "../../assets/images/logo.png";

const Topbar = () => {
   return (
      <div className="text-center mx-auto py-4">
         <img className="mx-auto my-3" src={logo} alt="The Dragon News" />
         <p className="leading-medium text-secondary font-poppins font-normal text-md">
            Journalism Without Fear or Favour
         </p>
         <p className="font-poppins text-primary font-medium text-md leading-medium">
            {moment().format("dddd")},{" "}
            <span className="text-secondary">{moment().format("LL")}</span>
         </p>
      </div>
   );
};

export default Topbar;
