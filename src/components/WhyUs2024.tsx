import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

export const WhyUs2024: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              The NXT INFO TECH Advantage
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Why being{' '}
            <span className="text-[#0047FF]">
              born in 2024
            </span>{' '}
            is your biggest competitive edge
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Legacy IT consultancies were built for the on-premise, waterfall era. <strong className="text-[#1a1a1a]">NXT INFO TECH</strong> was architected from Day 1 for AI-assisted engineering velocity, modern cloud-native scale, and zero technical debt.
          </p>
        </div>

        {/* Comparison Table: Traditional IT vs NXT INFO TECH */}
        <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1a1a]">
              The Engineering Velocity Comparison
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              How our 2024 foundation delivers 3.4x faster delivery than legacy agencies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 font-mono text-[11px] uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6 text-slate-700 font-bold">Dimension</th>
                  <th className="py-4 px-6 text-slate-600 font-medium">Traditional IT / Legacy Consultancies</th>
                  <th className="py-4 px-6 text-[#0047FF] font-bold bg-blue-50/70 border-l border-r border-blue-200">
                    NXT INFO TECH (Founded 2024)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1a1a1a]">Developer Workflow</td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Manual boilerplate coding, billable-hours model</span>
                  </td>
                  <td className="py-4 px-6 text-[#1a1a1a] font-semibold bg-blue-50/30 border-l border-r border-blue-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0047FF] shrink-0" />
                      <span>AI-augmented developer copilot pods (+340% velocity)</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1a1a1a]">Team Onboarding</td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>6 to 12 weeks of bureaucratic staffing cycles</span>
                  </td>
                  <td className="py-4 px-6 text-[#1a1a1a] font-semibold bg-blue-50/30 border-l border-r border-blue-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0047FF] shrink-0" />
                      <span>Operational agile pods integrated in 10 business days</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1a1a1a]">Cloud Architecture</td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Lift-and-shift VMs, heavy monolithic legacy baggage</span>
                  </td>
                  <td className="py-4 px-6 text-[#1a1a1a] font-semibold bg-blue-50/30 border-l border-r border-blue-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0047FF] shrink-0" />
                      <span>Cloud-native Kubernetes, Terraform GitOps & microservices</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1a1a1a]">IP & Code Ownership</td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Proprietary vendor lock-in & licensing fees</span>
                  </td>
                  <td className="py-4 px-6 text-[#1a1a1a] font-semibold bg-blue-50/30 border-l border-r border-blue-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0047FF] shrink-0" />
                      <span>100% Client Code & IP ownership transferred daily</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1a1a1a]">Quality & Testing</td>
                  <td className="py-4 px-6 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Slow manual QA cycles with high release regression</span>
                  </td>
                  <td className="py-4 px-6 text-[#1a1a1a] font-semibold bg-blue-50/30 border-l border-r border-blue-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0047FF] shrink-0" />
                      <span>Automated E2E Playwright testing & SAST/DAST CI gates</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
