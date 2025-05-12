import React from "react";
import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsloggetIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
export const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar  = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsloggetIn);
 

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <Navigation/> 
        {!isLoggedIn && (
          <AuthNav/>
        )}
        
      </nav>

      {isLoggedIn && <h2 className="text-3xl">{user.name}</h2>}
      {isLoggedIn && (
        <UserMenu/>
      )}
    </header>
  );
};

export default AppBar ;
