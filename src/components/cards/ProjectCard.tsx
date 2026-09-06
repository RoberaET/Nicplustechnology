import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Project } from '../../data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      to={`/projects/\${project.slug}`}
      className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full"
    >
      <div className="relative h-48 sm:h-60 overflow-hidden">
        <div className="absolute inset-0 bg-navy/40 z-10 group-hover:bg-transparent transition-colors duration-300" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {project.services.slice(0, 2).map((service, i) => (
            <span key={i} className="bg-background/80 backdrop-blur text-xs font-medium px-2 py-1 rounded text-text-main border border-border">
              {service}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
          <span>{project.industry}</span>
          <span>•</span>
          <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {project.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-text-main mb-2">{project.title}</h3>
        <p className="text-text-muted text-sm mb-6 flex-grow">{project.description}</p>
        
        <div className="flex items-center text-sm font-medium text-primary mt-auto">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
