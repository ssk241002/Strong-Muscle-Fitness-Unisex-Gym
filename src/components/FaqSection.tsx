import { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Phone,
  Sparkles
} from "lucide-react";
import { FAQ_DATA, GYM_DETAILS } from "../data/gymData";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300">
            Everything you need to know about getting started at Strong Muscle Fitness Unisex Gym.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? "bg-neutral-900 border-amber-500/40 shadow-lg shadow-black/40" 
                    : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-neutral-800 text-amber-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-500 text-neutral-950" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs text-neutral-400">
              Our gym front desk is always available to assist you.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Strong%20Muscle%20Fitness%20Gym%2C%20I%20have%20a%20question%20about%20the%20gym.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={`tel:${GYM_DETAILS.phoneNumber}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold border border-neutral-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Front Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
