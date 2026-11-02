import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Award, Flame, Snowflake, Clock } from 'lucide-react';

export default function Header({ onOpenCallModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Cost Calculator', href: '#calculator' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Service Areas', href: '#service-areas' },
  ];

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  return (
    <>
      {/* Slim Mobile Trust Bar (< 640px) */}
      <div className="bg-navy-950 text-amber-300 text-[11px] font-bold py-1 px-3 border-b border-navy-800 text-center tracking-wide sm:hidden">
        ??? Trane Comfort Specialist � Spring Lake & Tri-Cities
      </div>

      {/* Desktop & Tablet Top Emergency Utility Bar (>= 640px) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Emergency Dispatch Active Now: Spring Lake, Grand Haven & Muskegon
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center text-slate-300">
              <Shield className="w-3.5 h-3.5 text-rescue-500 mr-1" />
              Trane Comfort Specialist Certified
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 font-semibold tracking-wide flex items-center">
              <Award className="w-3.5 h-3.5 text-amber-400 mr-1 inline" />
              5-Star NiceJob Rated � 2023 People's Choice
            </span>
            <span className="text-slate-500">|</span>
            <a href="mailto:dispatch@westshoremechanical.com" className="hover:text-white transition">
              dispatch@westshoremechanical.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Lifeline Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800'
            : 'bg-navy-900 py-4 border-b border-navy-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <a href="#hero" className="flex items-center space-x-3 group text-left">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-rescue-500 via-orange-600 to-navy-900 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                <div className="relative">
                  <Flame className="w-6 h-6 text-white drop-shadow" />
                  <Snowflake className="w-3.5 h-3.5 text-cyan-200 absolute -bottom-1 -right-1 drop-shadow" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                    WESTSHORE
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-navy-800 text-rescue-500 border border-rescue-500/30">
                    MECHANICAL
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-wider uppercase">
                  Trane Comfort Specialist � Spring Lake, MI
                </p>
              </div>
            </a>

            {/* Desktop Center Navigation TABS (4 Clean Links) */}
            <nav className="hidden lg:flex items-center space-x-1 bg-navy-950/60 p-1 rounded-full border border-navy-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-navy-800/80 rounded-full transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA: Solid Rescue Orange Call Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right hidden xl:block">
                <span className="block text-[11px] font-bold uppercase text-emerald-400 flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  24/7 Live Emergency Line
                </span>
                <span className="text-xs text-slate-400">HQ in Spring Lake � &lt; 45 mins</span>
              </div>

              <a
                href="tel:6168378088"
                
                id="desktop-header-call-btn"
                className="relative inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-xl font-black text-sm sm:text-base text-white bg-rescue-500 hover:bg-rescue-600 active:scale-95 transition-all duration-150 shadow-md shadow-rescue-500/20 group"
              >
                <div className="p-1 rounded-full bg-white/20 mr-2.5 group-hover:rotate-12 transition-transform">
                  <Phone className="w-4 h-4 fill-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-orange-100">
                    Emergency Call Now
                  </span>
                  <span className="text-base sm:text-lg font-extrabold tracking-wide">
                    (616) 837-8088
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Header Actions (< 640px) */}
            <div className="flex items-center space-x-2 sm:hidden">
              <a
                href="tel:6168378088"
                className="px-3 py-2 rounded-lg bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white shadow-md active:scale-95 transition flex items-center space-x-1.5"
                aria-label="Call Emergency Phone (616) 837-8088"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span className="text-xs font-black tracking-wider leading-none">CALL</span>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-navy-800 text-slate-200 hover:text-white border border-navy-700 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-navy-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-navy-900 text-sm font-semibold text-slate-200 hover:bg-navy-800 hover:text-white text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>?? 530 Elm St Suite A, Spring Lake</span>
                <span className="text-emerald-400 font-bold">24/7 On Call</span>
              </div>
              <a
                href="tel:6168378088"
                className="w-full py-3 rounded-xl bg-rescue-500 hover:bg-rescue-600 text-white font-extrabold text-base flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Dispatch: (616) 837-8088</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
