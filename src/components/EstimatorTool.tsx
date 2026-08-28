import React, { useState } from 'react';
import { Sparkles, Calculator, Users, Clock, Zap, Check, ArrowRight, ShieldCheck, Download, RefreshCw, Send, IndianRupee, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EstimatorToolProps {
  onBookEstimate: (summary: string) => void;
}

export const EstimatorTool: React.FC<EstimatorToolProps> = ({ onBookEstimate }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [projectType, setProjectType] = useState<'custom-app' | 'ai-agent' | 'cloud-migration' | 'dedicated-pod'>('custom-app');
  const [industry, setIndustry] = useState<string>('FinTech & Banking');
  const [teamSize, setTeamSize] = useState<number>(4);
  const [seniority, setSeniority] = useState<'Mid-Senior' | 'Senior-Lead' | 'Principal / Elite'>('Senior-Lead');
  const [durationMonths, setDurationMonths] = useState<number>(6);
  
  // Add-ons
  const [aiIntegration, setAiIntegration] = useState<boolean>(true);
  const [cloudDevOps, setCloudDevOps] = useState<boolean>(true);
  const [qaAutomation, setQaAutomation] = useState<boolean>(true);
  const [uiUxDesign, setUiUxDesign] = useState<boolean>(true);

  const [submitted, setSubmitted] = useState<boolean>(false);

  // Rate calculations
  const baseMonthlyPerDevINR = {
    'Mid-Senior': 220000,
    'Senior-Lead': 350000,
    'Principal / Elite': 550000
  }[seniority];

  const baseMonthlyPerDevUSD = {
    'Mid-Senior': 3500,
    'Senior-Lead': 5500,
    'Principal / Elite': 8500
  }[seniority];

  let addOnCostINR = 0;
  if (aiIntegration) addOnCostINR += 120000;
  if (cloudDevOps) addOnCostINR += 95000;
  if (qaAutomation) addOnCostINR += 75000;
  if (uiUxDesign) addOnCostINR += 90000;

  let addOnCostUSD = 0;
  if (aiIntegration) addOnCostUSD += 1800;
  if (cloudDevOps) addOnCostUSD += 1400;
  if (qaAutomation) addOnCostUSD += 1100;
  if (uiUxDesign) addOnCostUSD += 1300;

  const estimatedMonthlyINR = (teamSize * baseMonthlyPerDevINR) + addOnCostINR;
  const estimatedTotalINR = estimatedMonthlyINR * durationMonths;

  const estimatedMonthlyUSD = (teamSize * baseMonthlyPerDevUSD) + addOnCostUSD;
  const estimatedTotalUSD = estimatedMonthlyUSD * durationMonths;

  const estimatedMonthly = currency === 'INR' ? estimatedMonthlyINR : estimatedMonthlyUSD;
  const estimatedTotal = currency === 'INR' ? estimatedTotalINR : estimatedTotalUSD;
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  // Format INR nicely with Lakhs or locale
  const formatAmount = (num: number) => {
    if (currency === 'INR') {
      return `₹${num.toLocaleString('en-IN')}`;
    }
    return `$${num.toLocaleString('en-US')}`;
  };

  const formatLakhs = (num: number) => {
    if (currency === 'INR') {
      const inLakhs = (num / 100000).toFixed(1);
      return `(~₹${inLakhs} Lakhs)`;
    }
    return '';
  };

  // Velocity points estimate
  const sprintPointsPerMonth = teamSize * (seniority === 'Principal / Elite' ? 38 : seniority === 'Senior-Lead' ? 30 : 22);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0047FF', '#ff9933', '#138808', '#ffffff']
    });
  };

  const handleSendEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();
    setSubmitted(true);
    const summary = `Project: ${projectType} | Industry: ${industry} | Team: ${teamSize} devs in India (${seniority}) | Duration: ${durationMonths} mo | Est. Monthly: ${formatAmount(estimatedMonthly)} ${currency}`;
    onBookEstimate(summary);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-50/50 border-b border-slate-100 relative">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Transparent Engineering Pod Calculator
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
            Estimate your software project &{' '}
            <span className="text-[#0047FF]">
              dedicated India agile pod
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Configure your technical scope, seniority tier, and team size. Get instant timeline and budget benchmarks tailored to Indian & global engineering standards.
          </p>

          {/* Currency Switcher */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Currency:</span>
            <div className="inline-flex rounded-md border border-slate-200 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                  currency === 'INR' ? 'bg-[#0047FF] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>₹ INR (Indian Rupee)</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                  currency === 'USD' ? 'bg-[#0047FF] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>$ USD (Global)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-sm">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>1. Select Core Scope</span>
                <span className="text-[#0047FF] font-semibold">Step 1 of 4</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'custom-app', label: 'Custom App / MVP', sub: 'Microservices & Full-Stack' },
                  { id: 'ai-agent', label: 'Enterprise AI & RAG', sub: 'LLMs & Autonomous Agents' },
                  { id: 'cloud-migration', label: 'Cloud & Modernization', sub: 'K8s, GitOps & IaC' },
                  { id: 'dedicated-pod', label: 'Agile Engineering Pod', sub: 'Dedicated Cross-Functional' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                      projectType === type.id
                        ? 'border-[#0047FF] bg-[#0047FF] text-white shadow-md'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-800'
                    }`}
                  >
                    <div className="font-bold text-xs">{type.label}</div>
                    <div className={`text-[10px] mt-0.5 ${projectType === type.id ? 'text-slate-200' : 'text-slate-500'}`}>{type.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Industry Domain */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>2. Select Industry Domain</span>
                <span className="text-[#0047FF] font-semibold">Step 2 of 4</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  'FinTech, UPI & Banking',
                  'HealthTech & ABDM',
                  'Telecom & 5G',
                  'Retail & Quick Commerce',
                  'High-Tech SaaS & Cloud',
                  'Energy & Smart IoT'
                ].map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setIndustry(ind)}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold border text-left transition-all cursor-pointer ${
                      industry === ind
                        ? 'border-[#0047FF] bg-blue-50/80 text-[#0047FF] font-bold'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Team Configuration */}
            <div className="space-y-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>3. Team Composition & Seniority Tier</span>
                <span className="text-[#0047FF] font-semibold">Step 3 of 4</span>
              </label>

              {/* Team Size Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-600">Team Size (Dedicated Engineers):</span>
                  <span className="font-mono font-bold text-sm text-[#0047FF] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {teamSize} Senior Engineers
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0047FF]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>2 Devs (Agile Sprint)</span>
                  <span>6 Devs (Standard Pod)</span>
                  <span>16 Devs (Enterprise Hub)</span>
                </div>
              </div>

              {/* Seniority Selector */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-600 block">Engineering Seniority Level:</span>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'Mid-Senior', label: 'Mid-Senior', rate: currency === 'INR' ? '₹2.2L/mo' : '$3.5k/mo' },
                    { id: 'Senior-Lead', label: 'Senior / Tech Lead', rate: currency === 'INR' ? '₹3.5L/mo' : '$5.5k/mo' },
                    { id: 'Principal / Elite', label: 'Principal / Architect', rate: currency === 'INR' ? '₹5.5L/mo' : '$8.5k/mo' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSeniority(tier.id as any)}
                      className={`p-2.5 rounded-md text-center text-xs font-bold border transition-all cursor-pointer ${
                        seniority === tier.id
                          ? 'border-[#0047FF] bg-blue-50 text-[#0047FF]'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div>{tier.label}</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">{tier.rate}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Duration */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-600">Engagement Duration:</span>
                  <span className="font-mono font-bold text-sm text-[#0047FF] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {durationMonths} Months
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="18"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0047FF]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>2 Months (MVP)</span>
                  <span>6 Months (Standard)</span>
                  <span>18 Months (Multi-Release)</span>
                </div>
              </div>
            </div>

            {/* Step 4: Specialized Capabilities & Add-Ons */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>4. Cross-Functional Add-ons</span>
                <span className="text-[#0047FF] font-semibold">Step 4 of 4</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setAiIntegration(!aiIntegration)}
                  className={`p-3 rounded-lg border text-left flex items-start justify-between cursor-pointer transition-colors ${
                    aiIntegration ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900">AI / LLM & Vector Pipeline</div>
                    <div className="text-[11px] text-slate-500">RAG, embeddings & MLOps guardrails</div>
                  </div>
                  <div className={`h-4 w-4 rounded mt-0.5 flex items-center justify-center ${aiIntegration ? 'bg-[#0047FF] text-white' : 'border border-slate-300'}`}>
                    {aiIntegration && <Check className="w-3 h-3" />}
                  </div>
                </div>

                <div
                  onClick={() => setCloudDevOps(!cloudDevOps)}
                  className={`p-3 rounded-lg border text-left flex items-start justify-between cursor-pointer transition-colors ${
                    cloudDevOps ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900">Cloud Infrastructure & GitOps</div>
                    <div className="text-[11px] text-slate-500">Terraform, Kubernetes & Prometheus</div>
                  </div>
                  <div className={`h-4 w-4 rounded mt-0.5 flex items-center justify-center ${cloudDevOps ? 'bg-[#0047FF] text-white' : 'border border-slate-300'}`}>
                    {cloudDevOps && <Check className="w-3 h-3" />}
                  </div>
                </div>

                <div
                  onClick={() => setQaAutomation(!qaAutomation)}
                  className={`p-3 rounded-lg border text-left flex items-start justify-between cursor-pointer transition-colors ${
                    qaAutomation ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900">Automated QA & Security Testing</div>
                    <div className="text-[11px] text-slate-500">Playwright E2E & SAST CI gates</div>
                  </div>
                  <div className={`h-4 w-4 rounded mt-0.5 flex items-center justify-center ${qaAutomation ? 'bg-[#0047FF] text-white' : 'border border-slate-300'}`}>
                    {qaAutomation && <Check className="w-3 h-3" />}
                  </div>
                </div>

                <div
                  onClick={() => setUiUxDesign(!uiUxDesign)}
                  className={`p-3 rounded-lg border text-left flex items-start justify-between cursor-pointer transition-colors ${
                    uiUxDesign ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900">Product UI/UX & Design Systems</div>
                    <div className="text-[11px] text-slate-500">Figma token library & user research</div>
                  </div>
                  <div className={`h-4 w-4 rounded mt-0.5 flex items-center justify-center ${uiUxDesign ? 'bg-[#0047FF] text-white' : 'border border-slate-300'}`}>
                    {uiUxDesign && <Check className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            <div className="rounded-2xl bg-white border-2 border-slate-900 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs uppercase text-slate-900 font-extrabold tracking-wider">
                  nxt info tech • Estimate Summary
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-blue-50 text-[#0047FF] text-[10px] font-bold font-mono">
                  INDIA DELIVERY RATES
                </span>
              </div>

              {/* Price Figures */}
              <div className="py-6 space-y-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Estimated Monthly Investment</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                      {formatAmount(estimatedMonthly)}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>
                  {currency === 'INR' && (
                    <div className="text-xs text-blue-600 font-semibold mt-0.5">
                      {formatLakhs(estimatedMonthly)} per month for {teamSize} senior engineers
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-600">Total {durationMonths}-Month Horizon:</span>
                  <div className="text-right">
                    <span className="text-sm font-mono font-black text-[#0047FF] block">
                      {formatAmount(estimatedTotal)} {currency}
                    </span>
                    {currency === 'INR' && (
                      <span className="text-[11px] text-slate-500 font-medium">
                        {formatLakhs(estimatedTotal)} total
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Estimated Team Output Metrics */}
              <div className="space-y-3 pb-6 border-b border-slate-100 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">Team Composition:</span>
                  <span className="font-bold text-slate-900">{teamSize} Engineers in India ({seniority})</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">Sprint Velocity:</span>
                  <span className="font-mono text-[#0047FF] font-bold">~{sprintPointsPerMonth} pts / month</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">Delivery Pod SLA:</span>
                  <span className="font-bold text-emerald-600">Operational in 10 Business Days</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="text-slate-500 font-medium">IP Ownership & Compliance:</span>
                  <span className="font-bold text-slate-900">100% Client Transferred • DPDP / ISO</span>
                </div>
              </div>

              {/* Submission Action */}
              <div className="pt-6 space-y-3">
                {submitted ? (
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center space-y-1">
                    <div className="font-bold flex items-center justify-center gap-1.5 text-sm text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                      Estimate Registered!
                    </div>
                    <p>Our Solution Architects in Bengaluru will review your pod configuration and send your proposal within 24 hours.</p>
                  </div>
                ) : (
                  <button
                    onClick={handleSendEstimate}
                    className="w-full py-4 px-6 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>LOCK ESTIMATE & REQUEST DISCOVERY</span>
                  </button>
                )}

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0047FF]" />
                  <span>No obligation • Mutual NDA signed prior to code review</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
