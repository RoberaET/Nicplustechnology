import { useState } from 'react';
import { SparklesAIIcon, BrainCircuitIcon, NicLogoIcon, ElegantCheckIcon } from '../icons';
import { cn } from '../../lib/utils';

interface IntelligenceNode {
  label: string;
  category: string;
  description: string;
  x: string;
  y: string;
}

const aiNodes: IntelligenceNode[] = [
  { label: 'Analyze', category: 'Deep Inspection', description: 'Deep telemetry inspection parsing millions of network events every minute.', x: '18%', y: '28%' },
  { label: 'Predict', category: 'Early Warning', description: 'Anomaly anticipation finding hardware and traffic degradation before users notice.', x: '68%', y: '22%' },
  { label: 'Automate', category: 'Self-Execution', description: 'Programmatic policy rollouts, firmware audits, and autonomous patch staging.', x: '35%', y: '65%' },
  { label: 'Optimize', category: 'Dynamic Tuning', description: 'Dynamic bandwidth rebalancing and QoS routing based on live enterprise usage.', x: '80%', y: '68%' },
  { label: 'Connect', category: 'Zero-Trust Fabric', description: 'End-to-end cryptographic handshakes seamlessly linking hybrid clouds and branches.', x: '50%', y: '42%' },
];

export function AIIntelligenceSection() {
  const [selectedNode, setSelectedNode] = useState<IntelligenceNode>(aiNodes[4]);

  return (
    <section className="py-28 md:py-36 bg-[#020617] text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Cinematic Digital Network Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-15" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800 uppercase mb-4">
            <SparklesAIIcon size={16} className="text-cyan-400" />
            AI & Autonomous Systems
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Smarter technology starts with intelligence.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            We integrate intelligent telemetry and predictive intelligence directly into enterprise foundations. Systems that don't just react to failures—they anticipate and resolve them autonomously.
          </p>
        </div>

        {/* Interactive Neural Topology Canvas */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive Visual Network Display */}
            <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] rounded-2xl bg-[#03091e] border border-cyan-950/60 p-6 flex items-center justify-center overflow-hidden">
              {/* Connecting Lines Canvas Simulation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                <line x1="18%" y1="28%" x2="50%" y2="42%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="68%" y1="22%" x2="50%" y2="42%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="35%" y1="65%" x2="50%" y2="42%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="80%" y1="68%" x2="50%" y2="42%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="18%" y1="28%" x2="35%" y2="65%" stroke="#0284c7" strokeWidth="1" opacity="0.6" />
                <line x1="68%" y1="22%" x2="80%" y2="68%" stroke="#0284c7" strokeWidth="1" opacity="0.6" />
              </svg>

              {/* Central Glowing Core */}
              <div className="absolute w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl animate-pulse pointer-events-none" />

              {/* Interactive Floating Intelligence Nodes */}
              {aiNodes.map((node) => {
                const isSelected = selectedNode.label === node.label;
                return (
                  <button
                    key={node.label}
                    onClick={() => setSelectedNode(node)}
                    style={{ left: node.x, top: node.y }}
                    className={cn(
                      'absolute -translate-x-1/2 -translate-y-1/2 px-4 py-2.5 rounded-full font-mono text-xs transition-all duration-300 flex items-center gap-2 group cursor-pointer z-20',
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-400/40 scale-110 border-2 border-white ring-4 ring-cyan-500/30'
                        : 'bg-slate-900/90 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 hover:scale-105'
                    )}
                  >
                    <span className={cn('w-2 h-2 rounded-full', isSelected ? 'bg-slate-950' : 'bg-cyan-400 animate-ping')} />
                    <span>{node.label}</span>
                  </button>
                );
              })}

              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                <NicLogoIcon size={16} className="text-cyan-400 animate-pulse" />
                <span>INTERACTIVE TOPOLOGY • SELECT A FUNCTION</span>
              </div>
            </div>

            {/* Node Detail Pane */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full bg-slate-950/70 p-7 rounded-2xl border border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <BrainCircuitIcon size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                      {selectedNode.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {selectedNode.label}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedNode.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ElegantCheckIcon size={14} className="text-cyan-400 shrink-0" />
                    <span>Zero human intervention required</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ElegantCheckIcon size={14} className="text-cyan-400 shrink-0" />
                    <span>Millisecond evaluation latency</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ElegantCheckIcon size={14} className="text-cyan-400 shrink-0" />
                    <span>Continuous automated learning</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SYSTEM ENGINE: V4.8</span>
                <span className="text-cyan-400 font-semibold">ONLINE</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

