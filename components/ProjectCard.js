export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-600 font-medium hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}
