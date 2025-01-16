'use client'
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="p-4 border-b border-gray-700">
      <nav className="flex justify-between items-center max-w-3xl mx-auto md:px-4">
        {/* Logo */}
        <div className="text-sm font-semibold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center md:hidden space-x-4 text-sm">
          {/* Home Link */}
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {/* Blogs Link */}
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="p-2 rounded bg-zinc-700">
            <RxHamburgerMenu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-12 mt-2 space-y-2 bg-zinc-700 p-4 rounded shadow-lg">
          <Link href="#projects" className="block text-sm hover:underline">
            Projects
          </Link>
          <Link href="#experience" className="block text-sm hover:underline">
            Experience
          </Link>
          <Link href="#contact" className="block text-sm hover:underline">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
