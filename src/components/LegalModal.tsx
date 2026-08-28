import React, { useEffect, useRef } from 'react';
import { X, ArrowLeft, ShieldCheck, FileText, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  onBackToHome: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, onBackToHome }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  if (!type) return null;

  const scrollToModalTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    onClose();
    onBackToHome();
  };

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-md bg-[#0047FF] hover:bg-blue-700 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>BACK TO HOME</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={scrollToModalTop}
              title="Scroll to Top of Document"
              className="p-1.5 sm:p-2 rounded-md hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-md hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div 
          ref={contentRef}
          className="p-4 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed custom-scrollbar"
        >
          
          {/* Top Title Banner */}
          <div className="space-y-2 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0047FF] text-xs font-bold uppercase tracking-wider">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <span>{isPrivacy ? 'LEGAL & PRIVACY FRAMEWORK' : 'TERMS OF SERVICE AGREEMENT'}</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              {isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
            </h1>

            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              LAST UPDATED: JANUARY 2026 • EFFECTIVE FOR ALL NXT INFO TECH SERVICES, CONSULTING ENGAGEMENTS, AND CANDIDATE APPLICATIONS.
            </p>
          </div>

          {isPrivacy ? (
            /* Privacy Policy Content */
            <div className="space-y-6">
              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">1. INTRODUCTION & OVERVIEW</h2>
                <p>
                  <strong>NXT INFO TECH</strong> ("we", "our", or "us") is dedicated to safeguarding the privacy and confidentiality of our clients, prospective partners, and job applicants. This Privacy Policy details how we collect, store, utilize, and protect your information across our website and engineering services.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">2. INFORMATION WE COLLECT</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Contact & Consultation Data:</strong> Full name, corporate email address, phone number, company name, and project scope submitted via our contact forms.</li>
                  <li><strong>Candidate Application Data:</strong> Resumes/CVs, LinkedIn/GitHub profile URLs, portfolio links, and employment history submitted through our Careers portal.</li>
                  <li><strong>Technical & Analytical Logs:</strong> Non-identifiable diagnostic metrics, browser types, and session telemetry used strictly to optimize website performance.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">3. PURPOSE AND USE OF DATA</h2>
                <p>We use the data collected strictly for legitimate business purposes, including:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Formulating customized architectural proposals and RFP estimates.</li>
                  <li>Evaluating job candidates for technical engineering pods in Chennai.</li>
                  <li>Executing client software development contracts and sprint milestones.</li>
                  <li>We never sell, rent, or trade your personal or business data to third parties.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">4. DATA SECURITY & STORAGE</h2>
                <p>
                  All client and candidate information is protected with industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest). Access to sensitive codebases, NDAs, and candidate resumes is restricted strictly to authorized technical leads on a need-to-know basis.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">5. YOUR DATA RIGHTS</h2>
                <p>
                  You retain the right to access, rectify, or request deletion of any personal data submitted to us. To exercise your rights or request data erasure, please contact our privacy desk at the details below.
                </p>
              </section>
            </div>
          ) : (
            /* Terms and Conditions Content */
            <div className="space-y-6">
              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">1. ACCEPTANCE OF TERMS</h2>
                <p>
                  By accessing the <strong>NXT INFO TECH</strong> website or engaging our software engineering services, you agree to be bound by these Terms & Conditions and all applicable local and international laws.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">2. SCOPE OF ENGINEERING SERVICES</h2>
                <p>
                  <strong>NXT INFO TECH</strong> delivers bespoke software engineering, AI/ML platform development, cloud infrastructure modernization, and dedicated agile engineering squads. Detailed deliverables, acceptance criteria, and timelines are governed by mutual Statements of Work (SOW) executed between parties.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">3. INTELLECTUAL PROPERTY (IP) OWNERSHIP</h2>
                <p>
                  All custom source code, documentation, architectures, and deliverables created specifically for client projects belong 100% to the client upon settlement of invoice milestones. <strong>NXT INFO TECH</strong> asserts no proprietary claim over bespoke client IP.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">4. CONFIDENTIALITY & NON-DISCLOSURE (NDA)</h2>
                <p>
                  We treat all client business logic, proprietary datasets, and trade secrets with strict confidentiality under mutual Non-Disclosure Agreements (NDAs).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-heading text-base font-bold text-slate-900 uppercase tracking-wider">5. GOVERNING LAW & JURISDICTION</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
                </p>
              </section>
            </div>
          )}

          {/* Contact Details & Address Box */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">
              OFFICIAL CONTACT & GRIEVANCE OFFICE
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0047FF] shrink-0 mt-0.5" />
                <span>
                  <strong>NXT INFO TECH:</strong> 5/79, Perumal Koil Street, Sadanandapuram, Thandalam, Tamil Nadu 600128, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0047FF] shrink-0" />
                <span><strong>PHONE:</strong> +91 97916 59816</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0047FF] shrink-0" />
                <span><strong>EMAIL:</strong> contact@nxtinfo.tech / legal@nxtinfo.tech</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
