import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Not Found Page</h1>
            <p className="mb-5">
              You will return to the main page in 5 seconds
            </p>
            <NavLink to="/">
              <button className="btn btn-primary">Go Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
