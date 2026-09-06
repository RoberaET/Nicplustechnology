import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { insights } from '../data/insights';

export function Insights() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Insights & Engineering Guides" 
            subtitle="Technical knowledge, infrastructure guides, and security best practices."
            badge="KNOWLEDGE BASE"
            centered
          />
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link 
                key={insight.slug}
                to={`/insights/\${insight.slug}`}
                className="group flex flex-col bg-surface hover:bg-surfaceHover border border-border hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-navy/40 mix-blend-multiply z-10 transition-colors group-hover:bg-navy/20" />
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {insight.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {insight.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-text-main mt-auto group-hover:text-primary transition-colors">
                    Read Article 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
