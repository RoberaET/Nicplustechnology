import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/projects" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-text-main mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.services.map((service, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full border border-primary/20">
                    {service}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                {project.title}
              </h1>
              
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 relative border border-border">
                <div className="absolute inset-0 bg-navy/40 mix-blend-multiply z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-text-main mb-4">The Challenge</h3>
                  <p className="text-text-muted leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </section>
                
                <section>
                  <h3 className="text-2xl font-bold text-text-main mb-4">The Solution</h3>
                  <p className="text-text-muted leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-text-main mb-4">Implementation</h3>
                  <p className="text-text-muted leading-relaxed text-lg">
                    {project.implementation}
                  </p>
                </section>

                <section className="bg-surface border border-border rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-text-main mb-4">The Result</h3>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                    <p className="text-text-main leading-relaxed text-lg font-medium">
                      {project.result}
                    </p>
                  </div>
                </section>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-surface border border-border rounded-xl p-8 sticky top-32">
                <h3 className="text-xl font-bold text-text-main mb-6 border-b border-border pb-4">Project Overview</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs text-text-muted uppercase tracking-wider mb-1">Client</h4>
                    <p className="text-text-main font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-text-muted uppercase tracking-wider mb-1">Industry</h4>
                    <p className="text-text-main font-medium">{project.industry}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-text-muted uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-text-main font-medium">{project.location}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-text-muted uppercase tracking-wider mb-1">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technology.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-background border border-border text-text-muted text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold text-text-main mb-4">Have a similar project? Let's talk.</h4>
                  <Link to="/contact">
                    <Button className="w-full">Request a Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
