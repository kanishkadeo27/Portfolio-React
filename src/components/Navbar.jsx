import React, { useState } from "react";
import { links } from "../data";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav__link active-nav" : "nav__link"
                }
                onClick={closeMenu} // Close menu when clicking a link
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
