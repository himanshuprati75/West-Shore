import React, { useState } from 'react';
import { 
  Flame, Snowflake, Droplets, Wind, Phone, CheckCircle, 
  ArrowRight, Shield, Zap, Sparkles, ChevronDown, ChevronUp, Wrench, Factory, Sparkle, Camera
} from 'lucide-react';

export default function ServicesGrid({ onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', label: 'All Top Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'heating', label: 'Heating', icon: <Flame className="w-4 h-4 text-orange-500" /> },
    { id: 'cooling', label: 'Cooling', icon: <Snowflake className="w-4 h-4 text-cyan-500" /> },
    { id: 'mechanical', label: 'Air, Water & Specialty', icon: <Droplets className="w-4 h-4 text-blue-500" /> },
  ];

  const handleDesktopCallClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && onOpenCallModal) {
      e.preventDefault();
      onOpenCallModal();
    }
  };

  const services = [
    // Top Service 1: 24/7 Furnace Repair
    {
      id: 'furnace-repair',
      isTop: true,
      category: 'heating',
      image: '/images/furnace-install.jpg',
      title: '24/7 Emergency Furnace Repair',
      badge: 'Immediate Lakeshore Dispatch',
      badgeColor: 'bg-red-50 text-rescue-500 border-red-200',
      description: 'Zero heat during freezing lakeshore winter winds? We arrive in 45 minutes with trucks stocked with genuine Trane & universal igniters, blowers, sensors, and valves.',
      features: [
        'Diagnose all furnace makes & models',
        'Flame sensors, igniters & control boards stocked',
        'Zero heat emergency priority dispatch',
        'Diagnostic fee 100% credited toward repair'
      ],
      icon: <Flame className="w-6 h-6 text-rescue-500" />
    },
    // Top Service 2: Emergency AC Repair
    {
      id: 'ac-repair',
      isTop: true,
      category: 'cooling',
      image: '/images/hero-tech.jpg',
      title: '24/7 Emergency AC Repair',
      badge: 'Same-Day Cold Air',
      badgeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      description: 'AC blowing warm air, outdoor unit buzzing, or ice forming on coils? Trane Comfort Specialist certified technicians restore icy comfort fast.',
      features: [
        'Capacitors, contactors & fan motors on truck',
        'EPA-certified refrigerant diagnostics & recharge',
        'Condensate drain line clearing & overflow safety',
        'Transparent upfront pricing before work begins'
      ],
      icon: <Snowflake className="w-6 h-6 text-cyan-500" />
    },
    // Top Service 3: Trane High-Efficiency Replacement
    {
      id: 'trane-replacement',
      isTop: true,
      category: 'heating',
      image: '/images/trane-install.jpg',
      title: 'Trane® High-Efficiency Replacement',
      badge: 'Trane Comfort Specialist',
      badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
      description: 'Replace your aging, noisy unit with an industry-leading Trane furnace or heat pump. Slash heating and cooling utility bills by up to 30%.',
      features: [
        'Trane TruComfort™ variable speed technology',
        'Up to 10-year parts & labor warranty protection',
        'Michigan Saves 0% APR financing from $89/mo',
        'Assistance with Consumers Energy & DTE utility rebates'
      ],
      icon: <Flame className="w-6 h-6 text-rescue-500" />
    },
    // Top Service 4: Water Heaters
    {
      id: 'water-heater',
      image: '/images/water-heater.jpg',
      isTop: true,
      category: 'mechanical',
      title: 'Tank & Tankless Water Heaters',
      badge: 'Endless Hot Water',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      description: 'Never suffer through a freezing shower again. Emergency repair and expert replacement for on-demand tankless and conventional gas/electric water tanks.',
      features: [
        'Continuous high-efficiency hot water supply',
        'Same-day replacement for burst or leaking tanks',
        'Space-saving tankless wall installations',
        'Licensed gas line and venting safety inspections'
      ],
      icon: <Droplets className="w-6 h-6 text-blue-500" />
    },
    // Additional Service 5: Mitsubishi Ductless Mini-Splits
    {
      id: 'mini-splits',
      image: '/images/mini-splits.jpg',
      isTop: false,
      category: 'cooling',
      title: 'Mitsubishi Electric Ductless Mini-Splits',
      badge: 'Multi-Zone Comfort',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
      description: 'Ideal for historic homes without ductwork, lakeside cottages, room additions, master suites, and finished basements across West Michigan.',
      features: [
        'Independent room-by-room climate control',
        'Ultra-high efficiency up to 30+ SEER2 ratings',
        'Whisper-quiet indoor wall & ceiling cassettes',
        'Hyper-Heating (H2i®) performance down to -13°F'
      ],
      icon: <Snowflake className="w-6 h-6 text-purple-500" />
    },
    // Additional Service 6: Geothermal Systems
    {
      id: 'geothermal',
      image: '/images/geothermal.jpg',
      isTop: false,
      category: 'heating',
      title: 'Geothermal Heating & Cooling',
      badge: 'Earth Energy Efficiency',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      description: 'Harness the steady temperature of the earth to provide ultra-clean, quiet heating and cooling with up to 70% lower operating costs.',
      features: [
        'Closed-loop & open-loop ground source systems',
        'Eligible for 30% Federal Clean Energy Tax Credit',
        'Longest equipment lifespan in the HVAC industry',
        'Complete geothermal diagnostics & loop service'
      ],
      icon: <Zap className="w-6 h-6 text-emerald-500" />
    },
    // Additional Service 7: Boiler & Radiator Repair
    {
      id: 'boilers',
      image: '/images/boiler-radiator.jpg',
      isTop: false,
      category: 'heating',
      title: 'Boiler & Hydronic Radiator Repair',
      badge: 'Hydronic Specialists',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
      description: 'Specialized diagnostic, balancing, and repair services for hydronic baseboard, radiant in-floor, and steam radiator boiler systems.',
      features: [
        'Circulator pumps, relays & zone valve service',
        'Expansion tank & pressure relief valve testing',
        'Radiator bleeding & system water balancing',
        'Annual boiler safety check & combustion analysis'
      ],
      icon: <Flame className="w-6 h-6 text-amber-500" />
    },
    // Additional Service 8: Dryer Vent & Duct Cleaning
    {
      id: 'duct-cleaning',
      isTop: false,
      category: 'mechanical',
      image: '/images/duct-cleaning.jpg',
      title: 'Air Duct & Dryer Vent Cleaning',
      badge: 'Breathe Cleaner Air',
      badgeColor: 'bg-teal-50 text-teal-600 border-teal-200',
      description: 'Eliminate built-up dust, pet dander, mold spores, and fire-hazard lint. Improve airflow and protect your HVAC system lifespan.',
      features: [
        'High-powered negative air vacuum extraction',
        'Dryer vent fire prevention lint removal',
        'Sanitizing & antimicrobial duct treatments',
        'Improves HVAC airflow & reduces energy waste'
      ],
      icon: <Wind className="w-6 h-6 text-teal-500" />
    },
    // Additional Service 9: Indoor Air Quality & Air Scrubber
    {
      id: 'iaq-air-scrubber',
      image: '/images/air-scrubber.jpg',
      isTop: false,
      category: 'mechanical',
      title: 'Air Scrubber by Aerus & Whole-Home IAQ',
      badge: 'ActivePure® Technology',
      badgeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      description: 'Certified Space Technology that eliminates up to 99.9% of surface and airborne contaminants, viruses, bacteria, and pet odors in your living spaces.',
      features: [
        'ActivePure® Technology destroys pathogens 24/7',
        'Whole-home humidifiers & dehumidifiers',
        'HEPA filtration & electronic air cleaners',
        'Protects family against seasonal allergies & mold'
      ],
      icon: <Sparkle className="w-6 h-6 text-cyan-500" />
    },
    // Additional Service 10: Custom Sheet Metal Fabrication
    {
      id: 'sheet-metal',
      image: '/images/sheet-metal.jpg',
      isTop: false,
      category: 'mechanical',
      title: 'Custom Sheet Metal Fabrication',
      badge: 'In-House Precision Shop',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      description: 'Our in-house sheet metal shop custom engineers fittings, transitions, and complete ductwork systems tailored to your unique building architecture.',
      features: [
        'Custom residential supply & return plenums',
        'Commercial spiral ducting and roof transitions',
        'Optimized airflow geometry to eliminate hot/cold spots',
        'Heavy-gauge galvanized steel & aluminum fabrication'
      ],
      icon: <Wrench className="w-6 h-6 text-slate-700" />
    },
    // Additional Service 11: Commercial HVAC & Refrigeration
    {
      id: 'commercial-hvac',
      image: '/images/commercial-hvac.jpg',
      isTop: false,
      category: 'mechanical',
      title: 'Commercial HVAC & Refrigeration',
      badge: 'Business Critical Response',
      badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      description: 'Dedicated commercial maintenance, rooftop package units (RTUs), chillers, and commercial refrigeration for West Michigan businesses.',
      features: [
        'Commercial rooftop RTU service & replacement',
        'Walk-in coolers, freezers & commercial chillers',
        'Preventative maintenance agreements with priority SLA',
        '24/7 commercial emergency refrigeration dispatch'
      ],
      icon: <Factory className="w-6 h-6 text-indigo-500" />
    }
  ];

  const visibleServices = services.filter((service) => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const matchesExpand = isExpanded || service.isTop;
    return matchesTab && matchesExpand;
  });

  // Real Project Gallery Showcase Items from Westshore Mechanical
  const galleryItems = [
    {
      img: '/images/trane-install.jpg',
      title: 'Trane High-Efficiency AC & Heat Pump',
      location: 'Grand Haven, MI',
      badge: 'Trane Certified Install'
    },
    {
      img: '/images/furnace-install.jpg',
      title: 'Gas Furnace & Custom Sheet Metal Plenum',
      location: 'Spring Lake, MI',
      badge: 'Custom Duct Shop'
    },
    {
      img: '/images/duct-cleaning.jpg',
      title: 'Whole-Home Air Duct & Dryer Cleanout',
      location: 'Muskegon, MI',
      badge: 'IAQ Clean Air'
    },
    {
      img: '/images/facility-location.jpg',
      title: 'Spring Lake Headquarters & Fleet',
      location: '530 Elm St, Spring Lake',
      badge: '24/7 Emergency Fleet'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-50 border border-rescue-500/30 text-rescue-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Spring Lake & Lakeshore Mechanical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight font-sans">
            Complete Heating, Cooling & Mechanical Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            As a licensed Trane Comfort Specialist contractor, we service all makes and models with upfront flat-rate pricing and 24/7 emergency response.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                activeTab === cat.id
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid (Hick's Law: 4 items default, toggle for all 11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
            >
              {/* Optional Real Photo Header */}
              {service.image && (
                <div className="relative h-40 w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className={`absolute top-2.5 right-2.5 text-[10px] font-black px-2 py-0.5 rounded-full border shadow-xs bg-white/95 backdrop-blur-xs ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="p-6">
                {!service.image && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-black text-navy-950 mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card Call Button */}
              <div className="p-6 pt-0">
                <a
                  href="tel:6168378088"
                  onClick={handleDesktopCallClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-navy-900 hover:bg-rescue-500 text-white font-bold text-xs flex items-center justify-center transition-all duration-150 group/btn"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>Call For This Service</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services / Less Toggle Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-900 font-extrabold text-sm transition-all duration-150 shadow-sm"
          >
            <span>{isExpanded ? 'Show Top 4 Core Services' : 'View All 11 Mechanical & IAQ Services +'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Real Work Across The Lakeshore: Photo Proof Showcase */}
        <div className="mt-14 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5 text-rescue-500" />
              <span>Real Installations & Local Heritage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950">
              Craftsmanship In Action Across Ottawa & Muskegon Counties
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Photos from our actual service calls, certified Trane installations, and custom sheet metal work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, gIdx) => (
              <div 
                key={gIdx} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-navy-950/80 text-white backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-black text-navy-950 truncate leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    ?? {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
