import React, { useState } from 'react';
import { Mic, Languages, ShieldCheck, GraduationCap, Award, BarChart3, Edit3, LineChart, CheckCircle2, Sparkles, Filter } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'comm-intel',
    title: 'Communication Intelligence',
    category: 'Assessment & Voice',
    icon: Mic,
    desc: 'Assess real-world communication capabilities through voice-based evaluations.'
  },
  {
    id: 'english-prof',
    title: 'English Proficiency Assessment',
    category: 'Assessment & Voice',
    icon: Languages,
    desc: 'Measure workplace English skills against defined performance standards.'
  },
  {
    id: 'role-readiness',
    title: 'Role Readiness Assessment',
    category: 'Assessment & Voice',
    icon: ShieldCheck,
    desc: 'Determine whether employees possess the required skills and communication capabilities for specific roles.'
  },
  {
    id: 'learning-dev',
    title: 'Learning & Development',
    category: 'Learning & Authoring',
    icon: GraduationCap,
    desc: 'Deliver personalized learning journeys that support workforce growth.'
  },
  {
    id: 'certification',
    title: 'Certification Management',
    category: 'Learning & Authoring',
    icon: Award,
    desc: 'Validate learning outcomes through structured certifications and assessments.'
  },
  {
    id: 'analytics',
    title: 'Workforce Analytics',
    category: 'Analytics & Insights',
    icon: BarChart3,
    desc: 'Gain visibility into skill gaps, performance trends, and development opportunities.'
  },
  {
    id: 'content-authoring',
    title: 'Content Authoring',
    category: 'Learning & Authoring',
    icon: Edit3,
    desc: 'Create and deploy custom learning experiences aligned to business needs.'
  },
  {
    id: 'reporting-insights',
    title: 'Reporting & Insights',
    category: 'Analytics & Insights',
    icon: LineChart,
    desc: 'Make informed workforce decisions through actionable performance data.'
  }
];

const CATEGORIES = ['All Capabilities', 'Assessment & Voice', 'Learning & Authoring', 'Analytics & Insights'];

export default function Capabilities({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All Capabilities');

  const filteredCapabilities = activeCategory === 'All Capabilities'
    ? CAPABILITIES
    : CAPABILITIES.filter(c => c.category === activeCategory);

  return (
    <section id="capabilities" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Enterprise-Grade Platform
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Platform Capabilities
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Comprehensive tools designed to assess, train, certify, and optimize your organization's human capital.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card p-6 rounded-2xl glass-card-hover border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400/90 block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Included
                  </span>
                  <button 
                    onClick={() => onOpenModal(`Capability: ${item.title}`)}
                    className="font-semibold text-cyan-400 hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
