import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/contextProvider";
function UserOnlyRoute({ children }) {
  const { user } = useAuth();
  if (!user || user.role != "user") {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default UserOnlyRoute;
