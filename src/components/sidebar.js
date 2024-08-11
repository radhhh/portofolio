"use client";
import { useState, useEffect } from "react";
import { NavButton } from "./component";
const sections = ["landing", "about", "experience", "work", "contact"];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("landing");
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
    const offsets = sections.map(
      (section) => document.getElementById(section).offsetTop,
    );

    function monitorChange() {
      for (let i = sections.length - 1; i >= 0; i--) {
        if (offsets[i] < window.scrollY + screenHeight / 2) {
          setActiveSection(sections[i]);
          break;
        }
      }
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    }

    const interval = setInterval(monitorChange, 50);
    return () => clearInterval(interval);
  }, [activeSection, screenHeight, screenWidth]);

  return (
    <nav
      className={
        "fixed top-1/2 flex -translate-y-1/2 flex-col items-center transition-all " +
        (activeSection == "landing" || screenWidth <= 1280
          ? "invisible left-0 opacity-0"
          : "opacity-1 visible left-8")
      }
    >
      <NavButton
        className={
          "size-14 rounded-md border-2 border-solid bg-neutral-900 shadow-lg transition-all hover:scale-110 " +
          (activeSection == "about"
            ? "scale-125 border-neutral-400 hover:scale-[135%]"
            : "border-neutral-500 hover:scale-110")
        }
        target="about"
      ></NavButton>
      <div className="h-8 w-0.5 bg-neutral-500"></div>
      <NavButton
        className={
          "size-14 rounded-md border-2 border-solid bg-neutral-900 shadow-lg transition-all hover:scale-110 " +
          (activeSection == "experience"
            ? "scale-125 border-neutral-400 hover:scale-[135%]"
            : "border-neutral-500 hover:scale-110")
        }
        target="experience"
      ></NavButton>
      <div className="h-8 w-0.5 bg-neutral-500"></div>
      <NavButton
        className={
          "size-14 rounded-md border-2 border-solid bg-neutral-900 shadow-lg transition-all hover:scale-110 " +
          (activeSection == "work"
            ? "scale-125 border-neutral-400 hover:scale-[135%]"
            : "border-neutral-500 hover:scale-110")
        }
        target="work"
      ></NavButton>
      <div className="h-8 w-0.5 bg-neutral-500"></div>
      <NavButton
        className={
          "size-14 rounded-md border-2 border-solid bg-neutral-900 shadow-lg transition-all hover:scale-110 " +
          (activeSection == "contact"
            ? "scale-125 border-neutral-400 hover:scale-[135%]"
            : "border-neutral-500 hover:scale-110")
        }
        target="contact"
      ></NavButton>
    </nav>
  );
}
