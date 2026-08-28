import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/mockData';
import { IndustryItem } from '../types';
import { Landmark, Stethoscope, Radio, ShoppingBag, Layers, Zap, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry?: (industry: IndustryItem) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (icon: string) => {
    switch (icon) {
      case 'Landmark': return <Landmark className="w-6 h-6 text-cyan-400" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-indigo-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-sky-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      default: return <Landmark className="w-6 h-6 text-cyan-400" />;
    }
  };

  const activeIndustry = INDUSTRIES_DATA.find(i => i.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Domain Engineering Expertise
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Tailored software solutions for{' '}
            <span className="text-[#0047FF]">
              mission-critical industries
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We combine deep regulatory compliance knowledge with modern cloud & AI architectures to solve specific industry bottlenecks.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-5 sm:p-7 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group bg-white ${
                  isSelected
                    ? 'border-[#0047FF] shadow-lg ring-1 ring-[#0047FF]'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-md bg-blue-50 border border-blue-100 group-hover:scale-105 transition-transform">
                      {getIndustryIcon(ind.icon)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700">
                      {ind.activeClients} Active Engagements
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1a1a1a] group-hover:text-[#0047FF] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0047FF] mt-0.5 uppercase tracking-wider">
                      {ind.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Solutions Pills */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] uppercase text-slate-400 font-bold tracking-wider">Specialized Modules:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.solutions.slice(0, 3).map((sol, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-slate-50 border border-slate-200 text-slate-700">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Metric */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-600 font-medium">
                    <span className="text-[#0047FF] font-bold block">{ind.impactMetric}</span>
                  </div>
                  <div className="text-[#0047FF] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
