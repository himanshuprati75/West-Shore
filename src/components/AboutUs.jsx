import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Phone, ArrowRight, MapPin, Users } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  const brandPartners = [
    'TRANE', 'MITSUBISHI ELECTRIC', 'CARRIER', 'LENNOX', 'RHEEM', 'WATERFURNACE', 'AERUS'
  ];

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Real Facility & Team Photos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Building & Fleet Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/images/facility-location.jpg"
                alt="Westshore Mechanical headquarters at 530 Elm St Suite A, Spring Lake MI with service vehicles"
                className="w-full h-[260px] sm:h-[300px] object-cover object-center group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-navy-900/90 backdrop-blur-md p-3 rounded-xl border border-navy-700/80 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-rescue-500 mr-1.5 flex-shrink-0" />
                    530 Elm St Suite A, Spring Lake, MI
                  </h4>
                  <p className="text-[11px] text-slate-300">Local HQ • Rapid Lakeshore Fleet</p>
                </div>
                <img 
                  src="/images/trane-badge.png" 
                  alt="Trane Comfort Specialist" 
                  className="h-8 w-auto object-contain bg-white/95 px-1.5 py-0.5 rounded"
                />
              </div>
            </div>

            {/* Real Staff / Team Photo Card */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-md flex items-center space-x-3.5">
              <img
                src="/images/team-crew.jpg"
                alt="Westshore Mechanical professional service team and technicians"
                className="w-24 h-16 rounded-xl object-cover object-center border border-slate-200 flex-shrink-0"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-1 text-xs font-black text-navy-950">
                  <Users className="w-3.5 h-3.5 text-rescue-500" />
                  <span>Our Factory-Trained In-House Team</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Certified technicians & dispatchers dedicated to honest flat-rate pricing.
                </p>
                <div className="mt-1 flex items-center text-[10px] font-bold text-emerald-600">
                  <span>? 100% Background-Checked • Non-Commission</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Company Story & Guarantees (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-900 text-xs font-bold uppercase tracking-wider">
              <span>Local Authority & Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy-950 font-sans leading-tight">
              Lakeshore Heritage. Trane Certified Excellence. <span className="text-rescue-500">Zero Excuses.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              When freezing lake-effect blizzards sweep off Lake Michigan or summer heatwaves spike inland humidity across Spring Lake, Grand Haven, and Muskegon, you need an HVAC company that answers immediately with experienced, certified technicians.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Westshore Mechanical</strong> is proud to be an elite <em>Trane Comfort Specialist</em> and authorized <em>Michigan Saves</em> contractor. Headquartered right on Elm Street in Spring Lake, we don't send commission-driven salespeople to your home. Our certified technicians diagnose the root problem, give you transparent flat pricing, and stand behind every repair and replacement 100%.
            </p>

            {/* Core Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">Trane Comfort Specialist</h4>
                  <p className="text-[11px] text-slate-500">Top-tier factory engineering & precision installation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">Diagnostic Fee Credit</h4>
                  <p className="text-[11px] text-slate-500">100% credited toward your repair if you choose us.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">Michigan Saves 0% Financing</h4>
                  <p className="text-[11px] text-slate-500">Authorized contractor for energy efficiency loans & rebates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-950">In-House Sheet Metal Shop</h4>
                  <p className="text-[11px] text-slate-500">Custom duct fabrication for perfect airflow & whisper-quiet comfort.</p>
                </div>
              </div>
            </div>

            {/* Brands Serviced */}
            <div className="pt-2 border-t border-slate-200">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Authorized Equipment & Manufacturer Partnerships:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {brandPartners.map((brand, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-extrabold tracking-wider text-slate-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
              <a
                href="tel:6168378088"
                onClick={handleDesktopCallClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-rescue-500/20 transition-all duration-150 active:scale-95"
              >
                <Phone className="w-4 h-4 mr-2 fill-white" />
                Call Spring Lake HQ: (616) 837-8088
              </a>
              <a
                href="#quote-form"
                className="text-xs sm:text-sm font-bold text-navy-900 hover:text-rescue-500 transition flex items-center"
              >
                Schedule Service Online <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
