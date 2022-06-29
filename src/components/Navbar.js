import React from 'react'
import { Link, NavLink } from 'react-router-dom';


 function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}> 
          WikiCountries
        </NavLink>

        <NavLink to="/countries" className={({ isActive }) => isActive ? "selected" : ""}>
          Countries
          </NavLink>
      </ul>
      
    </nav>
  )
}

export default Navbar;