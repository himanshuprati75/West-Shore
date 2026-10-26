import React from 'react';
import { ShieldCheck, Clock, Star, Award } from 'lucide-react';

export default function TrustShield() {
  const trustItems = [
    {
      customVisual: (
        <img 
          src="/images/trane-badge.png" 
          alt="Trane Comfort Specialist Official Badge" 
          className="h-10 w-auto object-contain" 
        />
      ),
      title: "Trane Comfort Specialist",
      subtitle: "Elite top-tier factory dealer designation. Rigorously trained on high-efficiency Trane heating, heat pumps, and AC systems.",
      badge: "Factory Certified",
    },
    {
      customVisual: (
        <div className="p-2.5 rounded-xl bg-orange-50 group-hover:bg-rescue-500/10 transition-colors">
          <Clock className="w-7 h-7 text-rescue-500" />
        </div>
      ),
      title: "24/7 Lakeshore Dispatch",
      subtitle: "Spring Lake headquarters with on-call service trucks dispatched across Grand Haven, Muskegon, & West Michigan in < 45 mins.",
      badge: "< 45 Mins",
    },
    {
      customVisual: (
        <img 
          src="/images/michigan-saves.jpg" 
          alt="Michigan Saves Authorized Partner" 
          className="h-9 w-auto object-contain rounded border border-slate-200 shadow-xs" 
        />
      ),
      title: "Michigan Saves Partner",
      subtitle: "Official authorized contractor for Michigan Saves clean energy programs — 0% APR and low-rate financing with approved credit.",
      badge: "MI Saves Partner",
    },
    {
      customVisual: (
        <img 
          src="/images/peoples-choice.jpg" 
          alt="2023 People's Choice Award Winner" 
          className="h-10 w-auto object-contain rounded border border-amber-200 shadow-xs" 
        />
      ),
      title: "5-Star & People's Choice",
      subtitle: "Over 180+ verified 5.0 reviews on NiceJob & Google. Voted West Michigan's #1 trusted heating & cooling service company.",
      badge: "2023 People's Choice",
    },
  ];

  return (
    <section className="bg-slate-100 border-y border-slate-200 py-8 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 min-h-[44px]">
                  {item.customVisual}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-800 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-navy-950 mb-1.5 font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center text-xs font-bold text-rescue-500 group-hover:text-rescue-600">
                <span>Verified Credential</span>
                <span className="ml-1 font-normal text-slate-400">?</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
