import React, { useState } from 'react';
import { MapPin, Search, Check, Phone } from 'lucide-react';

export default function ServiceAreas() {
  const [search, setSearch] = useState('');

  // 16 Core Municipalities Across the Lakeshore & West Michigan
  const primaryCities = [
    { name: 'Spring Lake', county: 'Ottawa', zip: '49456', tag: 'Headquarters' },
    { name: 'Grand Haven', county: 'Ottawa', zip: '49417', tag: 'Tri-Cities Hub' },
    { name: 'Ferrysburg', county: 'Ottawa', zip: '49409', tag: 'Local Hub' },
    { name: 'Muskegon', county: 'Muskegon', zip: '49440-49445', tag: 'North Hub' },
    { name: 'Norton Shores', county: 'Muskegon', zip: '49441', tag: 'Lakeshore Hub' },
    { name: 'Allendale', county: 'Ottawa', zip: '49401', tag: 'Central Hub' },
    { name: 'Fruitport', county: 'Muskegon', zip: '49415', tag: 'Active Daily' },
    { name: 'West Olive', county: 'Ottawa', zip: '49460', tag: 'Lakeshore Hub' },
    { name: 'Whitehall', county: 'Muskegon', zip: '49461', tag: 'North Hub' },
    { name: 'Twin Lake', county: 'Muskegon', zip: '49457', tag: 'North Hub' },
    { name: 'Holland', county: 'Ottawa', zip: '49423, 49424', tag: 'South Hub' },
    { name: 'Grand Rapids', county: 'Kent', zip: '49503', tag: 'Metro Dispatch' },
    { name: 'Grandville', county: 'Kent', zip: '49418', tag: 'Active Daily' },
    { name: 'Wyoming', county: 'Kent', zip: '49509', tag: 'Fast Dispatch' },
    { name: 'Rockford', county: 'Kent', zip: '49341', tag: 'North Hub' },
    { name: 'Comstock', county: 'West MI', zip: '49041', tag: 'Coverage Area' }
  ];

  const filtered = search.trim() === ''
    ? primaryCities
    : primaryCities.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase()) || 
        c.county.toLowerCase().includes(search.toLowerCase()) ||
        c.zip.includes(search)
      );

  return (
    <section id="service-areas" className="py-12 sm:py-16 bg-white text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-rescue-500" />
            <span>Lakeshore & West Michigan Coverage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-navy-950 font-sans">
            Core Service Communities We Protect
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Headquartered at 530 Elm St in Spring Lake, our rapid-response service trucks are stationed across Ottawa, Muskegon, and Kent counties.
          </p>

          {/* Quick Finder Input */}
          <div className="mt-5 max-w-sm mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Quick search city or zip..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 outline-none transition shadow-sm"
            />
          </div>
        </div>

        {/* All Service Area Cities Displayed Simultaneously */}
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
          {filtered.map((city, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-orange-50/60 border border-slate-200 hover:border-rescue-500/50 rounded-xl p-3 sm:p-3.5 transition-all shadow-sm hover:shadow text-left flex items-center space-x-3 min-w-[145px] sm:min-w-[170px]"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-rescue-500 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 leading-tight">
                  {city.county} County
                </span>
                <div className="text-xs sm:text-sm font-extrabold text-navy-950 truncate leading-snug">
                  {city.name}
                </div>
                <div className="text-[10px] font-semibold text-emerald-700 flex items-center mt-0.5">
                  <Check className="w-3 h-3 mr-0.5 flex-shrink-0 text-emerald-600" />
                  <span>&lt; 45-Min Arrival</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Local Guarantee */}
        <div className="mt-8 text-center text-xs text-slate-600">
          <span>Don't see your city listed? Call our Spring Lake dispatch team at </span>
          <a href="tel:6168378088" className="font-extrabold text-rescue-500 hover:text-rescue-600 underline">
            (616) 837-8088
          </a>
          <span> to verify immediate on-call technician availability in your neighborhood.</span>
        </div>

      </div>
    </section>
  );
}
