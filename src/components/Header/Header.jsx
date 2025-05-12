import React from "react";
import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsloggetIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
const setActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsloggetIn);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={setActiveClass} to="/login">
              Login
            </NavLink>
            <NavLink className={setActiveClass} to="/register">
              Register
            </NavLink>
          </>
        )}

        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
      </nav>

      {isLoggedIn && <h2 className="text-3xl">{user.name}</h2>}
      {isLoggedIn && (
        <>
          <button
            onClick={() => dispatch(logoutThunk())}
            className="btn btn-secondary"
            type="button"
          >
            Logout
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
