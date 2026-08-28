import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronDown, Shield, Code, Cpu, Cloud, Users, Palette, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenContact?: () => void;
  onOpenAIQuiz?: () => void;
  onSelectServiceId?: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenAIQuiz, onSelectServiceId }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceNav = (serviceId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onSelectServiceId) {
      onSelectServiceId(serviceId);
    }
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 bg-[#0047FF] rounded-sm flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors shrink-0">
              <div className="w-4 h-4 bg-white rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight uppercase text-[#1a1a1a] font-heading whitespace-nowrap leading-none">
                nxt info <span className="text-[#0047FF]">tech</span>
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold whitespace-nowrap mt-0.5">
                Software Excellence
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-600">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => scrollTo('services')}
                className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 flex items-center gap-1 transition-colors cursor-pointer"
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-96 p-3 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-900/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-1 gap-1">
                  <button 
                    onClick={() => handleSelectServiceNav('custom-software')}
                    className="w-full text-left p-2.5 rounded-md hover:bg-slate-50 transition-colors group flex items-start gap-3 cursor-pointer"
                  >
                    <div className="p-2 rounded bg-blue-50 text-[#0047FF] group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 text-xs font-bold group-hover:text-[#0047FF]">Custom Software Engineering</div>
                      <div className="text-[11px] text-slate-500">Microservices, Web & High-Throughput APIs</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSelectServiceNav('ai-data')}
                    className="w-full text-left p-2.5 rounded-md hover:bg-slate-50 transition-colors group flex items-start gap-3 cursor-pointer"
                  >
                    <div className="p-2 rounded bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 text-xs font-bold group-hover:text-indigo-600">AI, GenAI & Data Intelligence</div>
                      <div className="text-[11px] text-slate-500">Enterprise LLMs, RAG & Autonomous Agents</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSelectServiceNav('cloud-devops')}
                    className="w-full text-left p-2.5 rounded-md hover:bg-slate-50 transition-colors group flex items-start gap-3 cursor-pointer"
                  >
                    <div className="p-2 rounded bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 text-xs font-bold group-hover:text-sky-600">Cloud & DevOps Modernization</div>
                      <div className="text-[11px] text-slate-500">Kubernetes, Terraform & GitOps Modernization</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSelectServiceNav('dedicated-teams')}
                    className="w-full text-left p-2.5 rounded-md hover:bg-slate-50 transition-colors group flex items-start gap-3 cursor-pointer"
                  >
                    <div className="p-2 rounded bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 text-xs font-bold group-hover:text-emerald-600">Dedicated Agile Engineering Pods</div>
                      <div className="text-[11px] text-slate-500">Senior cross-functional pods operational in 10 days</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSelectServiceNav('product-design')}
                    className="w-full text-left p-2.5 rounded-md hover:bg-slate-50 transition-colors group flex items-start gap-3 cursor-pointer"
                  >
                    <div className="p-2 rounded bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 text-xs font-bold group-hover:text-pink-600">Digital Product Design & UX/UI</div>
                      <div className="text-[11px] text-slate-500">Design systems, Figma tokens & rapid prototyping</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollTo('industries')}
              className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Industries
            </button>

            <button 
              onClick={() => scrollTo('case-studies')}
              className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Success Stories
            </button>

            <button 
              onClick={() => scrollTo('why-us')}
              className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              About
            </button>

            <button 
              onClick={() => scrollTo('tech-radar')}
              className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Technologies
            </button>

            <button 
              onClick={() => scrollTo('careers')}
              className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Careers
            </button>

            <button 
              onClick={() => scrollTo('contact')}
              className="px-3.5 py-2 rounded-sm hover:text-[#0047FF] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onOpenAIQuiz || (() => scrollTo('ai-scorecard'))}
              className="text-xs font-bold text-slate-700 hover:text-[#0047FF] px-3.5 py-2.5 rounded-sm border border-slate-200 hover:border-blue-300 bg-white transition-all cursor-pointer uppercase tracking-wider"
            >
              AI Diagnostic
            </button>

            <button
              id="header-cta-contact-btn"
              onClick={onOpenContact || (() => scrollTo('contact'))}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              <span>WORK WITH US</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl text-left">
            <button 
              onClick={() => scrollTo('services')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              Services & Capabilities
            </button>
            <button 
              onClick={() => scrollTo('industries')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollTo('case-studies')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              Success Stories & Case Studies
            </button>
            <button 
              onClick={() => scrollTo('ai-scorecard')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              AI Readiness Scorecard
            </button>
            <button 
              onClick={() => scrollTo('why-us')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              About NXT INFO TECH (Est. 2024)
            </button>
            <button 
              onClick={() => scrollTo('tech-radar')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollTo('careers')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              Careers at Chennai HQ
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full text-left px-3 py-2.5 rounded-md text-slate-800 font-semibold hover:bg-slate-50"
            >
              Contact Us & Office Address
            </button>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                  else scrollTo('contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase shadow-sm cursor-pointer"
              >
                <span>WORK WITH US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
