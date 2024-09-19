"use client";

import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/navigation';

// Import icons from react-icons
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';

const navLinks = [
  {
    title: "Home",
    path: "/home",
    icon: <FaHome size={25} />
  },
  {
    title: "About",
    path: "/about",
    icon: <FaUser size={25} />
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaProjectDiagram size={25} />
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <FaFileAlt size={25} />
  }
];

const NavBar = () => {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <nav className="fixed_overlay">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2">
        <button onClick={handleLogoClick} className="flex items-center">
          <span className="NavBar_heading">KO</span>
        </button>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="NavBar_button">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="NavBar_button">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <ThemeToggle />
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default NavBar;
