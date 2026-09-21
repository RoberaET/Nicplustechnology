import React, { useState } from 'react';
import { Cpu, Cloud, Network, ShieldCheck, Zap, Database, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TechPillar {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  metrics: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: TechPillar[] = [
  {
    id: 'ai',
    name: 'AI & Intelligence',
    subtitle: 'Adaptive Models & Predictive Automation',
    description: 'Autonomous decision-making engines and real-time predictive analytics designed to preempt bottlenecks before impact.',
    capabilities: ['Predictive Failure Analytics', 'Automated Root-Cause Diagnosis', 'Self-Healing Workflows', 'Cognitive Network Optimization'],
    metrics: '94% Faster Resolution',
    icon: Cpu,
  },
  {
    id: 'cloud',
    name: 'Cloud & Edge',
    subtitle: 'Distributed, Resilient Cloud Architecture',
    description: 'Multi-cloud orchestration and low-latency edge computing topologies engineered for elastic enterprise workloads.',
    capabilities: ['Hybrid Infrastructure Sync', 'Zero-Downtime Migration', 'Containerized Orchestration', 'Micro-Edge Deployments'],
    metrics: '99.999% Availability',
    icon: Cloud,
  },
  {
    id: 'networks',
    name: 'Next-Gen Networks',
    subtitle: 'SD-WAN & Terabit Core Backbones',
    description: 'Software-defined networking with automated path selection, multi-gigabit throughput, and dynamic packet priority.',
    capabilities: ['Segmented Zero-Trust Fabrics', 'Automated Failover Protocols', 'Ultra-Low Latency Backbones', 'Real-Time Telemetry'],
    metrics: '< 2ms Packet Jitter',
    icon: Network,
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    subtitle: 'Continuous Threat Defense & Zero Trust',
    description: 'Defense-in-depth architecture combining hardware root-of-trust, micro-segmentation, and automated incident containment.',
    capabilities: ['AI Behavioral Threat Detection', 'Perimeter & Endpoint Hardening', 'Cryptographic Data Safeguards', 'Compliance & Risk Audits'],
    metrics: 'Zero Perimeter Breaches',
    icon: ShieldCheck,
  },
  {
    id: 'automation',
    name: 'Smart Automation',
    subtitle: 'End-to-End Workflow Orchestration',
    description: 'Eliminate repetitive operational overhead through programmatic infrastructure provisioning and dynamic workload rebalancing.',
    capabilities: ['Infrastructure as Code (IaC)', 'Self-Provisioning Services', 'Policy-Driven Compliance', 'Telemetry Alert Pipelines'],
    metrics: '70% Manual Task Reduction',
    icon: Zap,
  },
  {
    id: 'data',
    name: 'Data Architecture',
    subtitle: 'High-Throughput Storage & Intelligence',
    description: 'Clean data pipelines, immutable backup targets, and unified analytics streams for critical enterprise visibility.',
    capabilities: ['High-IOPS Flash SAN/NAS', 'Immutable Ransomware Backups', 'Real-Time Stream Processing', 'Data Governance Frameworks'],
    metrics: '100% Data Integrity',
    icon: Database,
  },
];

export function TechnologyPillars() {
  const [activePillar, setActivePillar] = useState<TechPillar>(pillars[0]);

  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 uppercase mb-4">
            Core Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-main leading-tight mb-6">
            Built for today. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
              Ready for tomorrow.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Our engineering methodology treats technology as a unified, living ecosystem. Explore the six foundational pillars powering NIC+ solutions.
          </p>
        </div>

        {/* Interactive Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Pillar Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar.id === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  onMouseEnter={() => setActivePillar(pillar)}
                  className={cn(
                    'w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group relative overflow-hidden',
                    isSelected
                      ? 'bg-surface/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.01]'
                      : 'bg-surface/30 border-border/60 hover:bg-surface/70 hover:border-border'
                  )}
                >
                  {/* Subtle active indicator bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600" />
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl flex items-center justify-center transition-colors',
                        isSelected
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-400/30'
                          : 'bg-surface text-text-muted group-hover:text-text-main border border-border'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4
                        className={cn(
                          'font-bold text-base transition-colors',
                          isSelected ? 'text-text-main font-semibold' : 'text-text-muted group-hover:text-text-main'
                        )}
                      >
                        {pillar.name}
                      </h4>
                      <p className="text-xs text-text-muted truncate max-w-[220px] sm:max-w-xs">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={cn(
                      'w-4 h-4 transition-all duration-200',
                      isSelected ? 'text-cyan-400 translate-x-0 opacity-100' : 'text-text-muted -translate-x-2 opacity-0 group-hover:opacity-60'
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Impact Pillar Showcase Screen */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-3xl bg-surface border border-border/80 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Soft internal gradient shine */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 px-3 py-1.5 rounded-lg">
                    <span>STATUS: ACTIVE SPECIFICATION</span>
                  </div>
                  <span className="font-mono text-xs text-text-muted tracking-widest">
                    BENCHMARK: <strong className="text-cyan-400 font-semibold">{activePillar.metrics}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <activePillar.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
                      {activePillar.name}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400">
                      {activePillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-10 max-w-xl">
                  {activePillar.description}
                </p>

                {/* Capabilities grid */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-text-muted mb-4">
                    Architectural Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activePillar.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-background/60 border border-border/70 text-sm text-text-main"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="pt-6 border-t border-border flex items-center justify-between text-xs text-text-muted relative z-10">
                <span className="font-mono">Engineered for Zero Failure</span>
                <span className="text-cyan-400 font-medium">Verified by NIC+ Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

