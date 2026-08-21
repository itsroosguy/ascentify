import React from 'react';
import { ArrowRight, CheckCircle2, Mic, Sparkles, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';

const OUTCOMES = [
  'Workforce Readiness',
  'Communication Excellence',
  'Skill Development',
  'Performance Improvement',
  'Business Impact'
];

export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/60 p-8 sm:p-14 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Measurable ROI & Capability
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Workforce Development That Delivers Measurable Outcomes
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ascentify helps organizations move beyond training completion and focus on what truly matters:
          </p>

          {/* 5 Outcomes Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {OUTCOMES.map((outcome, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-950/90 border border-slate-800 text-slate-200 font-bold text-sm sm:text-base shadow-md hover:border-cyan-500/50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>

          {/* Transform Tagline */}
          <div className="mt-12 text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
            Transform learning into measurable workforce capability.
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <button
              onClick={() => onOpenModal('Book a Demo')}
              className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-2xl shadow-xl shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenModal('Request Pricing')}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Request Pricing</span>
            </button>

            <button
              onClick={() => onOpenModal('Talk to a Specialist')}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-300 hover:text-white bg-slate-950/80 hover:bg-slate-900 border border-slate-800 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Talk to a Specialist</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
