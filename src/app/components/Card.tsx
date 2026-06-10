interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10
        ${hover ? 'hover:bg-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
