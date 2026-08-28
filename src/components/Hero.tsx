import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenAIQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenAIQuiz }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-slate-100">
      {/* Background radial dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0047FF] rounded-full blur-[120px] opacity-[0.06] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top accent tag matching design */}
            <div className="flex items-center gap-2">
              <span className="w-12 h-[1px] bg-[#0047FF]"></span>
              <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
                Established 2024 • India's AI-Native Engineering Partner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a1a1a] tracking-tight leading-[1.1]">
              Engineering <br />
              <span className="text-[#0047FF]">Software Excellence</span> <br />
              from India to the World.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl font-normal leading-relaxed">
              We build high-performing agile engineering pods in Chennai that accelerate product delivery through cutting-edge AI architectures, cloud microservices, and zero technical debt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-start-project-btn"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1a1a1a] hover:bg-black text-white text-sm font-bold rounded-sm tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                <span>WORK WITH US</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-services-btn"
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-200 hover:border-slate-400 bg-white text-slate-800 text-sm font-bold rounded-sm tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0047FF]" />
                <span>EXPLORE CAPABILITIES</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-slate-200 rounded-3xl bg-white shadow-2xl p-4 overflow-hidden text-left group">
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-[1/1] flex items-center justify-center">
                <img
                  src="/hero.jpg"
                  alt="nxt info tech - Engineering Software Excellence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Action button below image */}
              <div className="pt-4">
                <button
                  onClick={onOpenAIQuiz}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-[#0047FF] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer group shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-300" />
                    Take AI Readiness Assessment
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#0047FF] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Bottom Live Metrics Banner matching design aesthetic */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-0 sm:divide-x sm:divide-slate-100 bg-white">
          <div className="flex flex-col justify-center px-3 sm:px-6 py-4 text-left border-b sm:border-b-0 border-slate-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">60+</span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Core Deliveries</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Since 2024 inception</span>
          </div>

          <div className="flex flex-col justify-center px-3 sm:px-6 py-4 text-left border-b sm:border-b-0 border-slate-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">380+</span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Senior Engineers</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Chennai Delivery HQ</span>
          </div>

          <div className="flex flex-col justify-center px-3 sm:px-6 py-4 text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">12</span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Cloud & AI Partners</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">AWS, GCP, Azure, Cloud</span>
          </div>

          <div className="flex flex-col justify-center px-3 sm:px-6 py-4 text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">98%</span>
            <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Client Retention</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">India & Global enterprises</span>
          </div>
        </div>

      </div>
    </section>
  );
};
