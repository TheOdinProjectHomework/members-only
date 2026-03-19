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
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1 items-center w-full justify-end gap-4">
          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Posts
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Profile
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Log In
          </NavLink>
          <NavLink to="/signup" className="btn ml-1">
            Sign Up
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar