import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111625] text-slate-400 border-t border-slate-800 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#0047FF] rounded-sm flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                <div className="w-4 h-4 bg-white rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight uppercase text-white font-heading whitespace-nowrap leading-none">
                  nxt info <span className="text-[#0047FF]">tech</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold whitespace-nowrap mt-0.5">
                  Software Excellence
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              India's premier AI-native software engineering consultancy founded in 2024. Building custom cloud platforms, autonomous LLM agents, and dedicated agile squads with zero technical debt from Chennai, India.
            </p>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Custom Software</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">AI & GenAI Solutions</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Cloud & DevOps</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Dedicated Agile Pods</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Product UX/UI Design</button></li>
            </ul>
          </div>

          {/* Industries & Domains */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Core Domains</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('industries')} className="hover:text-white transition-colors cursor-pointer">FinTech & Financial Services</button></li>
              <li><button onClick={() => scrollTo('industries')} className="hover:text-white transition-colors cursor-pointer">HealthTech & ABDM</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Enterprise Cloud Systems</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">AI & Intelligent Automation</button></li>
            </ul>
          </div>

          {/* Company & Careers */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Company & Careers</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('why-us')} className="hover:text-white transition-colors cursor-pointer">Why NXT INFO TECH (Est. 2024)</button></li>
              <li><button onClick={() => scrollTo('careers')} className="hover:text-white transition-colors cursor-pointer text-[#0047FF] font-bold">Careers (Chennai HQ)</button></li>
              <li><button onClick={() => scrollTo('ai-scorecard')} className="hover:text-white transition-colors cursor-pointer">AI Readiness Quiz</button></li>
              <li><button onClick={() => scrollTo('case-studies')} className="hover:text-white transition-colors cursor-pointer">Success Stories</button></li>
              <li><button onClick={() => scrollTo('tech-radar')} className="hover:text-white transition-colors cursor-pointer">Technology Radar</button></li>
            </ul>
          </div>

          {/* Contact & Office Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Contact & Office</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0047FF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  5/79, Perumal Koil Street, Sadanandapuram, Thandalam, Tamil Nadu 600128
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#0047FF] shrink-0" />
                <a href="tel:9791659816" className="text-blue-400 hover:text-blue-300 font-bold font-mono">
                  +91 97916 59816
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#0047FF] shrink-0" />
                <a href="mailto:contact@nxtinfo.tech" className="hover:text-white">
                  contact@nxtinfo.tech
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2024–2026 NXT INFO TECH. All rights reserved. Registered in India (Chennai HQ).
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer uppercase tracking-wider font-semibold"
            >
              PRIVACY POLICY
            </button>
            <button 
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer uppercase tracking-wider font-semibold"
            >
              TERMS & CONDITIONS
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
