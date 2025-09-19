"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Techbee IT & Designs LLC, Dubai, UAE",
      duration: "Oct 2023 – Present",
      details: [
        "Built full-stack web applications using React.js, Next.js, Tailwind CSS, Express.js, and MySQL.",
        "Optimized company website with WordPress and AIOSEO plugin, increasing organic traffic by 40%.",
        "Developed RESTful APIs with JWT authentication and role-based authorization.",
        "Designed and deployed backend solutions handling complex CRUD operations in MySQL.",
        "Deployed applications on Hostinger Shared Hosting and VPS Hosting for production environments.",
        "Collaborated in team sprints using GitHub and tested APIs with Postman.",
        "Integrated customer service platforms like Freshdesk and Tegsoft for client projects.",
        "Configured and optimized document processing workflows using Kodak Info Input and Capture Pro."
      ],
      keyProjects: [
        "Yacht Booking Web App: Built with Next.js (App Router), Prisma ORM, MySQL, Tailwind CSS, and Stripe Checkout.",
        "Quotation Web App (webishopi.com): React + Express.js with PDF generation, email notifications, and admin panel.",
        "Intelligent Document Processing Website (intelligentdocumentprocessing.ae): Modern static site with React.js and Tailwind CSS.",
        "Automated document capture and classification using Kodak Info Input and Capture Pro, improving speed by 35%.",
        "Implemented Freshdesk ticketing and Tegsoft call center solutions to enhance client support efficiency."
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Spangles Infotech, Nagercoil, India",
      duration: "Jan 2018 – Oct 2023",
      details: [
        "Built and maintained full-stack applications using React.js, Tailwind CSS, Express.js, and MySQL.",
        "Created modular, responsive UI components ensuring cross-browser compatibility.",
        "Developed secure RESTful APIs with JWT authentication and complex backend logic.",
        "Improved code efficiency and performance through debugging and optimization.",
        "Integrated third-party APIs and maintained scalable codebases."
      ],
    },
    {
      role: "Web Administrator",
      company: "Aljaber Transport & General Contracting LLC, Mussafah, Abu Dhabi, UAE",
      duration: "May 2012 – Jan 2018",
      details: [
        "Managed website content updates using HTML, CSS, and JavaScript.",
        "Created and optimized pages, banners, and navigation for user engagement.",
        "Performed backups, formatting, and structural updates to improve reliability."
      ],
    },
    {
      role: "Frontend Developer",
      company: "Yakoot IT Solutions, Thengapattanam, India",
      duration: "Feb 2011 – May 2012",
      details: [
        "Designed and maintained responsive web pages using HTML5 and CSS3.",
        "Implemented modern UI layouts and improved user experience across devices."
      ],
    },
  ];

  return (
    <>
    

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 sm:left-8 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 flex flex-col sm:flex-row relative"
            >
              {/* Timeline circle */}
              <span className="absolute -left-6 sm:-left-9 top-2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 w-full sm:w-[calc(100%-4rem)] sm:ml-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-blue-500 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                {exp.keyProjects && (
                  <>
                    <h4 className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
                      Key Projects:
                    </h4>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.keyProjects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
