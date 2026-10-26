import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote, Phone } from 'lucide-react';

export default function Testimonials({ onOpenCallModal }) {
  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const reviews = [
    {
      name: "Todd & Lori B.",
      location: "Spring Lake, MI",
      service: "Sunday Emergency Furnace Repair",
      date: "Verified Homeowner",
      rating: 5,
      review: "Our furnace stopped heating on a brutal 8° Sunday evening. Called Westshore Mechanical and a technician was at our door in 25 minutes from their Elm Street shop! Diagnosed a faulty igniter, replaced it from truck stock, and our home was warm before bedtime. Fast, professional, and zero emergency surcharge!"
    },
    {
      name: "Greg M.",
      location: "Grand Haven, MI",
      service: "Trane High-Efficiency Replacement",
      date: "Verified Homeowner",
      rating: 5,
      review: "Westshore replaced our 20-year-old noisy unit with a Trane high-efficiency system. They walked us through Michigan Saves 0% financing and handled all the Consumers Energy rebate paperwork for us. The installation crew was meticulous, protected our hardwood floors, and our winter heating bills are down 30%!"
    },
    {
      name: "Sarah L.",
      location: "Norton Shores / Muskegon, MI",
      service: "Emergency AC Coil & Leak Repair",
      date: "Verified Homeowner",
      rating: 5,
      review: "Woke up to water leaking from our AC unit in the middle of a July heatwave. Westshore dispatched someone within 40 minutes. Cleared the line, verified the refrigerant pressures, and charged an upfront flat rate with no hidden fees. Friendly, courteous, and honest."
    },
    {
      name: "Kenneth P.",
      location: "Spring Lake / Ferrysburg, MI",
      service: "Mitsubishi Electric Ductless Mini-Split",
      date: "Verified Homeowner",
      rating: 5,
      review: "We needed cooling for a master bedroom addition that didn't have existing ductwork. Westshore installed a Mitsubishi Electric ductless system. It is so quiet you can barely hear it running, and it keeps the room at the exact temperature we set. Exceptional craftsmanship."
    },
    {
      name: "Rachel W.",
      location: "Allendale, MI",
      service: "Whole-Home Duct & Dryer Vent Cleaning",
      date: "Verified Homeowner",
      rating: 5,
      review: "Had Westshore perform their negative air duct cleaning and dryer vent cleanout after remodeling our home. The amount of construction dust and lint they pulled out was incredible. The airflow in our upstairs bedrooms improved dramatically right away!"
    },
    {
      name: "Dan & Emily S.",
      location: "Whitehall, MI",
      service: "Priority Customer Annual Safety Tune-Up",
      date: "Verified Homeowner",
      rating: 5,
      review: "We have been on Westshore's Priority Maintenance agreement for 4 years. Technicians always arrive on time, thoroughly inspect the heat exchanger and electronics, and explain everything with photos. True peace of mind having them on speed dial."
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rescue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lakeshore-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Star Credential Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>100% Real Lakeshore Customer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans">
            Trusted By Your Lakeshore Neighbors
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Speed, honesty, and factory certified quality. Read why homeowners across Ottawa, Muskegon, and Kent counties trust Westshore Mechanical.
          </p>

          {/* Verified NiceJob & Google Rating Summary Bar */}
          <div className="mt-6 max-w-3xl mx-auto bg-navy-900 border border-navy-800 rounded-2xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-2.5 text-center sm:text-left shadow-lg">
            <div className="flex items-center space-x-2 mx-auto sm:mx-0">
              <span className="text-sm sm:text-base font-black text-amber-400">5.0 ?????</span>
              <span className="text-xs sm:text-sm font-bold text-white">NiceJob & Google Rating</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="text-xs text-slate-300 font-medium mx-auto sm:mx-0">
              2023 People's Choice Winner
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-navy-950 border border-navy-800 text-slate-300 mx-auto sm:mx-0">
              Trane Comfort Specialist
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-navy-900/90 rounded-2xl p-5 sm:p-6 border border-navy-800 hover:border-rescue-500/40 shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* 5 SVG Gold Stars & Service Pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1" aria-label="5 out of 5 stars">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-navy-950 text-slate-300 border border-navy-800">
                    {rev.date}
                  </span>
                </div>

                {/* Service Category Tag */}
                <div className="text-xs font-bold text-rescue-500 mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rescue-500 mr-1.5"></span>
                  {rev.service}
                </div>

                {/* The Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{rev.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-navy-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{rev.location}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400" title="Verified Customer">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Verified NiceJob Review Badge */}
                <div className="mt-2.5 pt-2 border-t border-navy-800/60 flex items-center text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-emerald-400" />
                  <span>? Verified NiceJob Customer Review • Lakeshore Dispatch</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call Now Banner below reviews */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-navy-900 border border-navy-800 p-4 rounded-2xl shadow-xl">
            <span className="text-xs sm:text-sm font-bold text-slate-300">
              Need immediate service or high-efficiency consultation?
            </span>
            <a
              href="tel:6168378088"
              onClick={handleDesktopCallClick}
              className="px-5 py-2.5 rounded-xl bg-rescue-500 hover:bg-rescue-600 text-white font-extrabold text-sm flex items-center shadow-md active:scale-95 transition"
            >
              <Phone className="w-4 h-4 mr-2 fill-white" />
              <span>Call (616) 837-8088</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
