import { 
  Star, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Dumbbell, 
  Flame, 
  Users, 
  Clock, 
  Sparkles,
  Award
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";
import indianWorkoutDuo from "../assets/images/indian_couple_workout_1787940192338.jpg";

interface HeroProps {
  onOpenInquiry: (purpose?: string) => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/80 to-neutral-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#reviews"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.8 Rating (44+ Google Reviews)</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700 text-neutral-300 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Thirumullaivoyal, Chennai</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                <span className="block text-amber-400 font-black drop-shadow-sm">
                  Strong Muscle Fitness Unisex Gym
                </span>
              </h1>

              {/* 2 small lines for tagline */}
              <div className="space-y-1 pt-1 max-w-2xl">
                <p className="text-base sm:text-lg text-neutral-200 font-medium leading-normal">
                  Transform your strength and fitness with certified coaching and premium equipment.
                </p>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-normal">
                  Thirumullaivoyal’s top-rated 100% unisex training floor on MTH Road — open 7 days a week.
                </p>
              </div>
            </div>

            {/* Key Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-200">100% Unisex Friendly</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                <Dumbbell className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-200">Heavy Strength Racks</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-200">Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-200">Cardio & Fat Burn</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-200">5:30 AM to 10 PM</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-200">Custom Diet Guidance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenInquiry("Hero Book Trial Visit")}
                id="hero-trial-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-neutral-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Trial Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20saw%20your%20landing%20page%20and%20would%20like%20to%20know%20more%20details%20about%20joining.`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneNumber}`}
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-100 font-semibold text-sm sm:text-base border border-neutral-700 transition-all hover:border-neutral-500"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {GYM_DETAILS.phoneNumber}</span>
              </a>
            </div>

            {/* Address quick line */}
            <div className="flex items-start gap-2 text-xs text-neutral-400 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Exact Address:</strong> 79, Madras Thiruvallur High Rd, Venugopal Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Visual Showcase & Live Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card with Indian Workout Duo */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl shadow-black/80 group">
                <img
                  src={indianWorkoutDuo}
                  alt="Indian man and woman working out at Strong Muscle Fitness Unisex Gym"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Overlay Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-amber-500 text-neutral-950 text-xs font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>Unisex Training Floor</span>
                    </span>
                    <a
                      href={GYM_DETAILS.primaryMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-medium bg-neutral-900/80 px-2.5 py-1 rounded border border-neutral-700"
                    >
                      <span>Google Maps View</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Strong Muscle Fitness Unisex Gym
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    79, Madras Thiruvallur High Rd, Venugopal Nagar, Thirumullaivoyal, Chennai 600062
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Google Rating */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-neutral-900/95 backdrop-blur-md border border-neutral-700 p-3.5 rounded-xl shadow-xl flex items-center gap-3 animate-in fade-in duration-300">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white flex items-center gap-1">
                    4.8 / 5.0
                    <span className="text-[11px] font-normal text-neutral-400">(44 Google Reviews)</span>
                  </div>
                  <p className="text-[11px] text-amber-400 font-medium">Top Rated in Thirumullaivoyal</p>
                </div>
              </div>

              {/* Floating Stat Card 2: Operating Timings */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-neutral-900/95 backdrop-blur-md border border-neutral-700 p-3.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Morning & Evening Shifts
                  </div>
                  <p className="text-[11px] text-emerald-400 font-medium">5:30 AM - 11 AM • 4:30 PM - 10 PM</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Numbers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-neutral-800">
          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">4.8 ★</div>
            <div className="text-xs text-neutral-400 font-medium mt-1">Google Rating (44 Reviews)</div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs text-neutral-400 font-medium mt-1">Unisex & Safe for Men & Women</div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">7 Days</div>
            <div className="text-xs text-neutral-400 font-medium mt-1">Open Every Day of the Week</div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1-on-1</div>
            <div className="text-xs text-neutral-400 font-medium mt-1">Certified Personal Coaching</div>
          </div>
        </div>

      </div>
    </section>
  );
}
