// app/about/AboutClient.js
"use client";
import Image from "next/image";


export default function AboutClient() {


  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 max-w-6xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        About Me
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl shadow-2xl hover:scale-105 transform transition duration-500 overflow-hidden">
            <image
              src="/images/pp.png"
              alt="Sowmia Drillo"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I am <span className="font-semibold text-blue-600">Sowmia Drillo</span>, a passionate <strong>Full Stack Developer</strong> with 5+ years of experience building modern web applications and optimized websites.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Skilled in <strong>React.js, Next.js, Tailwind CSS, Express.js, and MySQL</strong>. I also specialize in <strong>WordPress development and SEO optimization</strong> using tools like <strong>AIOSEO</strong> to deliver high-performing, search-friendly websites.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently, I am developing a <strong>Yacht Booking Web App</strong> with Next.js, Prisma, MySQL, and Stripe integration — combining e-commerce with real-time booking features.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I am always eager to learn, experiment with new technologies, and build solutions that create impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
