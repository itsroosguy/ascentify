import React from 'react';
import { ArrowRight, Mic, ShieldCheck, Sparkles, Award, BarChart3, Users } from 'lucide-react';
import VoiceSimulator from './VoiceSimulator';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg shadow-cyan-500/5">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
              Learning. Assessment. Communication Excellence.
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Transform Workforce Capability Into{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Business Performance
            </span>
          </h1>

          {/* Core Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Ascentify helps organizations assess, develop, and strengthen workforce capability through integrated learning, assessments, and communication intelligence.
          </p>

          {/* Highlight Box with Proprietary Voice Tech mention */}
          <div className="mt-8 bg-slate-900/80 border border-slate-800 p-4 sm:p-5 rounded-2xl max-w-3xl mx-auto text-left flex items-start gap-4 backdrop-blur-sm shadow-xl">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Powered by our proprietary <strong className="text-cyan-400 font-semibold">Voice Recognition & Communication Assessment Technology</strong>, organizations can accurately measure communication skills, workforce readiness, and performance outcomes at scale.
              </p>
            </div>
          </div>

          {/* Secondary Context */}
          <p className="mt-6 text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Whether you're onboarding employees, improving customer-facing teams, developing future leaders, or enhancing workplace communication, Ascentify provides the tools to build a workforce that performs with confidence.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal('Book a Demo')}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenModal('Talk to an Expert')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 hover:text-white rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Talk to an Expert</span>
            </button>
          </div>

        </div>

        {/* Feature Badges Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center border-t border-slate-800/80 pt-8">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Proprietary Voice AI</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm font-medium">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>Objective Metrics</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm font-medium">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Role Readiness</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm font-medium">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Certified Outcomes</span>
          </div>
        </div>

        {/* Interactive Voice Simulator Demo Widget */}
        <div className="mt-14 max-w-5xl mx-auto">
          <VoiceSimulator onOpenModal={onOpenModal} />
        </div>

      </div>
    </section>
  );
}
