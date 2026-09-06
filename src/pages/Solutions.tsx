import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutions } from '../data/solutions';

export function Solutions() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Industry Solutions" 
            subtitle="Tailored technology infrastructure designed for specific business environments."
            badge="SOLUTIONS"
            centered
          />
          
          <div className="mt-20 flex flex-col gap-12">
            {solutions.map((solution, index) => (
              <div 
                key={solution.slug} 
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-surface border border-border rounded-2xl overflow-hidden`}
              >
                <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-full relative overflow-hidden min-h-[300px]">
                  <div className="absolute inset-0 bg-navy/40 mix-blend-multiply z-10" />
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-text-main mb-4">{solution.title}</h3>
                  <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/solutions/\${solution.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-text-main transition-colors group"
                  >
                    Explore Solution 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
