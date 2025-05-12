import React, { use } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsloggetIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsloggetIn);
  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
