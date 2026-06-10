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
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {liveUrl && (
          <Button variant="primary" size="sm" className="flex items-center gap-2">
            <ExternalLink size={16} />
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Github size={16} />
            Code
          </Button>
        )}
      </div>
    </Card>
  );
}
