import { useState, useEffect } from "react";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  Dumbbell, 
  ChevronRight 
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";
import { LiveStatusBadge } from "./LiveStatusBadge";

interface NavbarProps {
  onOpenInquiry: (purpose?: string) => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Facilities", href: "#facilities" },
    { label: "Timings", href: "#timings" },
    { label: "Gallery", href: "#gallery" },
    { label: "Membership", href: "#membership" },
    { label: "BMI Tool", href: "#calculator" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 shadow-xl py-2.5" 
          : "bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Gym Name */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-neutral-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-neutral-100 group-hover:text-amber-400 transition-colors">
                  Strong Muscle Fitness
                </span>
                <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30 uppercase tracking-wider">
                  Unisex
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="flex items-center text-amber-400 font-semibold">
                  <Star className="w-3 h-3 fill-amber-400 mr-0.5" /> 4.8
                </span>
                <span>•</span>
                <span>Thirumullaivoyal, Chennai</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Status */}
          <div className="hidden md:flex items-center gap-3">
            <LiveStatusBadge />

            {/* Direct Call button */}
            <a
              href={`tel:${GYM_DETAILS.phoneNumber}`}
              id="nav-call-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold border border-neutral-700 transition-all hover:border-neutral-600 shadow-sm"
              title="Call Gym Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{GYM_DETAILS.displayPhone}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20membership%20and%20facilities.`}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Trial Visit */}
            <button
              onClick={() => onOpenInquiry("Book Free Trial Visit")}
              id="nav-trial-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LiveStatusBadge />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-neutral-300 hover:text-amber-400 py-2.5 px-3 rounded-lg hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="border-t border-neutral-800 pt-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <a
                href={`tel:${GYM_DETAILS.phoneNumber}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-850 border border-neutral-700 text-neutral-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Front Desk</span>
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20membership%20and%20facilities.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry("Mobile Menu Trial Enquiry");
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 text-neutral-950 text-sm font-bold shadow-lg shadow-amber-500/20"
            >
              <span>Book Free Trial Visit / Enquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
