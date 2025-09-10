export default function About() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto mt-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/images/pp.png"
            alt="Profile"
            className="rounded-lg shadow-lg w-100 h-100 object-contain"
          />
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I’m <span className="font-semibold">Sowmia Drillo</span>, a
            passionate <strong>Full Stack Developer</strong> with 5+ years of
            experience building modern web applications and optimized websites.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Skilled in <strong>React.js, Next.js, Tailwind CSS, Express.js, and
            MySQL</strong>. I also specialize in{" "}
            <strong>WordPress development and SEO optimization</strong> using
            tools like <strong>AIOSEO</strong> to deliver high-performing,
            search-friendly websites.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Currently, I’m developing a{" "}
            <strong>Yacht Booking Web App</strong> with Next.js, Prisma, MySQL,
            and Stripe integration — combining e-commerce with real-time booking
            features.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m always eager to learn, experiment with new technologies, and
            build solutions that create impact.
          </p>
        </div>
      </div>
    </section>
  );
}
