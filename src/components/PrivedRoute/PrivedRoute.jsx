import React, { use } from "react";
import { useSelector } from "react-redux";
import { selectIsloggetIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PrivedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsloggetIn);
  if (!isLoggedIn) {
    // toast.error("You are not logged in");
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivedRoute;
