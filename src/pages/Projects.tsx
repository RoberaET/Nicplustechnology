import { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/cards/ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  const [filter, setFilter] = useState('All');
  // To keep it simple, we'll just hardcode some primary filters or use a subset
  const filters = ['All', 'Networking', 'CCTV', 'Security', 'IT Infrastructure'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.services.includes(filter));

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Recent Deployments" 
            subtitle="Explore our track record of engineering reliable infrastructure and security systems."
            badge="OUR WORK"
            centered
          />
          
          <div className="mt-12 flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === f 
                    ? 'bg-primary border-primary text-navy' 
                    : 'bg-surface border-border text-text-muted hover:border-primary/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-text-muted">
              No projects found matching the selected filter.
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
