import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../data/services';
import SpotlightCard from '../ui/SpotlightCard';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  
  return (
    <Link 
      to={`/services/${service.slug}`}
      className="group block h-full"
    >
      <SpotlightCard className="h-full flex flex-col bg-surface border border-border p-8 rounded-xl group-hover:border-primary/50 transition-colors duration-300" spotlightColor="rgba(2, 132, 199, 0.6)">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        
        <div className="bg-navy p-3 rounded-lg w-fit mb-6 border border-border group-hover:border-primary/30 transition-colors relative z-10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold text-text-main mb-3 relative z-10">{service.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow relative z-10">
          {service.description}
        </p>
        
        <div className="flex items-center text-sm font-medium text-primary mt-auto relative z-10">
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </SpotlightCard>
    </Link>
  );
}
