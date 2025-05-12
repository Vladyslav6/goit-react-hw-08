import React from "react";
import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {useSelector } from "react-redux";
import { selectIsloggetIn, selectUser } from "../../redux/auth/selectors";

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
export const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar  = () => {
  const isLoggedIn = useSelector(selectIsloggetIn);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation/> 
        {!isLoggedIn && (
          <AuthNav/>
        )}
        
      </nav>
        <UserMenu/>
      
    </header>
  );
};

export default AppBar ;
