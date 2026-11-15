import { useState, useEffect, useRef } from 'react';

interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const metrics: MetricItem[] = [
  { value: 50, suffix: '+', label: 'Enterprise Projects', sublabel: 'Deployed across banking, campuses & industry' },
  { value: 20, suffix: '+', label: 'Enterprise Clients', sublabel: 'Trusted by leading public & private institutions' },
  { value: 10, suffix: '+', label: 'Technology Areas', sublabel: 'From cloud and zero-trust to AI automation' },
  { value: 24, suffix: '/7', label: 'Mission-Critical Support', sublabel: 'Continuous network monitoring & rapid SLA dispatch' },
];

export function StatisticsSection() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {metrics.map((metric, idx) => (
            <MetricCounter
              key={idx}
              metric={metric}
              animate={hasTriggered}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCounter({
  metric,
  animate,
  delay,
}: {
  metric: MetricItem;
  animate: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;


    const end = metric.value;
    const duration = 1600;
    const startTime = performance.now() + delay;

    const step = (currentTime: number) => {
      if (currentTime < startTime) {
        requestAnimationFrame(step);
        return;
      }
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [animate, metric.value, delay]);

  return (
    <div className="flex flex-col border-l border-border/80 pl-6 lg:pl-8 py-2">
      <div className="font-mono text-5xl sm:text-6xl md:text-7xl font-extrabold text-text-main tracking-tight flex items-baseline mb-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600">
          {count}
        </span>
        <span className="text-cyan-400 text-3xl sm:text-4xl md:text-5xl ml-0.5">
          {metric.suffix}
        </span>
      </div>
      <h4 className="text-lg font-bold text-text-main mb-1">
        {metric.label}
      </h4>
      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
        {metric.sublabel}
      </p>
    </div>
  );
}

