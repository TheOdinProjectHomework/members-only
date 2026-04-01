import { NavLink } from 'react-router';

const NavBar = ({ user }) => {
  let links = ["login", "signup" ];
  let links2 = ["posts", "profile"];

  const currentLinks = !user ? links : links2;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          Members-Only
        </NavLink>
      </div>
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1 items-center w-full justify-end gap-4">
          {currentLinks.map((link) => (
                <NavLink
                  to={`/${link}`}
                  key={link}
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  {link}
                </NavLink>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar