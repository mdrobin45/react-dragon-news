import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DisplayError from "../../Components/Pages/Login/FormFields/DisplayError";
import Email from "../../Components/Pages/Login/FormFields/Email";
import Password from "../../Components/Pages/Login/FormFields/Password";
import SubmitBtn from "../../Components/Pages/Login/FormFields/SubmitBtn";
import FormFooter from "../../Components/Pages/Login/FormFooter/FormFooter";
import FormHeader from "../../Components/Pages/Login/FormHeader/FormHeader";
import { AuthContext } from "../../MyContext/AuthProvider";

const Login = () => {
   const [displayErrorMessage, setDisplayErrorMessage] = useState();
   const { emailPasswordSignIn } = useContext(AuthContext);
   const navigate = useNavigate();

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      emailPasswordSignIn(email, password)
         .then((result) => {
            if (result.user) {
               setDisplayErrorMessage("");
               navigate("/");
            }
         })
         .catch((err) => setDisplayErrorMessage(err.message));
   };

   return (
      <div className="flex flex-col items-center justify-center px-16 py-16">
         <div className="relative pb-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <FormHeader heading="Login" />
            <form onSubmit={handleFormSubmit}>
               <div className="flex flex-col gap-4 p-6">
                  <Email />
                  <Password />
                  <div className="-ml-2.5">
                     <Link
                        to="/reset-password"
                        className="ml-1 mb-3 block font-sans text-sm font-bold leading-normal text-red-700 antialiased">
                        Forgotten Password?
                     </Link>
                     <DisplayError errMsg={displayErrorMessage} />
                     <SubmitBtn btnText="Login" />
                  </div>
               </div>
            </form>
            <FormFooter
               linkComment="Don't have an account?"
               linkText="Create a new account"
               linkUrl="/register"
            />
         </div>
      </div>
   );
};

export default Login;
