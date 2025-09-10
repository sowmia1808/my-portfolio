"use client";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Mary Somwia
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Links */}
        <ul
          className={`md:flex md:space-x-6 items-center ${
            open ? "block mt-4 space-y-3 md:space-y-0" : "hidden"
          } md:flex`}
        >
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link href="/skills" className="hover:text-blue-500">Skills</Link></li>
          <li><Link href="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link href="/experience" className="hover:text-blue-500">Experience</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>

          {/* WhatsApp Contact */}
          <li className="flex items-center space-x-2 font-semibold text-green-600">
            <FaWhatsapp className="text-xl" />
            <a
              href="https://wa.me/971565466486"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
