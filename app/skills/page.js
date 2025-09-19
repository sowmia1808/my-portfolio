import SkillCard from "@/components/SkillCard";
import { FaReact, FaWordpress, FaNode, FaDatabase, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiPrisma, SiStripe } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black w-10 h-10" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-10 h-10" /> },
    { name: "Node.js (Express)", icon: <FaNode className="text-green-500 w-10 h-10" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 w-10 h-10" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-purple-500 w-10 h-10" /> },
    { name: "Stripe Integration", icon: <SiStripe className="text-indigo-500 w-10 h-10" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-700 w-10 h-10" /> },
    { name: "SEO (AIOSEO)", icon: <FaDatabase className="text-yellow-500 w-10 h-10" /> },
    { name: "VPS Hosting (Ubuntu)", icon: <FaServer className="text-gray-600 w-10 h-10" /> },
  ];

  return (
    <section className="py-12  dark:bg-gray-900 mt-15 ">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
        My Skills
      </h1>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-6 lg:px-8">
        {skills.map((skill, i) => (
          <SkillCard
            key={i}
            name={skill.name}
            icon={skill.icon}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
