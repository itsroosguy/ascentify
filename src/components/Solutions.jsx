import React, { useState } from 'react';
import { Building2, Headset, UserCheck, UserPlus, Award, GraduationCap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'enterprise-learning',
    title: 'Enterprise Learning',
    icon: Building2,
    tagline: 'Scalable L&D for Global Enterprises',
    desc: 'Build scalable learning programs that support workforce growth and business objectives.',
    outcomes: [
      'Standardized learning pathways across departments',
      'Integrated skill assessment and certification',
      'Automated tracking of enterprise compliance and capability',
      'Seamless LMS/HRIS integration capabilities'
    ]
  },
  {
    id: 'contact-center',
    title: 'Contact Center Excellence',
    icon: Headset,
    tagline: 'High-Touch Customer Conversation Readiness',
    desc: 'Improve customer conversations through communication-focused training and assessments.',
    outcomes: [
      'Voice-based customer scenario evaluations',
      'Pronunciation, tone, and empathy scoring',
      'Reduced agent onboarding ramp-up time',
      'Measurable increase in CSAT and First Call Resolution'
    ]
  },
  {
    id: 'workforce-readiness',
    title: 'Workforce Readiness',
    icon: UserCheck,
    tagline: 'Job Capability & Role Validation',
    desc: 'Prepare employees for role success with targeted learning and readiness evaluations.',
    outcomes: [
      'Pre-deployment capability benchmarking',
      'Targeted remediation for communication gaps',
      'Role-based simulation & certification',
      'Clear baseline metrics before live assignments'
    ]
  },
  {
    id: 'recruitment-assessment',
    title: 'Recruitment Assessment',
    icon: UserPlus,
    tagline: 'Objective Talent Evaluation at Scale',
    desc: 'Identify candidates with the communication and role-specific capabilities required for success.',
    outcomes: [
      'Automated spoken English & fluency screening',
      'Elimination of interviewer bias in candidate filters',
      'Faster hiring cycles for high-volume roles',
      'Data-driven candidate capability ranking'
    ]
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    icon: Award,
    tagline: 'Executive Communication & Visionary Leadership',
    desc: 'Develop confident leaders through structured learning and capability-building programs.',
    outcomes: [
      'Executive communication & presentation coaching',
      'Strategic influence and articulation assessment',
      'Structured leadership development pathways',
      '360-degree capability feedback loops'
    ]
  },
  {
    id: 'academic-employability',
    title: 'Academic & Employability Programs',
    icon: GraduationCap,
    tagline: 'Bridging Education to Industry Requirements',
    desc: 'Bridge the gap between education and workplace expectations through practical skill development.',
    outcomes: [
      'Career readiness certifications for graduates',
      'Industry-aligned communication standards',
      'Practical spoken English & workplace etiquette',
      'Enhanced institutional placement rates'
    ]
  }
];

export default function Solutions({ onOpenModal }) {
  const [activeSolution, setActiveSolution] = useState(SOLUTIONS[0]);

  return (
    <section id="solutions" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Tailored Industry Solutions
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built For Your Strategic Goals
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Discover how Ascentify empowers organizations across various operational domains and workforce functions.
          </p>
        </div>

        {/* Desktop/Tablet Solutions Explorer Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Solution Selector Tabs (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              const isSelected = activeSolution.id === sol.id;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolution(sol)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/80 to-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950 ring-1 ring-cyan-500/30'
                      : 'bg-slate-950/70 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-cyan-500 text-slate-950 font-bold' 
                        : 'bg-slate-900 text-cyan-400 border border-slate-800 group-hover:border-slate-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-bold text-base ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {sol.title}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {sol.tagline}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Solution Detail Display (Right) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <activeSolution.icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                    Solution Overview
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeSolution.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed border-b border-slate-800 pb-6">
                {activeSolution.desc}
              </p>

              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Key Business Outcomes:
              </h4>

              <div className="space-y-3">
                {activeSolution.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-200">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Customized for your business footprint.
              </span>
              <button
                onClick={() => onOpenModal(`Solution Demo: ${activeSolution.title}`)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Solution Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
