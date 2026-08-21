import React from 'react';
import { HelpCircle, AlertTriangle, CheckCircle, ArrowRight, ShieldAlert, Sparkles, MessageSquare, Target, TrendingUp } from 'lucide-react';

export default function WhyAscentify({ onOpenModal }) {
  const CRITICAL_QUESTIONS = [
    {
      q: 'Can employees communicate effectively?',
      desc: 'Evaluate pronunciation accuracy, spoken English fluency, and real-time conversation clarity under pressure.',
      icon: MessageSquare
    },
    {
      q: 'Are they ready for the role?',
      desc: 'Perform role-specific simulations to verify actual job capability before putting employees in customer-facing roles.',
      icon: Target
    },
    {
      q: 'What skills need improvement?',
      desc: 'Identify specific phoneme, vocabulary, and structural communication gaps down to the individual learner level.',
      icon: HelpCircle
    },
    {
      q: 'How can workforce performance be measured?',
      desc: 'Track objective, quantified skill progression linked directly to operational performance and business KPIs.',
      icon: TrendingUp
    }
  ];

  const GAP_PAINS = [
    'Workplace communication',
    'Customer conversations',
    'Confidence in speaking',
    'Pronunciation clarity',
    'Role-specific communication requirements',
    'Real-world application of skills'
  ];

  return (
    <section id="why-ascentify" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Why Organizations Choose Ascentify */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Beyond Course Completion
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Organizations Choose Ascentify
          </h2>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Most learning platforms stop at course completion. Ascentify goes beyond learning by helping organizations answer critical questions traditional LMS platforms ignore.
          </p>
        </div>

        {/* 4 Critical Questions Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CRITICAL_QUESTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl glass-card-hover border border-slate-800 relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 p-6 sm:p-8 rounded-3xl border border-slate-800 text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-lg sm:text-xl font-medium text-slate-200">
            Our platform combines <strong className="text-cyan-400">learning</strong>, <strong className="text-sky-400">assessments</strong>, <strong className="text-blue-400">communication evaluation</strong>, and <strong className="text-indigo-400">workforce insights</strong> into one connected ecosystem.
          </p>
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-slate-800/80 max-w-4xl mx-auto"></div>

        {/* Section 2: The Communication Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Hidden Workforce Challenge
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              The Communication Gap Is Costing Organizations More Than They Realize
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Organizations invest heavily in training, yet many employees still struggle when put into real-world workplace scenarios.
            </p>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-400 border-b border-slate-800 pb-2">
                <span>Traditional LMS Approach</span>
                <span className="text-red-400">Incomplete Measurement</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Traditional LMS platforms track quiz scores and video completion hours—they cannot evaluate how an employee speaks, articulates, or handles client interactions.
              </p>
              <div className="pt-2 font-bold text-cyan-400 text-base flex items-center gap-2">
                <span>Ascentify can.</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column: Pain Points Checklist */}
          <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-2xl pointer-events-none"></div>

            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              Critical Capability Gaps Ascentify Solves:
            </h4>

            <div className="space-y-3.5">
              {GAP_PAINS.map((pain, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    {pain}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400">Ready to bridge the communication gap?</span>
              <button
                onClick={() => onOpenModal('Book a Demo')}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
              >
                Book a Demo <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
