import React from 'react'
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          Members-Only
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Posts</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "font-bold" : "")}>Log In</NavLink>
          <NavLink to="signup" className="btn ml-1">
            Sign Up
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar