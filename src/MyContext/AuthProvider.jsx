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
   const [userInfo, setUserInfo] = useState(null);
   const [loading, setLoading] = useState(true);
   const googleAuthProvider = new GoogleAuthProvider();
   const githubAuthProvider = new GithubAuthProvider();

   // Email password sign up
   const emailPasswordSignUp = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Email password sign in
   const emailPasswordSignIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Send verification email
   const sendVerificationLink = () => {
      setLoading(true);
      return sendEmailVerification(auth.currentUser);
   };

   // Update profile details
   const profileUpdate = (profileInfo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profileInfo);
   };

   // Google sign In
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleAuthProvider);
   };

   // Github sign in
   const gitHubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubAuthProvider);
   };

   // Sign Out
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      // Get user details
      const unSubscribe = onAuthStateChanged(auth, (user) => {
         setUserInfo(user);
         setLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      userInfo,
      profileUpdate,
      logOut,
      loading,
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
