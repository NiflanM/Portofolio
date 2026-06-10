interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ title, company, period, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-6 relative">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50 z-10" />
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-purple-600 to-transparent mt-2" />
        )}
      </div>

      <div className="flex-1 pb-8">
        <h3 className="text-xl text-white mb-1">{title}</h3>
        <p className="text-purple-400 mb-2">{company}</p>
        <p className="text-gray-500 text-sm mb-3">{period}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
