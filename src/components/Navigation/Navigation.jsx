import React from 'react'
import { NavLink } from 'react-router-dom'
import { setActiveClass } from '../AppBar/AppBar'
import { selectIsloggetIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsloggetIn);
  return <>
            <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
    {isLoggedIn && (
               <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
              )}
            </>
}

export default Navigation

 