import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { Code2, Cpu, Cloud, Users2, Palette, ShieldCheck, Check, ArrowRight, Sparkles, Layers, Box, Terminal } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  activeServiceId?: string;
  onActiveServiceChange?: (id: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  activeServiceId, 
  onActiveServiceChange 
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string>(SERVICES_DATA[0].id);

  const currentId = activeServiceId || internalSelectedId;
  const activeService = SERVICES_DATA.find(s => s.id === currentId) || SERVICES_DATA[0];

  const handleSelectTab = (id: string) => {
    setInternalSelectedId(id);
    if (onActiveServiceChange) {
      onActiveServiceChange(id);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Users2': return <Users2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative border-b border-slate-100">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-10 h-[1px] bg-[#0047FF]"></span>
              <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
                Full-Lifecycle Engineering Services
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
              Software engineering built for the{' '}
              <span className="text-[#0047FF]">
                AI era
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              From autonomous AI copilots to high-throughput cloud backends and dedicated agile squads in Chennai, we engineer software that drives measurable enterprise outcomes.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#1a1a1a] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            <span>REQUEST ARCHITECTURE PROPOSAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Service Selector Grid / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === currentId;
            return (
              <button
                key={service.id}
                onClick={() => handleSelectTab(service.id)}
                className={`p-4 rounded-lg text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between gap-4 ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-lg ring-2 ring-[#0047FF]/40'
                    : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-sm w-fit ${
                  isSelected 
                    ? 'bg-[#0047FF] text-white shadow-sm' 
                    : 'bg-white border border-slate-200 text-[#0047FF]'
                }`}>
                  {getIcon(service.iconName)}
                </div>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block mb-1 ${
                    isSelected ? 'text-slate-300' : 'text-slate-400'
                  }`}>
                    {service.category}
                  </span>
                  <span className="font-heading font-bold text-xs sm:text-sm line-clamp-2 leading-tight">
                    {service.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden text-left animate-in fade-in duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-md bg-blue-50 text-[#0047FF] border border-blue-100">
                  {getIcon(activeService.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#0047FF] tracking-wider">
                    {activeService.category} Architecture
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeService.shortDesc}
              </p>

              {/* Core Features / Capabilities */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block font-mono">
                  &gt;_ Key Capabilities & Architectures
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-md border border-slate-100">
                      <Check className="w-4 h-4 text-[#0047FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block font-mono">
                  &gt;_ Concrete Production Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeService.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0047FF]"></div>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Highlight Metric Card */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                  Measured Client ROI & Impact
                </span>
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a] leading-snug">
                  "{activeService.metricHighlight}"
                </div>
                <div className="text-xs text-slate-500">
                  Benchmarked across 2024–2026 enterprise engagements at nxt info tech.
                </div>
              </div>

              {/* Tech Badges */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
                <span className="text-xs uppercase text-slate-500 font-bold tracking-wider block">
                  Primary Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium hover:border-[#0047FF] hover:text-[#0047FF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectService(activeService)}
                className="w-full py-4 px-6 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONSULT ON {activeService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
