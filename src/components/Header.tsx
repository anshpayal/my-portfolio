"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(preferredTheme);
    document.documentElement.classList.add(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 p-4 border-b border-gray-700 z-50 bg-white dark:bg-zinc-900">
      <nav className="flex justify-between items-center max-w-3xl mx-auto md:px-4">
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded bg-zinc-700 text-white text-sm"
        >
          {theme === "light" ? (
            <IoMoon size={18} />
          ) : (
            <MdSunny size={18} fill="yellow" />
          )}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6 text-sm text-black dark:text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center md:hidden space-x-4 text-sm text-black dark:text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 rounded bg-zinc-700 text-white"
          >
            <RxHamburgerMenu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute right-4 top-12 mt-2 space-y-2 bg-zinc-700 p-4 rounded shadow-lg"
        >
          <Link
            href="#projects"
            className="block text-sm hover:underline"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="block text-sm hover:underline"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="block text-sm hover:underline"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
