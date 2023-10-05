import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   sendEmailVerification,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
   const [userInfo, setUserInfo] = useState({});
   const googleAuthProvider = new GoogleAuthProvider();
   const githubAuthProvider = new GithubAuthProvider();

   // Email password sign up
   const emailPasswordSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Email password sign in
   const emailPasswordSignIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Send verification email
   const sendVerificationLink = () => {
      return sendEmailVerification(auth.currentUser);
   };

   // Update profile details
   const profileUpdate = (profileInfo) => {
      return updateProfile(auth.currentUser, profileInfo);
   };

   // Google sign In
   const googleSignIn = () => {
      return signInWithPopup(auth, googleAuthProvider);
   };

   // Github sign in
   const gitHubSignIn = () => {
      return signInWithPopup(auth, githubAuthProvider);
   };

   // Sign Out
   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      // Get user details
      const unSubscribe = onAuthStateChanged(auth, (user) => {
         setUserInfo(user);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      userInfo,
      profileUpdate,
      logOut,
      googleSignIn,
      gitHubSignIn,
      emailPasswordSignUp,
      sendVerificationLink,
      emailPasswordSignIn,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
