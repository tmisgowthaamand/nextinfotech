import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  IndianRupee, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Sparkles, 
  Upload, 
  Send,
  GraduationCap,
  FileText,
  Building,
  ShieldCheck
} from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedInOrGithub: '',
    portfolioUrl: '',
    coverNote: '',
    resumeFileName: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resumeFileName: e.target.files![0].name
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedInOrGithub: '',
      portfolioUrl: '',
      coverNote: '',
      resumeFileName: ''
    });
  };

  return (
    <section id="careers" className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Careers at nxt info tech • Chennai HQ
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Apply to join our{' '}
            <span className="text-[#0047FF]">
              engineering team
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We are hiring top-tier software engineers, AI architects, and cloud builders in Chennai. Submit your profile and resume below to get fast-tracked for an interview within 48 hours.
          </p>
        </div>

        {/* 2-Column Layout: Left Info/Perks, Right Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Why Join & Chennai HQ Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#1a1a1a] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0047FF]" />
                Why Engineer at nxt info tech?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-[#0047FF] flex items-center justify-center shrink-0 border border-blue-100">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">AI-Native Tooling & Pods</div>
                    <div className="text-slate-500 text-xs mt-0.5">Work with enterprise Copilots, LLM test synthesizers, and modern event-driven architectures.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">Top Market Compensation</div>
                    <div className="text-slate-500 text-xs mt-0.5">Top 5% industry salary structures, performance bonuses, and ESOP wealth creation.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">100% Certification Sponsorship</div>
                    <div className="text-slate-500 text-xs mt-0.5">Full sponsorship for AWS, GCP, CKA Kubernetes, and GenAI certification programs.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">Chennai HQ • Flexible Hybrid</div>
                    <div className="text-slate-500 text-xs mt-0.5">Modern engineering delivery hub in Chennai with autonomous pod culture and zero bureaucracy.</div>
                  </div>
                </div>
              </div>

              {/* Recruitment SLA Box */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Clock className="w-4 h-4 text-[#0047FF]" />
                  <span>48-Hour Application Review SLA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent 2-Round Technical Evaluation</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Job Application Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-9 shadow-xl text-left">
            
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#1a1a1a]">
                  Application Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your engineering job application has been submitted to our talent acquisition team in Chennai.
                </p>
                <div className="p-3.5 bg-slate-50 rounded-lg text-xs font-mono text-slate-600 max-w-xs mx-auto border border-slate-200">
                  APPLICATION ID: NXT-APP-2026
                </div>
                <p className="text-xs text-slate-500">
                  We will review your resume and reach out via email or phone within 48 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-sm bg-[#1a1a1a] hover:bg-black text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="font-heading text-xl font-bold text-[#1a1a1a]">
                    Candidate Application Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Please provide your contact information and attach your resume.
                  </p>
                </div>

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-[#0047FF] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-[#0047FF] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & LinkedIn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-[#0047FF] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      LinkedIn / GitHub Profile *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.linkedInOrGithub}
                      onChange={e => setFormData({ ...formData, linkedInOrGithub: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-[#0047FF] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Row 3: Portfolio URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Portfolio / Personal Site / Projects URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={e => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-[#0047FF] focus:border-transparent outline-none"
                  />
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Upload Resume / CV (PDF, DOCX) *
                  </label>
                  <div className="border-2 border-dashed border-slate-300 hover:border-[#0047FF] rounded-lg p-4 text-center cursor-pointer transition-colors relative bg-slate-50/50">
                    <input
                      type="file"
                      required={!formData.resumeFileName}
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1 text-xs text-slate-500">
                      <Upload className="w-5 h-5 text-[#0047FF]" />
                      <span className="font-semibold text-slate-800">
                        {formData.resumeFileName ? formData.resumeFileName : 'Click to select or drag and drop your resume file'}
                      </span>
                      <span className="text-[10px] text-slate-400">PDF or Word document up to 10MB</span>
                    </div>
                  </div>
                </div>

                {/* Cover Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Brief Bio / Key Skills Highlight (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.coverNote}
                    onChange={e => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs focus:ring-2 focus:ring-[#0047FF] focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>SUBMITTING APPLICATION...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT JOB APPLICATION (CHENNAI HQ)</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
