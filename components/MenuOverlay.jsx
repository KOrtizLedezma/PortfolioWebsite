import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <NavLink href={link.path} title={link.title} icon={link.icon} />
        </li>
      ))}
      <ThemeToggle />
    </ul>
  );
};

export default MenuOverlay;
