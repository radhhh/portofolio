"use client";
import Header from "../components/header";
import LandingPage from "../components/landing";
import AboutPage from "../components/about";
import ExperiencePage from "../components/experience";
import WorkPage from "../components/work";
import ContactPage from "../components/contact";

import { useEffect, useState } from "react";

export default function Page() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="bg-neutral-900 text-neutral-500">
      <Header show={show} />
      <main>
        <LandingPage />
        <AboutPage />
        <ExperiencePage />
        <WorkPage />
        <ContactPage />
      </main>
    </div>
  );
}
