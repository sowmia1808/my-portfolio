import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6">
      {/* Left - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 mt-20">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-blue-600">Mary Sowmia 👋</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          I’m a <strong>Full Stack Developer</strong> and <strong>WordPress & SEO Specialist</strong> with 5+ years of experience building modern, responsive, and high-performing websites. Passionate about <strong>Next.js</strong>, <strong>React</strong>, and creating solutions that make an impact.
        </p>
        <p className="text-gray-600 sm:text-lg">
          Currently working on <strong>Yacht Booking Web Apps</strong> and e-commerce solutions with <strong>Stripe integration</strong>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
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

      {/* Right - Image */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-100 h-100 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
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
