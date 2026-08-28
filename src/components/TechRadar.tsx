import React, { useState } from 'react';
import { TECH_RADAR_CATEGORIES } from '../data/mockData';
import { Layers, Terminal, Sparkles, Server, Check } from 'lucide-react';

export const TechRadar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(TECH_RADAR_CATEGORIES[0].name);

  const currentCategory = TECH_RADAR_CATEGORIES.find(c => c.name === activeCategory) || TECH_RADAR_CATEGORIES[0];

  return (
    <section id="tech-radar" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Modern Engineering Stack
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Our technology &{' '}
            <span className="text-[#0047FF]">
              cloud ecosystem
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Battle-tested frameworks, state-of-the-art AI architectures, and cloud-native standards used across our client projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TECH_RADAR_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.name
                  ? 'bg-[#1a1a1a] text-white shadow-sm'
                  : 'bg-slate-50 border border-slate-200 text-slate-700 hover:text-black hover:bg-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-4 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all text-left flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0047FF] group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-mono font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#0047FF] transition-colors">
                  {item}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 shrink-0">
                PROD-READY
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div>
            <div className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">
              Need a bespoke proprietary tech stack or custom framework?
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Our principal architects evaluate technical trade-offs during our free discovery session.
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-wider text-[#0047FF] hover:underline transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Speak with Solution Architects →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
