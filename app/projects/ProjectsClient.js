import ProjectCard from "../../components/ProjectCard";

export default function ProjectsClient() {
  const projects = [
    {
      title: "Yacht Booking Web App",
      description:
        "Full-stack booking app with Next.js, Prisma, MySQL, Stripe.",
      link: null, // null = ongoing project
    },
    {
      title: "Beauty Parlour Web App",
      description:
        "Responsive beauty parlour booking & management app.",
      link: null, // null = ongoing project
    },
    {
      title: "Quotation Web App",
      description:
        "Dynamic quotation system with PDF + email integration and domain whitelisting, whatsapp integration",
      link: "https://webishopi.com/",
    },
    {
      title: "Intelligent Document Processing",
      description:
        "React.js static website optimized for SEO.",
      link: "https://intelligentdocumentprocessing.ae/",
    },
  ];

  return (
    <section className="py-16 mt-15 px-6 md:px-12 lg:px-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
     My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Ongoing Badge */}
            {!p.link && (
              <span className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold text-gray-900 px-3 py-1 rounded-full shadow">
                🚧 Ongoing
              </span>
            )}

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {p.description}
              </p>

              {/* Show button only if project has a link */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
