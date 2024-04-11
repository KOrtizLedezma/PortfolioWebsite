"use client";

import React, {useState} from 'react'
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
{
    title: "About",
    path: "#about",
},
{
    title: "Projects",
    path: "#projects",
},
{
    title: "Contact",
    path: "#contact",
}
]

const NavBar = () => {

    const handleLogoClick = () => {
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
    };

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed_overlay">
            <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2">
                <button onClick={handleLogoClick} className="flex items-center">
                    <span className="NavBar_heading">HOME</span>
                </button>
                <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? 
                    (
                        <button onClick={() => setNavbarOpen(true)} className="NavBar_button">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="NavBar_button">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )
                } 
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    );
}

export default NavBar