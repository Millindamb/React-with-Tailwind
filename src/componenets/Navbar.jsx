import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">Navbar</Link>

          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>              
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
