"use client";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-neutral-800 p-6 text-neutral-300">
      <NavButton target="landing">
        <h1 className="text-3xl">CK</h1>
      </NavButton>
      <nav className="flex gap-6 align-middle text-xl">
        <NavButton target="about">About</NavButton>
        <NavButton target="experience">Experience</NavButton>
        <NavButton target="work">Work</NavButton>
        <NavButton target="contact">Contact</NavButton>
      </nav>
    </header>
  );
}

function NavButton({ target, children }) {
  return (
    <button
      onClick={(e) =>
        document.getElementById(target).scrollIntoView({ behavior: "smooth" })
      }
    >
      {children}
    </button>
  );
}
