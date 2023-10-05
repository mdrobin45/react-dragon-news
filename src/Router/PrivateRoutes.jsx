import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../MyContext/AuthProvider";

const PrivateRoutes = ({ children }) => {
   const { userInfo } = useContext(AuthContext);
   const location = useLocation();

   if (!userInfo) {
      return <Navigate to="/login" state={{ prevUrl: location.pathname }} />;
   }
   return children;
};

export default PrivateRoutes;
