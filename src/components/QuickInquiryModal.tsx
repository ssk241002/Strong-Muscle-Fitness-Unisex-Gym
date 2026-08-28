import { useState, FormEvent } from "react";
import { 
  X, 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Calendar, 
  User, 
  Dumbbell,
  Sparkles
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPurpose?: string;
}

export function QuickInquiryModal({ isOpen, onClose, defaultPurpose }: QuickInquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("Muscle Gain & Strength");
  const [preferredShift, setPreferredShift] = useState("Evening Batch (4:30 PM - 10:00 PM)");
  const [purpose, setPurpose] = useState(defaultPurpose || "Book Free Trial Visit");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp prefilled query
    const message = encodeURIComponent(
      `Hello Strong Muscle Fitness Gym!\n\n` +
      `👤 Name: ${name || "Interested Visitor"}\n` +
      `📞 Phone: ${phone || "Provided on WhatsApp"}\n` +
      `🎯 Goal: ${goal}\n` +
      `⏰ Preferred Shift: ${preferredShift}\n` +
      `📌 Purpose: ${purpose}\n\n` +
      `I would like to visit the gym or get the latest membership offers.`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-neutral-900 via-neutral-850 to-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Gym Enquiry & Free Trial Visit
              </h3>
              <p className="text-xs text-neutral-400">
                Strong Muscle Fitness Unisex Gym • Thirumullaivoyal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">
                  Enquiry Message Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-xs mx-auto">
                  Your enquiry has been formatted for instant response. You can also directly call our front desk:
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${GYM_DETAILS.phoneNumber}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Front Desk: {GYM_DETAILS.phoneNumber}</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="text-xs text-neutral-400 hover:text-white underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Inquiry Purpose */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">
                  What are you interested in?
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-amber-500"
                >
                  <option value="Book Free Trial Visit">Book a Free Trial Visit / Floor Tour</option>
                  <option value="General Membership Pricing Inquiry">General Membership Pricing & Offers</option>
                  <option value="1-on-1 Personal Training Inquiry">1-on-1 Personal Training Coaching</option>
                  <option value="Fat Loss & Transformation Program">Fat Loss & Body Transformation</option>
                  <option value="Women Fitness & Timings">Women Workout Timings & Safety</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh / Deepa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Mobile / WhatsApp No.
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Goal & Preferred Shift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  >
                    <option value="Fat Loss & Belly Reduction">Fat Loss & Calorie Burn</option>
                    <option value="Muscle Gain & Strength">Muscle Building / Hypertrophy</option>
                    <option value="General Health & Stamina">General Stamina & Cardio</option>
                    <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Preferred Workout Shift
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  >
                    <option value="Morning Batch (5:30 AM - 11:00 AM)">Morning (5:30 AM - 11 AM)</option>
                    <option value="Evening Batch (4:30 PM - 10:00 PM)">Evening (4:30 PM - 10 PM)</option>
                    <option value="Flexible Shift">Flexible / Both Shifts</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-neutral-400 text-center">
                  Instant response from Strong Muscle Fitness front desk at <strong>{GYM_DETAILS.phoneNumber}</strong>.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
