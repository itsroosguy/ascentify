import React, { useState } from 'react';
import { BookOpen, FileCheck2, Mic, Store, BarChart3, ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';

const ECOSYSTEM_PILLARS = [
  {
    id: 'learning',
    title: 'Learning Platform',
    icon: BookOpen,
    badge: 'Skill Journeys',
    desc: 'Deliver structured learning journeys, certifications, and workforce development programs tailored to role expectations.'
  },
  {
    id: 'assessment',
    title: 'Assessment Platform',
    icon: FileCheck2,
    badge: 'Capability Benchmarking',
    desc: 'Measure skills, competencies, role readiness, and workforce capability through comprehensive assessments.'
  },
  {
    id: 'voice',
    title: 'Voice Recognition Engine',
    icon: Mic,
    badge: 'Proprietary Tech',
    highlight: true,
    desc: 'Our proprietary voice recognition technology evaluates pronunciation, fluency, clarity, and communication effectiveness with precision.'
  },
  {
    id: 'marketplace',
    title: 'Content Marketplace',
    icon: Store,
    badge: 'On-Demand Library',
    desc: 'Access a growing library of workplace skills, communication, leadership, customer service, and professional development content.'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    icon: BarChart3,
    badge: 'Workforce Intelligence',
    desc: 'Track learner progress, assessment outcomes, workforce readiness, and organizational capability across teams.'
  }
];

const DIFFERETIATORS = [
  'Spoken English proficiency',
  'Pronunciation accuracy',
  'Fluency and clarity',
  'Workplace communication skills',
  'Customer interaction readiness',
  'Communication confidence'
];

export default function Ecosystem({ onOpenModal }) {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  return (
    <section id="ecosystem" className="py-24 bg-slate-900/60 relative overflow-hidden border-y border-slate-800/80">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connected Infrastructure
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Ascentify Ecosystem
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            A single, integrated platform designed to transform workforce learning into measurable business performance.
          </p>
        </div>

        {/* 5 Pillars Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isHighlight = pillar.highlight;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                className={`p-7 rounded-3xl transition-all duration-300 relative flex flex-col justify-between ${
                  isHighlight 
                    ? 'bg-gradient-to-b from-cyan-950/90 via-slate-900 to-slate-900 border-2 border-cyan-500/80 shadow-2xl shadow-cyan-950/80 ring-1 ring-cyan-500/30' 
                    : 'glass-card border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                    Core Technology
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isHighlight
                        ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                        : 'bg-slate-800 text-cyan-400 border border-slate-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Integrated Component</span>
                  <button 
                    onClick={() => onOpenModal(`Ecosystem: ${pillar.title}`)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: What Makes Ascentify Different */}
        <div className="mt-24 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Mic className="w-3.5 h-3.5" />
                Unfair Technology Advantage
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                What Makes Ascentify Different
              </h3>

              <h4 className="text-xl font-bold text-cyan-400">
                Proprietary Voice Recognition Technology
              </h4>

              <p className="text-base text-slate-300 leading-relaxed">
                Unlike traditional learning platforms, Ascentify includes an advanced communication assessment engine designed specifically for workforce development.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-900/50 text-cyan-300 font-semibold text-sm">
                "This enables objective measurement rather than subjective evaluation."
              </div>
            </div>

            {/* Evaluation Metrics Checklist */}
            <div className="lg:col-span-6 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-800 pb-3">
                Organizations can evaluate:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DIFFERETIATORS.map((diff, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-200">{diff}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => onOpenModal('Voice Recognition Technology')}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2"
                >
                  <span>Request Tech Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
