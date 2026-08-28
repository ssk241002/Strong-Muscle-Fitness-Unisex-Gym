import { useState, useEffect } from "react";
import { 
  Phone, 
  MessageSquare, 
  Navigation, 
  Calendar, 
  ChevronUp,
  Dumbbell
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

interface FloatingActionsProps {
  onOpenInquiry: (purpose?: string) => void;
}

export function FloatingActions({ onOpenInquiry }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top Floating Button (Desktop & Tablet) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 right-4 z-40 p-3 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-amber-400 border border-neutral-700 hover:border-amber-500 shadow-xl backdrop-blur-md transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action (Floating Pill on Desktop) */}
      <div className="hidden sm:flex fixed bottom-6 left-6 z-40 items-center gap-2">
        <a
          href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20gym%20timings%20and%20plans.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800 p-2.5 px-3 shadow-2xl flex items-center justify-between gap-2">
        
        {/* Call */}
        <a
          href={`tel:${GYM_DETAILS.phoneNumber}`}
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 active:bg-neutral-800"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20would%20like%20to%20know%20more%20details.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-600 text-white shadow-md active:bg-emerald-700"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={GYM_DETAILS.primaryMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 active:bg-neutral-800"
        >
          <Navigation className="w-4 h-4 text-sky-400 mb-0.5" />
          <span className="text-[10px] font-bold">Maps</span>
        </a>

        {/* Free Trial Button */}
        <button
          onClick={() => onOpenInquiry("Mobile Sticky Trial Button")}
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-amber-500 text-neutral-950 font-bold shadow-md active:bg-amber-400"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold">Free Trial</span>
        </button>

      </div>
    </>
  );
}
