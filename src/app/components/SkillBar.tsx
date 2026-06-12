interface SkillBarProps {
  skill: string;
  level: number; // Level out of 100 used to calculate discrete visual indicator states
}

export function SkillBar({ skill, level }: SkillBarProps) {
  // Translate a numeric level into a clean, minimalist text tier
  const getTier = (lvl: number) => {
    if (lvl >= 90) return "ADVANCED";
    if (lvl >= 80) return "PROFICIENT";
    return "FAMILIAR";
  };

  return (
    <div className="group flex items-center justify-between p-3 rounded-lg border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800/80 hover:bg-zinc-900/10 transition-all duration-300">
      <div className="flex items-center gap-3">
        {/* Sleek status dot instead of a massive bar */}
        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 shadow-sm ${
          level >= 90 
            ? "bg-indigo-400 shadow-indigo-500/50 animate-pulse" 
            : level >= 80 
            ? "bg-purple-400/80" 
            : "bg-zinc-600"
        }`} />
        <span className="text-zinc-300 text-sm font-light tracking-wide group-hover:text-white transition-colors">
          {skill}
        </span>
      </div>
      
      {/* Subtle, minimalist text tier definition */}
      <span className="font-mono text-[9px] tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
        // {getTier(level)}
      </span>
    </div>
  );
}