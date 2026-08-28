import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, TrendingUp, Cpu, Server, ShieldCheck, ArrowRight, Star } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartSimilar: (title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onStartSimilar }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-left">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-white border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-sm bg-blue-50 text-[#0047FF] border border-blue-100 text-xs font-bold uppercase tracking-wider">
                {caseStudy.industry} Case Study
              </span>
              <span className="text-xs text-slate-500 font-medium">Client: {caseStudy.client}</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1a1a1a] leading-tight">
              {caseStudy.title}
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-md bg-slate-100 text-slate-500 hover:text-black hover:bg-slate-200 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Hero Metric Banner */}
          <div className="p-6 rounded-lg bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Key Business Outcome Delivered:</span>
              <div className="font-heading text-3xl sm:text-4xl font-black text-[#0047FF] mt-1">
                {caseStudy.heroMetric}
              </div>
              <div className="text-sm font-semibold text-slate-700">{caseStudy.heroMetricLabel}</div>
            </div>
            <button
              onClick={() => {
                onClose();
                onStartSimilar(caseStudy.title);
              }}
              className="px-5 py-3 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-md"
            >
              <span>Build a Similar Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs uppercase font-bold text-rose-600 flex items-center gap-1.5 tracking-wider">
                The Client Challenge
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs uppercase font-bold text-emerald-600 flex items-center gap-1.5 tracking-wider">
                nxt info tech Solution & Architecture
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Measured Results */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold text-[#0047FF] flex items-center gap-2 tracking-wider">
              <TrendingUp className="w-4 h-4" />
              Verified Results & Engineering Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.results.map((res, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0047FF] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold text-slate-700 flex items-center gap-2 tracking-wider">
              <Server className="w-4 h-4 text-[#0047FF]" />
              Technologies & Infrastructure Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-sm bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {caseStudy.testimonial && (
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <blockquote className="text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300"
                />
                <div>
                  <div className="text-xs font-bold text-[#1a1a1a]">{caseStudy.testimonial.author}</div>
                  <div className="text-[11px] text-slate-500">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
