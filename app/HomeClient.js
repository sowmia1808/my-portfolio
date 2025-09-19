"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeClient() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6">
      {/* Left - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-blue-600">Mary Sowmia 👋</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          A passionate <strong>Full Stack Developer</strong> and{" "}
          <strong>WordPress & SEO Specialist</strong> based in Dubai, UAE.  
          I build modern, scalable, and SEO-friendly web solutions using{" "}
          <span className="font-semibold">Next.js, React, Tailwind CSS</span> 
          and integrate robust backends with <span className="font-semibold">MySQL</span>.  
        </p>
        <p className="text-gray-600">
          With experience in both <strong>frontend</strong> and <strong>backend</strong>,
          I help businesses grow online with creative and optimized websites.  
          I’m also available for <span className="font-semibold">freelance projects</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center pt-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View My Projects
          </Link>
            
        </div>
      </div>

      {/* Right - Image */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
          <Image
            src="/images/pp.png"
            alt="Sowmia Drillo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

