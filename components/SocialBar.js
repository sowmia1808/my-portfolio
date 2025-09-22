"use client";
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function SocialBar() {
  return (
    <>
      {/* Desktop (Right Side Vertical Bar) */}
      <div className="hidden md:flex fixed right-4 top-1/3 flex-col gap-4 z-50">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaLinkedin size={20} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <FaGithub size={20} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Phone */}
        <a
          href="tel:+971500000000"
          className="p-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition"
        >
          <FaPhone size={20} />
        </a>
      </div>

      {/* Mobile (Bottom Horizontal Bar) */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-white px-4 py-2 rounded-full shadow-lg z-50">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href="tel:+971500000000"
          className="text-teal-600 hover:text-teal-700 transition"
        >
          <FaPhone size={22} />
        </a>
      </div>
    </>
  );
}