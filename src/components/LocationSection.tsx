import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Navigation, 
  Clock, 
  ExternalLink, 
  Check, 
  Bike, 
  Car,
  Copy,
  CheckCheck
} from "lucide-react";
import { useState } from "react";
import { GYM_DETAILS } from "../data/gymData";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-neutral-900/50 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Person</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Convenient Location on MTH Road, Thirumullaivoyal
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300">
            Easy access from Thirumullaivoyal, Avadi, Ambattur, and surrounding Chennai neighborhoods.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            
            <div className="space-y-6">
              {/* Gym Name & Badge */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Contact & Navigation
                </span>
                <h3 className="text-xl font-bold text-white">
                  Strong Muscle Fitness Unisex Gym
                </h3>
              </div>

              {/* Exact Address */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-neutral-200">Full Address:</span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-medium">
                      {GYM_DETAILS.address}
                    </p>
                    <p className="text-xs text-neutral-400 pt-1">
                      <strong>Landmark:</strong> {GYM_DETAILS.landmark}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-850 flex items-center justify-between">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Address Copied!" : "Copy Address"}</span>
                  </button>

                  <a
                    href={GYM_DETAILS.primaryMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Quick Contact Numbers */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] text-neutral-400 font-medium">Direct Phone Line</div>
                    <a 
                      href={`tel:${GYM_DETAILS.phoneNumber}`}
                      className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {GYM_DETAILS.displayPhone}
                    </a>
                  </div>
                  <a
                    href={`tel:${GYM_DETAILS.phoneNumber}`}
                    className="px-3 py-1.5 rounded-lg bg-amber-500 text-neutral-950 text-xs font-bold hover:bg-amber-400"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] text-neutral-400 font-medium">WhatsApp Support</div>
                    <div className="text-sm font-bold text-white">Instant Chat & Enquiries</div>
                  </div>
                  <a
                    href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20want%20to%20visit%20the%20gym%20today.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Parking & Accessibility */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">
                  <Bike className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Two-Wheeler Parking</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-2 text-xs text-neutral-300">
                  <Car className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Main MTH Road Access</span>
                </div>
              </div>
            </div>

            {/* Direct Navigation Button */}
            <a
              href={GYM_DETAILS.primaryMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Instant Turn-by-Turn Directions</span>
            </a>

          </div>

          {/* Right Interactive Map / Location Preview */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden relative min-h-[380px] lg:min-h-[500px] flex flex-col shadow-xl">
            
            {/* Embedded Interactive Map Card */}
            <div className="relative flex-1 w-full h-full bg-neutral-950">
              <iframe
                title="Strong Muscle Fitness Unisex Gym Location"
                src="https://maps.google.com/maps?q=Strong%20Muscle%20Fitness%20Unisex%20Gym%20Thirumullaivoyal%20Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />

              {/* Map Floating Tag */}
              <div className="absolute top-4 left-4 z-10 bg-neutral-950/90 backdrop-blur-md border border-neutral-700 p-3 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>Strong Muscle Fitness Gym</span>
                </div>
                <p className="text-[11px] text-neutral-300 mt-1">
                  79, MTH Road, Venugopal Nagar, Thirumullaivoyal, Chennai
                </p>
                <div className="mt-2 pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-amber-400 font-semibold">
                  <span>⭐ 4.8 Rating</span>
                  <span>Open 7 Days</span>
                </div>
              </div>

              {/* Bottom Right Expand Link */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={GYM_DETAILS.primaryMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-950/90 text-neutral-100 hover:text-amber-400 text-xs font-bold border border-neutral-700 backdrop-blur-md shadow-lg"
                >
                  <span>Open Full Google Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
