import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Star, 
  ShieldCheck, 
  ExternalLink,
  Receipt
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs pb-24 sm:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand & Bio (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-neutral-950 font-bold shadow-lg shadow-amber-500/20">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white block">
                  Strong Muscle Fitness
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  100% Unisex Gym • Chennai
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs">
              Premier unisex fitness & bodybuilding center located on MTH Road, Thirumullaivoyal. 
              Modern heavy strength equipment, spacious cardio zone, and certified coaches to power your transformation.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-white font-bold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.8 / 5.0 (44 Reviews)</span>
              </div>
              <span className="text-[11px] text-neutral-400">Google Verified</span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Facilities & Zones</a></li>
              <li><a href="#timings" className="hover:text-amber-400 transition-colors">Gym Timings</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Tour & Gallery</a></li>
              <li><a href="#membership" className="hover:text-amber-400 transition-colors">Membership Info</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">BMI Tool</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Member Reviews</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Col 3: Operational Timings (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Operating Hours</span>
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-200 font-bold block">Monday – Saturday:</span>
                <span className="text-amber-400">Morning: 05:30 AM – 11:00 AM</span>
                <span className="text-neutral-400 block mt-0.5">Evening: 04:30 PM – 10:00 PM</span>
              </div>

              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                <span className="text-neutral-200 font-bold block">Sunday Session:</span>
                <span className="text-amber-400">06:00 AM – 10:30 AM</span>
                <span className="text-neutral-500 block text-[11px]">Evening Closed for Rest</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Google Maps (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact & Address</span>
            </h4>
            
            <div className="space-y-2.5 text-xs text-neutral-300">
              <p className="leading-relaxed">
                79, Madras Thiruvallur High Rd, Venugopal Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062
              </p>

              <div className="pt-1 space-y-1.5">
                <a 
                  href={`tel:${GYM_DETAILS.phoneNumber}`}
                  className="flex items-center gap-2 text-white font-bold hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{GYM_DETAILS.displayPhone}</span>
                </a>

                <a 
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 font-semibold hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat Support</span>
                </a>

                <a 
                  href="https://maps.app.goo.gl/L5qnM4URKzdmHEXf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 font-semibold hover:underline pt-1"
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Official Price Card on Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} Strong Muscle Fitness Unisex Gym, Thirumullaivoyal, Chennai. All rights reserved.
          </p>

          <p className="text-neutral-400">
            For accurate current quotations and active discount offers, please contact front desk directly at 9445640781.
          </p>
        </div>

      </div>
    </footer>
  );
}
