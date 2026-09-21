import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Testimonial {
  quote: string;
  client: string;
  position: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "NIC+ TECHNOLOGIES helped us turn a complex technology challenge into a simple, scalable solution. Their team brought clarity and engineering rigor to our enterprise backbone.",
    client: "Elias Haile",
    position: "Chief Technology Officer",
    organization: "Continental Financial Group",
  },
  {
    quote: "Working with NIC+ felt like partnering with a world-class technology lab. Our campus-wide surveillance and network reliability went from constant friction to zero incidents.",
    client: "Dr. Aster Tadesse",
    position: "Head of Digital Infrastructure",
    organization: "East African Academic Institute",
  },
  {
    quote: "In banking and fintech, unplanned downtime is catastrophic. NIC+ designed our redundant SD-WAN architecture with surgical precision. They are true masters of modern infrastructure.",
    client: "Biniam Bekele",
    position: "VP of Enterprise Operations",
    organization: "Nexis Bank",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-28 md:py-36 bg-surface border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-10 shadow-sm">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium tracking-tight text-text-main leading-relaxed mb-12 max-w-4xl transition-all duration-300">
            "{t.quote}"
          </blockquote>

          <div className="flex flex-col items-center mb-8">
            <cite className="not-italic font-bold text-lg text-text-main">
              {t.client}
            </cite>
            <span className="text-sm text-text-muted mt-0.5">
              {t.position} • <span className="text-primary font-medium">{t.organization}</span>
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === current ? 'w-8 bg-cyan-400' : 'w-2 bg-border hover:bg-text-muted'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

