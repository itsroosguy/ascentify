import React from 'react';
import { XCircle, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const COMPARISON_ITEMS = [
  {
    feature: 'Core Purpose',
    traditional: 'Delivers Content',
    ascentify: 'Develops Workforce Capability',
    highlight: false
  },
  {
    feature: 'Success Metric',
    traditional: 'Tracks Completions',
    ascentify: 'Measures Readiness',
    highlight: false
  },
  {
    feature: 'Evaluation Depth',
    traditional: 'Basic Assessments',
    ascentify: 'Advanced Skill Evaluation',
    highlight: false
  },
  {
    feature: 'Business Focus',
    traditional: 'Learning Focused',
    ascentify: 'Performance Focused',
    highlight: false
  },
  {
    feature: 'Communication Tech',
    traditional: 'Limited Communication Measurement',
    ascentify: 'Proprietary Voice Recognition Assessment',
    highlight: true
  },
  {
    feature: 'Data & Analytics',
    traditional: 'Generic Reporting',
    ascentify: 'Workforce Intelligence & Insights',
    highlight: false
  }
];

export default function ComparisonTable({ onOpenModal }) {
  return (
    <section id="comparison" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Competitive Distinction
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Ascentify Over Traditional LMS Platforms?
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            See how Ascentify fundamentally shifts workforce transformation from simple content consumption to measurable operational execution.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          <div className="bg-slate-900/80 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-950/90 border-b border-slate-800 p-4 sm:p-6 text-sm sm:text-base font-extrabold items-center">
              <div className="col-span-4 sm:col-span-4 text-slate-400 font-semibold uppercase tracking-wider text-xs sm:text-sm">
                Dimension
              </div>
              <div className="col-span-4 sm:col-span-4 text-slate-400 text-center font-semibold">
                Traditional LMS
              </div>
              <div className="col-span-4 sm:col-span-4 text-cyan-400 text-right sm:text-center font-bold flex items-center justify-end sm:justify-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400 hidden sm:inline" /> Ascentify
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-800/60">
              {COMPARISON_ITEMS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`grid grid-cols-12 p-4 sm:p-6 items-center transition-colors ${
                    item.highlight 
                      ? 'bg-cyan-950/40 border-l-4 border-l-cyan-400' 
                      : 'hover:bg-slate-850/50'
                  }`}
                >
                  {/* Feature Title */}
                  <div className="col-span-4 sm:col-span-4 font-bold text-slate-300 text-xs sm:text-base">
                    {item.feature}
                  </div>

                  {/* Traditional LMS Column */}
                  <div className="col-span-4 sm:col-span-4 text-center px-2">
                    <div className="inline-flex items-center justify-center gap-1.5 text-slate-400 text-xs sm:text-sm font-medium bg-slate-950/50 px-3 py-1.5 rounded-xl border border-slate-800/80">
                      <XCircle className="w-4 h-4 text-slate-500 shrink-0 hidden sm:inline" />
                      <span>{item.traditional}</span>
                    </div>
                  </div>

                  {/* Ascentify Column */}
                  <div className="col-span-4 sm:col-span-4 text-right sm:text-center px-2">
                    <div className={`inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl border shadow-sm ${
                      item.highlight
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-cyan-500/20'
                        : 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60'
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 hidden sm:inline ${item.highlight ? 'text-slate-950' : 'text-cyan-400'}`} />
                      <span>{item.ascentify}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer Banner */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-center border-t border-slate-800">
              <p className="text-sm sm:text-base text-slate-300">
                Ready to upgrade from traditional learning to measured capability?
              </p>
              <button
                onClick={() => onOpenModal('Comparison Demo')}
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Schedule an Executive Briefing <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
