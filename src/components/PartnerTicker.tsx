import React from 'react';
import { TRUST_PARTNERS } from '../data/mockData';
import { ShieldCheck, Cloud, Award, Sparkles } from 'lucide-react';

export const PartnerTicker: React.FC = () => {
  return (
    <section className="py-6 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Certified Cloud & AI Technology Ecosystem
          </p>
          <div className="flex items-center gap-2 text-[11px] text-[#0047FF] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Audited for ISO 27001 & SOC 2 Type II Security Standards</span>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Moving Ticker */}
        <div className="flex items-center gap-4 justify-center flex-wrap px-4 max-w-7xl mx-auto">
          {TRUST_PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-default group"
            >
              <Cloud className="w-4 h-4 text-[#0047FF] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-slate-800 group-hover:text-[#0047FF]">
                {partner.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-500 font-mono font-medium">
                {partner.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
