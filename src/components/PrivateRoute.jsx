// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("access_token"); // Or use Context
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
