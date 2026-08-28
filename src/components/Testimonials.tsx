import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Award, CheckCircle, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Client Trust & Reviews
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Trusted by technology leaders{' '}
            <span className="text-[#0047FF]">
              globally
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Hear directly from engineering VPs, CTOs, and product executives who rely on nxt info tech for their core software roadmap.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700 uppercase tracking-wider">
                    {t.companyLogoText}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-blue-100 absolute -top-3 -left-2 -z-0" />
                  <p className="text-sm text-slate-700 leading-relaxed relative z-10 italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-[#1a1a1a] text-sm">{t.clientName}</div>
                  <div className="text-xs text-slate-500">{t.clientRole}, {t.company}</div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[11px] font-semibold text-[#0047FF] block uppercase tracking-wider">{t.projectType}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{t.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-slate-700 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0047FF]" />
            <span className="font-bold uppercase tracking-wider">100% Verified Clutch Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0047FF]" />
            <span className="font-bold uppercase tracking-wider">98% On-Time Sprint SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0047FF]" />
            <span className="font-bold uppercase tracking-wider">Zero Technical Debt Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
