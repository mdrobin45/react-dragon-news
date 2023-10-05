import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayError from "../../Components/Pages/Login/FormFields/DisplayError";
import Email from "../../Components/Pages/Login/FormFields/Email";
import Name from "../../Components/Pages/Login/FormFields/Name";
import Password from "../../Components/Pages/Login/FormFields/Password";
import PhotoUrl from "../../Components/Pages/Login/FormFields/PhotoUrl";
import SubmitBtn from "../../Components/Pages/Login/FormFields/SubmitBtn";
import TOS from "../../Components/Pages/Login/FormFields/TOS";
import FormFooter from "../../Components/Pages/Login/FormFooter/FormFooter";
import FormHeader from "../../Components/Pages/Login/FormHeader/FormHeader";
import { AuthContext } from "../../MyContext/AuthProvider";
import { formValidation } from "./Validation";

const Register = () => {
   const [displayErrorMessage, setDisplayErrorMessage] = useState("");
   const { emailPasswordSignUp, profileUpdate } = useContext(AuthContext);
   const navigate = useNavigate();

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const photoUrl = e.target.photoUrl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const tos = e.target.checkbox.checked;

      // Form validation
      const error = formValidation(name, photoUrl, email, password, tos);
      if (error) {
         setDisplayErrorMessage(error);
         return;
      }

      emailPasswordSignUp(email, password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: name,
                  photoURL: photoUrl,
               });
               setDisplayErrorMessage("");
               navigate("/");
            }
         })
         .catch((err) => setDisplayErrorMessage(err.message));
   };
   return (
      <div className="flex flex-col items-center justify-center px-16 py-16">
         <div className="relative pb-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <FormHeader heading="Create New Account" />
            <form onSubmit={handleFormSubmit}>
               <div className="flex flex-col gap-4 p-6">
                  <Name />
                  <PhotoUrl />
                  <Email />
                  <Password />
                  <TOS />
                  <SubmitBtn btnText="Register" />
                  <DisplayError errMsg={displayErrorMessage} />
               </div>
            </form>
            <FormFooter
               linkComment="Already have an account?"
               linkUrl="/login"
               linkText="Login"
            />
         </div>
      </div>
   );
};

export default Register;
