import { useState } from "react";
import { 
  Check, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Receipt, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  Target
} from "lucide-react";
import { MEMBERSHIP_TIERS, GYM_DETAILS } from "../data/gymData";

interface MembershipSectionProps {
  onOpenInquiry: (planName: string) => void;
}

export function MembershipSection({ onOpenInquiry }: MembershipSectionProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>("Fat Loss & Toning");

  const goals = [
    { label: "Fat Loss & Toning", emoji: "🔥" },
    { label: "Muscle & Hypertrophy", emoji: "💪" },
    { label: "Strength & Power", emoji: "⚡" },
    { label: "General Stamina & Health", emoji: "🏃" },
  ];

  const handleWhatsAppCustomEnquiry = (planTitle: string) => {
    const text = encodeURIComponent(
      `Hi Strong Muscle Fitness Gym! I'm interested in the "${planTitle}" for my goal: "${selectedGoal}". Could you please share the current membership fees and available offers?`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="membership" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Membership Options</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Plans for Every Fitness Journey
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300">
            Choose the duration that fits your routine. All memberships include complete gym floor access, cardio zone, 
            locker facilities, and general floor trainer guidance.
          </p>
        </div>

        {/* Goal Selector Header Bar */}
        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4 sm:p-6 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Target className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-sm font-bold text-white">Select Your Fitness Goal:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {goals.map((g) => (
                <button
                  key={g.label}
                  onClick={() => setSelectedGoal(g.label)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedGoal === g.label
                      ? "bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20 font-bold"
                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-750 border border-neutral-700"
                  }`}
                >
                  <span>{g.emoji}</span>
                  <span>{g.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-gradient-to-b from-neutral-850 to-neutral-900 border-2 border-amber-500 shadow-xl shadow-amber-500/10 scale-100 lg:-translate-y-2"
                  : "bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-lg"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {tier.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5">
                    {tier.description}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800 text-[11px] text-neutral-300">
                  <span className="font-bold text-amber-400">Best for: </span>
                  {tier.recommendedFor}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-neutral-800">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Included Benefits:
                  </span>
                  <ul className="space-y-2">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2 border-t border-neutral-800 mt-6">
                <button
                  onClick={() => handleWhatsAppCustomEnquiry(tier.title)}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                    tier.popular
                      ? "bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20"
                      : "bg-neutral-800 hover:bg-amber-500 text-neutral-200 hover:text-neutral-950"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenInquiry(`Membership Inquiry: ${tier.title}`)}
                  className="w-full text-center text-[11px] text-neutral-400 hover:text-white py-1 transition-colors"
                >
                  Or Submit Quick Form →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Official Price Card Callout (Respects user's requirement to avoid wrong fee claims) */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-850 to-neutral-900 border border-neutral-800 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
                <Receipt className="w-4 h-4" />
                <span>Transparent Official Pricing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Check Current Official Price Card & Active Discounts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
                To guarantee you always get the latest authentic seasonal discounts, combo offers, or student rates, 
                you can view the official price card photo directly on Google Maps or contact our front desk at <strong>9445640781</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="https://maps.app.goo.gl/L5qnM4URKzdmHEXf7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <Receipt className="w-4 h-4" />
                <span>View Price Card on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${GYM_DETAILS.phoneNumber}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-semibold border border-neutral-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {GYM_DETAILS.phoneNumber}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
