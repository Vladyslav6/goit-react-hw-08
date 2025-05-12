import clsx from 'clsx';
import React from 'react'
import css from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import { setActiveClass } from '../AppBar/AppBar';

const AuthNav = () => {
  return (
     <>
            <NavLink className={setActiveClass} to="/login">
              Login
            </NavLink>
            <NavLink className={setActiveClass} to="/register">
              Register
            </NavLink>
          </>
  )
}

export default AuthNav