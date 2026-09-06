import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { ServerCrash } from 'lucide-react';

export function NotFound() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Subtle grid background to look like a network outage */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <ServerCrash className="h-32 w-32 text-border" />
              <ServerCrash className="h-32 w-32 text-red-500/50 absolute top-0 left-0 animate-pulse mix-blend-screen" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-text-main mb-6 tracking-tighter">
            4<span className="text-primary">0</span>4
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 tracking-wide">
            Connection Lost
          </h2>
          
          <p className="text-lg text-text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            The page or resource you're looking for could not be reached. It may have been moved, deleted, or you might have a broken link.
          </p>
          
          <Link to="/">
            <Button size="lg" className="px-8">
              Return to Core Infrastructure
            </Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
