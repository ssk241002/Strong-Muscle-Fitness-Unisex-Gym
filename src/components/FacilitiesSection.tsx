import { useState } from "react";
import { 
  Dumbbell, 
  Flame, 
  Zap, 
  Trophy, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { FACILITIES_DATA, Facility } from "../data/gymData";

interface FacilitiesSectionProps {
  onOpenInquiry: (facilityName: string) => void;
}

export function FacilitiesSection({ onOpenInquiry }: FacilitiesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Facilities", icon: Dumbbell },
    { id: "strength", label: "Strength & Weights", icon: Dumbbell },
    { id: "cardio", label: "Cardio & Stamina", icon: Flame },
    { id: "functional", label: "Functional & Core", icon: Zap },
    { id: "coaching", label: "Personal Training", icon: Trophy },
    { id: "amenities", label: "Gym Amenities", icon: ShieldCheck },
  ];

  const filteredFacilities = selectedCategory === "all"
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === selectedCategory);

  const getCategoryIcon = (category: Facility["category"]) => {
    switch (category) {
      case "strength": return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case "cardio": return <Flame className="w-5 h-5 text-amber-400" />;
      case "functional": return <Zap className="w-5 h-5 text-amber-400" />;
      case "coaching": return <Trophy className="w-5 h-5 text-amber-400" />;
      case "amenities": return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default: return <Dumbbell className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-neutral-900/50 border-t border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>World-Class Equipment & Zones</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Facilities for Every Workout Goal
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300">
            From heavy powerlifting and hypertrophy machines to high-intensity cardio and clean functional spaces, 
            Strong Muscle Fitness provides everything you need under one roof in Thirumullaivoyal.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-neutral-850 hover:bg-neutral-800 text-neutral-300 border border-neutral-750"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-neutral-950" : "text-amber-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Image Preview with Tag */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-neutral-700">
                    {facility.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-neutral-950/90 border border-neutral-700 shadow-md">
                    {getCategoryIcon(facility.category)}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Equipment / Highlights List */}
                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Available Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {facility.equipment.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {facility.equipment.length > 4 && (
                      <li className="text-[11px] text-amber-400/80 font-medium pl-5">
                        + {facility.equipment.length - 4} more commercial equipment
                      </li>
                    )}
                  </ul>
                </div>

                {/* Quick CTA */}
                <div className="pt-3 border-t border-neutral-800/80">
                  <button
                    onClick={() => onOpenInquiry(`Inquiry for ${facility.title}`)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-amber-500 text-neutral-200 hover:text-neutral-950 text-xs font-bold transition-all duration-200"
                  >
                    <span>Enquire About {facility.title.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-850 via-neutral-900 to-neutral-850 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Want to see the equipment in person?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Walk into our Thirumullaivoyal gym on MTH Road anytime during opening hours for a free guided tour.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry("Book Free Walk-In Tour")}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all"
            >
              Book Free Walk-In Tour
            </button>
            <a
              href="#location"
              className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold border border-neutral-700 transition-colors"
            >
              View Location Map
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
