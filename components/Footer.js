"use client";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Load LinkedIn badge script once
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sowmia Drillo. All rights reserved.
        </p>

        {/* Right - Links + LinkedIn Badge */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <div className="flex space-x-6">
            <a
              href="https://github.com/sowmia1808/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mary-sowmia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sowmia.spangles@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>

          {/* LinkedIn Badge */}
          <div className="mt-2 md:mt-0">
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="mary-sowmia"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://www.linkedin.com/in/mary-sowmia"
              >
                Mary Sowmia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
