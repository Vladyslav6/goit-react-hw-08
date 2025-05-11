import React from "react";

import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsloggetIn } from "../../redux/auth/selectors";

const Login = () => {
  const isLoggedIn = useSelector(selectIsloggetIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
