import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../MyContext/AuthProvider";

const GoogleSignIn = ({ setErrorMsg }) => {
   const { googleSignIn } = useContext(AuthContext);
   const navigate = useNavigate();

   // Handle signIn with google
   const handleGoogleSignIn = () => {
      googleSignIn()
         .then((result) => {
            if (result) {
               navigate("/");
            }
         })
         .catch((error) => {
            setErrorMsg(error.message);
         });
   };

   return (
      <button
         onClick={handleGoogleSignIn}
         className="px-4 w-4/5 justify-center mx-auto py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
         <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
         />
         <span>Login with Google</span>
      </button>
   );
};

export default GoogleSignIn;
