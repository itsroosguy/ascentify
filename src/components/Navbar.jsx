import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Mic, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                ASCENTIFY
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold -mt-1">
                Learning Media
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
            <a href="#why-ascentify" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all">
              Why Ascentify
            </a>
            <a href="#ecosystem" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all">
              Ecosystem
            </a>
            <a href="#capabilities" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all">
              Capabilities
            </a>
            <a href="#solutions" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all">
              Solutions
            </a>
            <a href="#comparison" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all">
              Comparison
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => onOpenModal('Talk to an Expert')}
              className="px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition-all border border-slate-800 hover:border-slate-700"
            >
              Talk to an Expert
            </button>
            <button 
              onClick={() => onOpenModal('Book a Demo')}
              className="px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <a 
            href="#why-ascentify" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Why Ascentify
          </a>
          <a 
            href="#ecosystem" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Ecosystem
          </a>
          <a 
            href="#capabilities" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Capabilities
          </a>
          <a 
            href="#solutions" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Solutions
          </a>
          <a 
            href="#comparison" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium"
          >
            Comparison
          </a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('Talk to an Expert'); }}
              className="w-full py-2.5 text-center font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-xl"
            >
              Talk to an Expert
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('Book a Demo'); }}
              className="w-full py-2.5 text-center font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
