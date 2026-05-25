"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-8"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto">
        <Link
          href="/"
          className="text-headline-md font-headline-md font-bold text-on-surface dark:text-inverse-on-surface"
        >
          Bill Pinder
        </Link>
        <div className="hidden md:flex items-center gap-stack-gap-md">
          <Link
            className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors text-body-md font-body-md"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-on-surface dark:text-inverse-on-surface border-b-[3px] border-primary pb-1 text-body-md font-body-md"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors text-body-md font-body-md"
            href="#"
          >
            Portfolio
          </Link>
          <Link
            className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors text-body-md font-body-md"
            href="#"
          >
            Contact
          </Link>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-sm text-label-sm hover:opacity-90 transition-opacity ml-4 cursor-pointer">
            Contact me
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface p-2 focus:outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface-container px-gutter py-6 flex flex-col gap-4 shadow-md">
          <Link
            className="text-on-surface text-body-md font-body-md"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-primary font-bold text-body-md font-body-md"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-on-surface text-body-md font-body-md"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            className="text-on-surface text-body-md font-body-md"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-sm text-label-sm hover:opacity-90 transition-opacity w-full text-center">
            Contact me
          </button>
        </div>
      )}
    </header>
  );
}
