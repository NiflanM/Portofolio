interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ title, company, period, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-8 relative group">
      {/* Left Axis Graphic */}
      <div className="flex flex-col items-center">
        {/* Crisp industrial target indicator */}
        <div className="w-3 h-3 rounded-full border border-indigo-500 bg-[#0b0b0d] flex items-center justify-center z-10 transition-all duration-300 group-hover:border-purple-400 group-hover:scale-110">
          <div className="w-1 h-1 rounded-full bg-indigo-400 group-hover:bg-purple-400" />
        </div>
        {!isLast && (
          <div className="w-[1px] flex-1 bg-gradient-to-b from-zinc-800 to-transparent my-2" />
        )}
      </div>

      {/* Content Block */}
      <div className="flex-1 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h4>
          <span className="font-mono text-[11px] tracking-wider text-zinc-500">
            {period}
          </span>
        </div>
        
        <div className="inline-block font-mono text-xs text-indigo-400/90 tracking-wide mb-4">
          @{company}
        </div>
        
        <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}