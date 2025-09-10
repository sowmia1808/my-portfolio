export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Sowmia Drillo. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/sowmia1808"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/sowmia-drillo-127582290"
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
      </div>
    </footer>
  );
}
