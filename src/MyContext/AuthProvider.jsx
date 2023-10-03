import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
   const googleAuthProvider = new GoogleAuthProvider();

   // Email password sign up
   const emailPasswordSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Email password sign in
   const emailPasswordSignIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   // Google sign In
   const googleSignIn = () => {
      return signInWithPopup(auth, googleAuthProvider);
   };

   const authInfo = { googleSignIn, emailPasswordSignUp, emailPasswordSignIn };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
