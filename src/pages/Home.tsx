import { Link } from 'react-router-dom';
import MoltenMetal from '../components/visuals/MoltenMetal';
import StrokeText from '../components/visuals/StrokeText';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProjectCard } from '../components/cards/ProjectCard';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[80vh] bg-[#02061A]">
        {/* MoltenMetal WebGL background */}
        <div className="absolute inset-0 z-0">
          <MoltenMetal
            color1="#020B2E"
            color2="#0284C7"
            color3="#BAE6FD"
            speed={0.28}
            scale={3.5}
            detail={4}
            glow={1.8}
            coreSize={0.12}
            swirl={0.8}
            fold={-0.18}
            blackPoint={0.04}
            brightness={1.4}
            colorMode="molten"
            grain={true}
            grainIntensity={0.04}
            mouseInteraction={true}
            mouseStrength={0.25}
            opacity={1}
          />
        </div>

        {/* Gradient fade at bottom so the hero blends into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-20 -mt-6 sm:-mt-10 lg:-mt-14">
          <div className="max-w-4xl">
            <div className="mb-6 max-w-full overflow-hidden">
              <StrokeText
                text="Connect. Secure. Support."
                strokeColor="#38BDF8"
                fillColor="#F8FAFC"
                strokeWidth={1.8}
                drawDuration={1.6}
                fillDelay={0.25}
                stagger={0.04}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={800}
                letterSpacing={-2}
                preserveAspectRatio="xMinYMid meet"
                className="w-full"
              />
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Technology infrastructure built for businesses that cannot afford downtime. We design, deploy, and secure modern business networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold border-sky-400">Start a Project</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/60 text-white hover:bg-white/10 hover:border-white">Explore Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CORE SERVICES */}
      <section className="py-24 relative bg-background border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeader 
              title="Technology Infrastructure That Works"
              subtitle="From high-availability connectivity to zero-trust security, we design, deploy, and support end-to-end technology systems built for modern enterprises."
              badge="OUR SERVICES"
              className="mb-0 max-w-3xl"
            />
            <Link to="/services" className="shrink-0">
              <Button variant="outline" className="hidden sm:inline-flex border-border/80 hover:border-primary">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 6).map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Link to="/services">
              <Button variant="outline" className="w-full">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NIC+ */}
      <section className="py-24 bg-surface/50 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-tech-gradient opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeader 
                title="Engineering First. Business Focused."
                subtitle="Why leading enterprises choose NIC+ as their primary network and cybersecurity infrastructure partner."
                badge="WHY NIC+"
                className="mb-10"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Engineering-Driven', desc: 'Solutions tailored to physical and logical requirements rather than rigid generic bundles.' },
                  { title: 'Enterprise Scalability', desc: 'Modular architectures designed to scale seamlessly without ripping and replacing.' },
                  { title: 'Security by Design', desc: 'Controls, segmentations, and hardening baked into every layer from day one.' },
                  { title: '99.99% Reliability', desc: 'Obsessive focus on redundancy, failover protocols, and operational uptime.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-surface border border-border/70 hover:border-primary/50 transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h4 className="text-text-main font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-border overflow-hidden shadow-2xl bg-surface">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Enterprise Infrastructure & Datacenter" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6 bg-surface border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Uptime SLA Target</p>
                      <p className="text-text-main font-bold text-xl text-primary">99.99%</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Response Time</p>
                      <p className="text-text-main font-bold text-xl">&lt; 15 min</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Coverage</p>
                      <p className="text-text-main font-bold text-xl">24/7/365</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="How We Work"
            centered
            badge="OUR PROCESS"
          />
          <div className="mt-16 flex flex-col md:flex-row relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
            
            {[
              { num: '01', title: 'Assess', desc: 'Understand business risks and requirements.' },
              { num: '02', title: 'Design', desc: 'Develop the appropriate architecture.' },
              { num: '03', title: 'Deploy', desc: 'Install and integrate infrastructure.' },
              { num: '04', title: 'Secure', desc: 'Apply security controls and hardening.' },
              { num: '05', title: 'Support', desc: 'Monitor and maintain the environment.' }
            ].map((step, i) => (
              <div key={i} className="flex-1 relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary font-bold text-lg mb-6 shadow-md">
                  {step.num}
                </div>
                <h4 className="text-text-main font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader 
              title="Recent Deployments"
              badge="PROJECTS"
              className="mb-0"
            />
            <Link to="/projects" className="hidden md:flex items-center text-primary font-medium hover:text-primary-hover">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.06)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Ready to upgrade your infrastructure?</h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Get a professional assessment and technical proposal for your next IT project.
          </p>
          <Link to="/contact">
            <Button size="lg">Request a Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
