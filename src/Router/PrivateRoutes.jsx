import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../MyContext/AuthProvider";

const PrivateRoutes = ({ children }) => {
   const { userInfo, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return;
   }
   if (userInfo) {
      return children;
   }
   return <Navigate to="/login" state={{ prevUrl: location.pathname }} />;
};

export default PrivateRoutes;
