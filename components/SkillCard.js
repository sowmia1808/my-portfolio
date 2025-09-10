export default function SkillCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center border rounded-lg shadow-md p-6 hover:shadow-lg transition bg-white">
      {/* Icon (optional) */}
      {icon && (
        <div className="text-4xl mb-3 text-blue-600">
          {icon}
        </div>
      )}
      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    </div>
  );
}
