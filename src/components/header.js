"use client";
import { useState, useEffect } from "react";
import { NavButton } from "./component";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  function closeMenu() {
    setOpenMenu(false);
  }

  return (
    <header
      onBlur={closeMenu}
      className={`${!showHeader && !openMenu && "-translate-y-full"} fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-neutral-800 p-6 text-neutral-300 shadow-lg transition-all duration-200`}
    >
      <NavButton
        target="landing"
        className="block hover:scale-105 active:scale-105"
      >
        <h1 className="text-3xl font-bold">CK</h1>
      </NavButton>
      <nav className="hidden gap-6 align-middle text-xl md:flex">
        <NavButton target="about">About</NavButton>
        <NavButton target="experience">Experience</NavButton>
        <NavButton target="work">Work</NavButton>
        <NavButton target="contact">Contact</NavButton>
      </nav>
      <button
        className={`navIcon ${openMenu ? "open" : ""} block md:hidden`}
        id="navIcon"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={`navDropdown ${openMenu ? "open" : ""} absolute right-3 top-24 bg-neutral-800 p-6 text-2xl shadow-lg`}
      >
        <NavButton
          callback={closeMenu}
          target="about"
          className="mb-3 block underline hover:scale-105 active:scale-105"
        >
          About
        </NavButton>
        <NavButton
          callback={closeMenu}
          target="experience"
          className="mb-3 block underline hover:scale-105 active:scale-105"
        >
          Experience
        </NavButton>
        <NavButton
          callback={closeMenu}
          target="work"
          className="mb-3 block underline hover:scale-105 active:scale-105"
        >
          Work
        </NavButton>
        <NavButton
          callback={closeMenu}
          target="contact"
          className="block underline hover:scale-105 active:scale-105"
        >
          Contact
        </NavButton>
      </nav>
    </header>
  );
}
