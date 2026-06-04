"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? "bg-[#0a0e23]/90 backdrop-blur-md shadow-sm py-4 border-b border-white/10"
          : "bg-transparent py-8"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 text-headline-md font-headline-md font-bold text-white group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-xl text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform">
            T
          </div>
          <span>
            Tamanna<span className="text-primary glow-text">Akter</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md" href="#home">Home</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md" href="#journey">Journey</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md" href="#skills">Skills</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-body-md" href="#projects">Projects</Link>

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
            <a
              className="text-on-surface-variant hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
              href="https://github.com/Tamanna431"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-on-surface-variant hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
              href="https://www.linkedin.com/in/tamanna431/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <DarkModeToggle />
            <Link
              href="#contact"
              className="bg-transparent border border-primary text-primary px-6 py-2 rounded-full font-label-sm text-label-sm hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all cursor-pointer inline-block text-center"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e23] border-b border-white/10 px-gutter py-6 flex flex-col gap-4 shadow-lg absolute top-full left-0 w-full">
          <Link className="text-white text-body-md font-body-md" href="#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link className="text-white text-body-md font-body-md" href="#journey" onClick={() => setMobileMenuOpen(false)}>Journey</Link>
          <Link className="text-white text-body-md font-body-md" href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
          <Link className="text-white text-body-md font-body-md" href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-4">
            <a
              className="text-white text-body-md font-body-md"
              href="https://github.com/Tamanna431"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </a>
            <a
              className="text-white text-body-md font-body-md"
              href="https://www.linkedin.com/in/tamanna431/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              LinkedIn
            </a>
            <Link
              href="#contact"
              className="bg-transparent border border-primary text-primary px-8 py-3 rounded-full font-label-sm text-label-sm hover:bg-primary/10 w-full text-center inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
