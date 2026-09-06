import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { solutions } from '../data/solutions';
import { services } from '../data/services';

export function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/solutions" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-text-main mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Solutions
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                {solution.title} Infrastructure
              </h1>
              
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 relative border border-border">
                <div className="absolute inset-0 bg-navy/40 mix-blend-multiply z-10" />
                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-xl text-text-muted leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-2xl font-bold text-text-main mb-4">Architecture & Deployment</h3>
                  <p className="text-text-muted mb-6">
                    Our {solution.title.toLowerCase()} deployments focus on high availability, robust security, and seamless scalability. Every implementation begins with a thorough architectural review to ensure alignment with business objectives.
                  </p>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold text-text-main mb-6">Solution Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-surface border border-border rounded-xl p-8 sticky top-32">
                <h3 className="text-xl font-bold text-text-main mb-4">Discuss this solution</h3>
                <p className="text-text-muted mb-8 text-sm">
                  Contact our engineering team to discuss how this solution can be adapted for your organization.
                </p>
                <Link to="/contact">
                  <Button className="w-full">Request a Consultation</Button>
                </Link>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-4">Related Services</h4>
                  <ul className="flex flex-col gap-3">
                    {services.slice(0, 4).map(s => (
                      <li key={s.slug}>
                        <Link to={`/services/\${s.slug}`} className="text-sm text-primary hover:text-text-main transition-colors">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
