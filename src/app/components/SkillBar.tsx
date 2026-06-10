interface SkillBarProps {
  skill: string;
  level: number;
}

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{skill}</span>
        <span className="text-purple-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
