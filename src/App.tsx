import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnerTicker } from './components/PartnerTicker';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AIReadinessQuiz } from './components/AIReadinessQuiz';
import { WhyUs2024 } from './components/WhyUs2024';
import { TechRadar } from './components/TechRadar';
import { Testimonials } from './components/Testimonials';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { CaseStudy, ServiceItem } from './types';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedServiceForRfp, setSelectedServiceForRfp] = useState<string>('');
  const [estimateSummaryForRfp, setEstimateSummaryForRfp] = useState<string>('');
  const [activeServiceId, setActiveServiceId] = useState<string>('custom-software');
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('privacy') || hash.includes('privacy')) {
        setActiveLegalModal('privacy');
      } else if (path.includes('terms') || hash.includes('terms')) {
        setActiveLegalModal('terms');
      } else {
        setActiveLegalModal(null);
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForRfp(service.title);
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectServiceFromNav = (serviceId: string) => {
    setActiveServiceId(serviceId);
  };

  const handleStartSimilarCaseStudy = (caseTitle: string) => {
    setEstimateSummaryForRfp(`Similar Architecture Request: ${caseTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleRoadmap = (scoreSummary: string) => {
    setEstimateSummaryForRfp(`AI Diagnostic Result: ${scoreSummary}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAIQuiz = () => {
    const el = document.getElementById('ai-scorecard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openPrivacyPage = () => {
    try {
      window.history.pushState(null, '', '/privacy');
    } catch {
      window.location.hash = '#/privacy';
    }
    setActiveLegalModal('privacy');
  };

  const openTermsPage = () => {
    try {
      window.history.pushState(null, '', '/terms');
    } catch {
      window.location.hash = '#/terms';
    }
    setActiveLegalModal('terms');
  };

  const handleCloseLegalModal = () => {
    try {
      window.history.pushState(null, '', '/');
    } catch {
      window.location.hash = '';
    }
    setActiveLegalModal(null);
  };

  const handleBackToHomeAndScrollUp = () => {
    try {
      window.history.pushState(null, '', '/');
    } catch {
      window.location.hash = '';
    }
    setActiveLegalModal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#0047FF] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenContact={scrollToContact}
        onOpenAIQuiz={scrollToAIQuiz}
        onSelectServiceId={handleSelectServiceFromNav}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with Live Stats & CTAs */}
        <Hero
          onOpenContact={scrollToContact}
          onOpenAIQuiz={scrollToAIQuiz}
        />

        {/* 2. Core Services with Interactive Tabs */}
        <ServicesSection
          onSelectService={handleSelectService}
          activeServiceId={activeServiceId}
          onActiveServiceChange={setActiveServiceId}
        />

        {/* 3. Domain & Industry Expertise */}
        <IndustriesSection />

        {/* 4. Success Stories / Case Studies with Filter */}
        <CaseStudiesSection onViewCaseStudy={setActiveCaseStudy} />

        {/* 5. Interactive AI Readiness Diagnostic */}
        <AIReadinessQuiz onScheduleRoadmap={handleScheduleRoadmap} />

        {/* 6. Why nxt info tech (Founded 2024 AI-Native Advantage) */}
        <WhyUs2024 />

        {/* 7. Technology Stack Radar */}
        <TechRadar />

        {/* 8. Careers & Job Application Section */}
        <CareersSection />

        {/* 9. Contact & RFP Consultation Form */}
        <ContactSection
          initialService={selectedServiceForRfp}
          initialEstimate={estimateSummaryForRfp}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPrivacy={openPrivacyPage}
        onOpenTerms={openTermsPage}
      />

      {/* Modals */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={handleStartSimilarCaseStudy}
      />

      {/* Privacy Policy & Terms & Conditions Modal */}
      <LegalModal
        type={activeLegalModal}
        onClose={handleCloseLegalModal}
        onBackToHome={handleBackToHomeAndScrollUp}
      />
    </div>
  );
}
