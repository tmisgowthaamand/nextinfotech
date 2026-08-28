import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, Award, FileText, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AIReadinessQuizProps {
  onScheduleRoadmap: (scoreSummary: string) => void;
}

export const AIReadinessQuiz: React.FC<AIReadinessQuizProps> = ({ onScheduleRoadmap }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([2, 2, 2, 2]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const questions = [
    {
      title: 'Data Infrastructure & Quality',
      description: 'How structured, accessible, and clean is your proprietary company data?',
      options: [
        { label: 'Siloed in legacy spreadsheets / paper records (Manual access)', score: 1 },
        { label: 'Centralized in SQL databases but unstructured and uncurated', score: 2 },
        { label: 'Modern Cloud Data Warehouse (Snowflake / BigQuery) with ETL pipelines', score: 3 },
        { label: 'Real-time vector embeddings & streaming data lakehouses with RBAC', score: 4 }
      ]
    },
    {
      title: 'Cloud & API Microservice Architecture',
      description: 'How is your software stack deployed and managed today?',
      options: [
        { label: 'On-premise servers with manual SSH deployments', score: 1 },
        { label: 'Virtual Machines (EC2) with standard monolithic backend', score: 2 },
        { label: 'Dockerized microservices on Kubernetes with automated CI/CD', score: 3 },
        { label: 'Multi-region serverless / event-driven mesh with GitOps & Terraform', score: 4 }
      ]
    },
    {
      title: 'Security, Privacy & Regulatory Compliance',
      description: 'What governance standards must your AI systems strictly enforce?',
      options: [
        { label: 'Basic password protection with no formal audit compliance', score: 1 },
        { label: 'Standard GDPR / basic data privacy agreements in place', score: 2 },
        { label: 'SOC 2 Type II / HIPAA / PCI-DSS compliance audits required', score: 3 },
        { label: 'Zero-retention air-gapped private LLMs with strict cryptographic audit trails', score: 4 }
      ]
    },
    {
      title: 'Target AI Workflows & Business Use Cases',
      description: 'What is your primary AI strategic goal in 2024–2026?',
      options: [
        { label: 'Internal team productivity (ChatGPT wrappers / drafting notes)', score: 1 },
        { label: 'Customer support AI chat assistant on knowledge base', score: 2 },
        { label: 'Domain-specific enterprise RAG copilot integrated into core product APIs', score: 3 },
        { label: 'Autonomous multi-agent workflows executing complex business tasks', score: 4 }
      ]
    }
  ];

  const handleSelectOption = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = score;
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#06b6d4', '#6366f1', '#10b981']
      });
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const normalizedScore = Math.round((totalScore / 16) * 100);

  const getTier = () => {
    if (normalizedScore >= 80) return { title: 'AI Acceleration Leader', color: 'text-emerald-400', desc: 'Your stack is primed for autonomous multi-agent systems and fine-tuned private models.' };
    if (normalizedScore >= 60) return { title: 'Enterprise RAG Ready', color: 'text-cyan-400', desc: 'Ready for production vector search, intelligent copilots, and cloud modernization.' };
    return { title: 'Data Modernization Phase', color: 'text-amber-400', desc: 'Recommended to establish robust data ingestion pipelines and cloud microservices before deploying LLMs.' };
  };

  const currentTier = getTier();

  return (
    <section id="ai-scorecard" className="py-24 bg-slate-50/50 border-b border-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
            <span className="text-xs font-bold text-[#0047FF] tracking-[0.2em] uppercase">
              Interactive Enterprise Tool
            </span>
            <span className="w-10 h-[1px] bg-[#0047FF]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            AI Readiness & Architecture Scorecard
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Take our 2-minute technical diagnostic to benchmark your data readiness, cloud posture, and AI velocity.
          </p>
        </div>

        {/* Card Container */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl text-left">
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span className="text-[#0047FF]">{questions[currentStep].title}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#0047FF] h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                  {questions[currentStep].description}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {questions[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#0047FF] hover:bg-blue-50/30 transition-all text-left flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-7 w-7 rounded-sm bg-slate-200 text-slate-700 group-hover:bg-[#0047FF] group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0047FF]">
                        {opt.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0047FF] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-slate-500 hover:text-black font-semibold cursor-pointer"
                  >
                    ← Previous Question
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Results View */
            <div className="space-y-8 animate-in fade-in duration-300">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Organization Score</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-heading text-4xl sm:text-5xl font-black text-[#1a1a1a]">
                      {normalizedScore}
                    </span>
                    <span className="text-slate-500 font-semibold text-sm">/ 100 Readiness Index</span>
                  </div>
                  <div className={`text-lg font-bold text-[#0047FF] mt-1`}>
                    {currentTier.title}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm font-medium">
                  {currentTier.desc}
                </div>
              </div>

              {/* 3-Stage Recommended Action Roadmap */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Recommended 2024–2026 AI Engineering Roadmap:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[11px] uppercase text-[#0047FF] font-bold block">Phase 1: Ingestion & Vector DB</span>
                    <div className="text-xs text-slate-600">Deploy Pinecone / Qdrant with automated dbt data cleansing and role-based permissions.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[11px] uppercase text-[#0047FF] font-bold block">Phase 2: RAG & Agent Loop</span>
                    <div className="text-xs text-slate-600">Engineer domain-specific AI copilots with semantic caching, guardrails, and latency optimization.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[11px] uppercase text-emerald-600 font-bold block">Phase 3: Production Scale</span>
                    <div className="text-xs text-slate-600">Orchestrate multi-agent workflows with automated continuous eval benchmarks (RAGAS) and FinOps.</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onScheduleRoadmap(`AI Readiness Score: ${normalizedScore}/100 (${currentTier.title})`)}
                  className="flex-1 py-4 px-6 rounded-sm bg-[#0047FF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>REQUEST DETAILED AI ARCHITECTURE BLUEPRINT</span>
                </button>

                <button
                  onClick={() => {
                    setIsCompleted(false);
                    setCurrentStep(0);
                  }}
                  className="px-5 py-4 rounded-sm bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake Diagnostic</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
