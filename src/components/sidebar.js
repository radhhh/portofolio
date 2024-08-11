"use client";
import { useState, useEffect } from "react";
const sections = ["landing", "about", "experience", "work", "contact"];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("landing");
  const [screenHeight, setScreenHeight] = useState(0);
  useEffect(() => {
    setScreenHeight(window.innerHeight);
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
    }

    const interval = setInterval(monitorChange, 50);
    return () => clearInterval(interval);
  }, [activeSection, screenHeight]);

  return <></>;
}
