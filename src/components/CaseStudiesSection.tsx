import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/mockData';
import { CaseStudy } from '../types';
import { ArrowRight, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';

interface CaseStudiesSectionProps {
  onViewCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onViewCaseStudy }) => {
  const [filter, setFilter] = useState<string>('All');

  const industries = ['All', 'FinTech', 'HealthTech'];

  const filteredStudies = filter === 'All'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter(cs => cs.industry === filter);

  return (
    <section id="case-studies" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-10 h-[1px] bg-[#0047FF]"></span>
              <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
                Proven Impact & ROI
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
              Client success stories &{' '}
              <span className="text-[#0047FF]">
                engineering breakthroughs
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Explore how our agile teams solved complex architectural challenges and delivered tangible business results.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === ind
                    ? 'bg-[#1a1a1a] text-white shadow-sm'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:text-black hover:bg-white'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onViewCaseStudy(study)}
              className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image header with overlay */}
                <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Metric Pill */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                    <span className="px-2.5 sm:px-3 py-1 rounded-sm bg-white/90 backdrop-blur-md text-[10px] sm:text-xs text-slate-900 font-bold uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <div className="px-2.5 sm:px-3 py-1 rounded-sm bg-[#0047FF] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md">
                      {study.heroMetric} {study.heroMetricLabel.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8 space-y-4 text-left">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Client: {study.client}</div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1a1a] group-hover:text-[#0047FF] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-sm bg-slate-100 text-slate-700 font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                    {study.techStack.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-sm bg-slate-100 text-slate-500 font-mono">
                        +{study.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0047FF] group-hover:underline flex items-center gap-1.5 pt-4">
                  <span>Explore Architecture & Results</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-semibold text-slate-400 pt-4">Read Case Study →</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
