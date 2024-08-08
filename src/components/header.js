// import styles from './css/header.module.css';
import { useState } from "react";

export default function Header({ show }) {
  const [openMenu, setOpenMenu] = useState(false);

  function closeMenu() {
    setOpenMenu(false);
  }

  return (
    <header
      onBlur={closeMenu}
      className={`${!show && !openMenu && "-translate-y-full"} fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-neutral-800 p-6 text-neutral-300 transition-all duration-200`}
    >
      <NavButton target="landing">
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
        className={`navDropdown ${openMenu ? "open" : ""} absolute right-3 top-24 bg-neutral-800 p-6 text-2xl`}
      >
        <NavButton closeMenu={closeMenu} target="about" className="mb-3">
          About
        </NavButton>
        <NavButton closeMenu={closeMenu} target="experience" className="mb-3">
          Experience
        </NavButton>
        <NavButton closeMenu={closeMenu} target="work" className="mb-3">
          Work
        </NavButton>
        <NavButton closeMenu={closeMenu} target="contact">
          Contact
        </NavButton>
      </nav>
    </header>
  );
}

function NavButton({
  target,
  children,
  closeMenu = () => null,
  className = null,
}) {
  return (
    <button
      className={"block hover:scale-105 active:scale-105 " + className}
      onClick={(e) => {
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }}
    >
      {children}
    </button>
  );
}
