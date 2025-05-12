import React from 'react'
import { NavLink } from 'react-router-dom'
import { setActiveClass } from '../AppBar/AppBar'

const Navigation = () => {
  return (
    <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
  )
}

export default Navigation