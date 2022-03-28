import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const userData: any = localStorage.getItem("user");
  const userDataParse = JSON.parse(userData);
  const location = useLocation();

  if (!userDataParse) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
