import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Members-Only</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Posts</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Log In</a>
          </li>
          <a className="btn">Sign Up</a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar