import React from 'react';
import { Mic, Globe, Shield, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  ASCENTIFY
                </span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold -mt-1">
                  Learning Media
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Transforming workforce capability into business performance through integrated learning, assessments, and proprietary voice recognition technology.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-cyan-400" /> Global Enterprise Deployment</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-cyan-400" /> Enterprise Security</span>
            </div>
          </div>

          {/* Column 1: Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base uppercase tracking-wider text-xs">
              Platform Ecosystem
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Learning Platform</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Assessment Platform</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors text-cyan-400 font-semibold">Voice Recognition Engine</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Content Marketplace</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base uppercase tracking-wider text-xs">
              Solutions
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Enterprise Learning</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Contact Center Excellence</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Workforce Readiness</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Recruitment Assessment</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Leadership Development</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Academic Programs</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Demo */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base uppercase tracking-wider text-xs">
              Get Started
            </h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => onOpenModal('Book a Demo')}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 text-center"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => onOpenModal('Talk to an Expert')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-800 text-center"
              >
                Talk to an Expert
              </button>
              <button 
                onClick={() => onOpenModal('Request Pricing')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-800 text-center"
              >
                Request Pricing
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ascentify Learning Media. All rights reserved. Transforming Workforce Capability Into Business Performance.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
