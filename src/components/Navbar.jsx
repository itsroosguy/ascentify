import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mic } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm' 
        : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4" aria-label="Main Navigation">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-600 to-blue-700 flex items-center justify-center shadow-md shadow-cyan-500/20">
            <Mic className="w-4.5 h-4.5 text-white font-bold" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">ASCENTIFY</span>
              <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-extrabold bg-cyan-100 text-cyan-800 rounded-md leading-none">eSuite</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-cyan-600 font-bold mt-0.5">Learning Media</span>
          </div>
        </a>

        {/* Single-Line Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
          <a href="#esuite-products" className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white rounded-full transition-all">Products</a>
          <a href="#why-ascentify" className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white rounded-full transition-all">Why Ascentify</a>
          <a href="#ecosystem" className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white rounded-full transition-all">Ecosystem</a>
          <a href="#capabilities" className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white rounded-full transition-all">Capabilities</a>
          <a href="#solutions" className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white rounded-full transition-all">Solutions</a>
          <a href="#comparison" className="whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white rounded-full transition-all">Comparison</a>
        </div>

        {/* Single-Line Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button 
            onClick={() => onOpenModal('Talk to an Expert')}
            className="whitespace-nowrap px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all"
          >
            Talk to an Expert
          </button>
          <button 
            onClick={() => onOpenModal('Book a Demo')}
            className="whitespace-nowrap px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-md shadow-cyan-600/20 flex items-center gap-1.5 transition-transform transform hover:-translate-y-0.5"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-lg">
          <a href="#esuite-products" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-slate-800 font-semibold text-sm">Products</a>
          <a href="#why-ascentify" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-slate-800 font-semibold text-sm">Why Ascentify</a>
          <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-slate-800 font-semibold text-sm">Ecosystem</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-slate-800 font-semibold text-sm">Capabilities</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-slate-800 font-semibold text-sm">Solutions</a>
          <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-slate-800 font-semibold text-sm">Comparison</a>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('Talk to an Expert'); }}
              className="w-full py-2.5 text-xs font-semibold bg-slate-100 border border-slate-200 rounded-xl text-center"
            >
              Talk to an Expert
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('Book a Demo'); }}
              className="w-full py-2.5 text-xs font-bold text-white bg-cyan-600 rounded-xl text-center"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
