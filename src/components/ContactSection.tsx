import React, { useState } from 'react';
import { Send, ShieldCheck, Mail, Phone, MapPin, Calendar, Clock, CheckCircle2, Sparkles, Lock, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialService?: string;
  initialEstimate?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialEstimate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [serviceRequired, setServiceRequired] = useState(initialService || '');
  const [budgetRange, setBudgetRange] = useState('');
  const [timeline, setTimeline] = useState('');
  const [projectDetails, setProjectDetails] = useState(
    initialEstimate ? `Estimate Reference: ${initialEstimate}` : ''
  );
  const [ndaRequested, setNdaRequested] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0047FF', '#ff9933', '#138808', '#ffffff']
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Direct Solution Architect Consultation • India & Global
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Let's build something{' '}
            <span className="text-[#0047FF]">
              extraordinary together
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Schedule a confidential 30-minute discovery call with our Principal Technical Architects in Chennai. We'll evaluate your technical scope and provide an architectural roadmap.
          </p>
        </div>

        {/* Grid: Left Info & Calendar, Right RFP Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct info & Guarantees */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 space-y-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-[#1a1a1a]">
                What happens after you submit?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-sm bg-blue-50 text-[#0047FF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-blue-100">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">Mutual NDA Execution</div>
                    <div className="text-slate-500 text-xs mt-0.5">We execute a non-disclosure agreement to safeguard your proprietary intellectual property.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-sm bg-blue-50 text-[#0047FF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-blue-100">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">30-Minute Technical Discovery</div>
                    <div className="text-slate-500 text-xs mt-0.5">Direct discussion with a Principal Engineer / Solution Architect — not a salesperson.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-sm bg-blue-50 text-[#0047FF] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-blue-100">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">Architectural Proposal & Team Roster</div>
                    <div className="text-slate-500 text-xs mt-0.5">Receive a detailed scope breakdown, sprint milestones, and dedicated team resumes within 48 hours.</div>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs">
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#0047FF] shrink-0 mt-0.5" />
                  <div className="font-medium leading-relaxed">
                    <span className="font-bold text-slate-900 block">NXT INFO TECH Office:</span>
                    5/79, Perumal Koil Street, Sadanandapuram, Thandalam, Tamil Nadu 600128
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-[#0047FF] shrink-0" />
                  <span className="font-medium text-slate-900 font-bold">+91 97916 59816</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-[#0047FF] shrink-0" />
                  <a href="mailto:contact@nxtinfo.tech" className="font-medium hover:text-[#0047FF]">
                    contact@nxtinfo.tech
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Response Time: &lt; 2 business hours (IST / Global)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-4 sm:p-8 shadow-xl text-left">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1a1a1a]">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Our Solution Architect lead will review your project requirements for <strong>{company || 'your organization'}</strong> and send the calendar confirmation to <strong>{email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setProjectDetails('');
                    }}
                    className="px-6 py-2.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Your Name *</label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Work Email *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Company / Organization *</label>
                    <input
                      required
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Primary Service Required</label>
                    <select
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white cursor-pointer"
                    >
                      <option value=""></option>
                      <option value="Custom Software Engineering">Custom Software Engineering</option>
                      <option value="AI, GenAI & Data Intelligence">AI, GenAI & Data Intelligence</option>
                      <option value="Cloud & DevOps Modernization">Cloud & DevOps Modernization</option>
                      <option value="Dedicated Agile Engineering Pod">Dedicated Agile Engineering Pod</option>
                      <option value="Product UI/UX & Design Systems">Product UI/UX & Design Systems</option>
                      <option value="Automated QA & Security Testing">Automated QA & Security Testing</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Target Timeline</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white cursor-pointer"
                    >
                      <option value=""></option>
                      <option value="Immediate (within 2 weeks)">Immediate (within 2 weeks)</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Next Quarter (Q4 / Q1)">Next Quarter (Q4 / Q1)</option>
                      <option value="Exploring / Initial Budgeting">Exploring / Initial Budgeting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Estimated Monthly Budget</label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white cursor-pointer"
                    >
                      <option value=""></option>
                      <option value="< ₹10 Lakhs / month (MVP Sprint)">&lt; ₹10 Lakhs / month (MVP Sprint)</option>
                      <option value="₹10 Lakhs - ₹25 Lakhs / month (Standard Agile Pod)">₹10 Lakhs - ₹25 Lakhs / month (Standard Agile Pod)</option>
                      <option value="₹25 Lakhs - ₹60 Lakhs / month (Multi-Pod Scale)">₹25 Lakhs - ₹60 Lakhs / month (Multi-Pod Scale)</option>
                      <option value="₹60 Lakhs - ₹1.5 Crore+ / month (Enterprise Scale)">₹60 Lakhs - ₹1.5 Crore+ / month (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Details */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-slate-700 font-bold">Project Details & Technical Goals</label>
                  <textarea
                    rows={4}
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#0047FF] focus:bg-white resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="nda-check"
                    checked={ndaRequested}
                    onChange={(e) => setNdaRequested(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 accent-[#0047FF] cursor-pointer"
                  />
                  <label htmlFor="nda-check" className="text-xs text-slate-600 cursor-pointer">
                    Please send a Mutual NDA before our technical discovery call.
                  </label>
                </div>

                <button
                  type="submit"
                  id="submit-contact-rfp-btn"
                  className="w-full py-4 px-6 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND PROJECT INQUIRY & BOOK DISCOVERY CALL</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
