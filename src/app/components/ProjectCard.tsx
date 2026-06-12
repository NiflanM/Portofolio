import { Card } from './Card';
import { Button } from './Button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, techStack, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group flex flex-col justify-between h-full p-4 sm:p-5">
      <div className="w-full">
        {/* Responsive aspect ratio containment area */}
        <div className="relative overflow-hidden rounded-lg mb-4 h-40 sm:h-48 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white tracking-tight">{title}</h3>
        <p className="text-zinc-400 mb-4 text-xs sm:text-sm font-light leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-md text-[11px] font-mono border border-purple-500/20 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Button container responds fluidly from vertical stacks to side-by-side splits */}
      <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-zinc-900/60 w-full mt-auto">
        {liveUrl && (
          <Button variant="primary" size="sm" className="flex items-center justify-center gap-2 w-full sm:w-auto text-xs font-mono">
            <ExternalLink size={14} />
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" className="flex items-center justify-center gap-2 w-full sm:w-auto text-xs font-mono text-zinc-300 border-zinc-800 hover:bg-zinc-900">
            <Github size={14} />
            Code
          </Button>
        )}
      </div>
    </Card>
  );
}