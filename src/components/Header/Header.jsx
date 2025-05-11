import React from "react";
import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/register">
          Register
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
