import { useState } from "react";
import { 
  Clock, 
  Sun, 
  Moon, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Info,
  PhoneCall,
  Sparkles
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";
import { LiveStatusBadge } from "./LiveStatusBadge";

export function TimingsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "morning" | "evening">("all");

  const peakHoursData = [
    { time: "05:30 AM - 07:00 AM", crowd: "Moderate (Great for quiet early lift)", level: "med", width: "55%" },
    { time: "07:00 AM - 09:30 AM", crowd: "Brisk / Energized (Popular morning batch)", level: "high", width: "85%" },
    { time: "09:30 AM - 11:00 AM", crowd: "Peaceful & Open (Ideal for focused training)", level: "low", width: "35%" },
    { time: "04:30 PM - 06:30 PM", crowd: "Steady Flow (Great for evening warmups)", level: "med", width: "60%" },
    { time: "06:30 PM - 08:30 PM", crowd: "High Energy Peak (Prime workout atmosphere)", level: "peak", width: "95%" },
    { time: "08:30 PM - 10:00 PM", crowd: "Relaxed & Focused (Late night lifters)", level: "low", width: "40%" },
  ];

  return (
    <section id="timings" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <LiveStatusBadge />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Timings for Your Active Lifestyle
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300">
            Whether you love crushing workouts before sunrise or lifting after a long workday, 
            our dual split shifts provide ample flexibility 7 days a week.
          </p>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Weekday Morning Card */}
          <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 relative overflow-hidden shadow-xl group hover:border-amber-500/50 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sun className="w-24 h-24 text-amber-400" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Shift 1</span>
                <h3 className="text-lg font-bold text-white">Morning Batch</h3>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                05:30 AM <span className="text-sm text-neutral-400 font-normal">to</span> 11:00 AM
              </div>
              <p className="text-xs text-neutral-300">
                Monday to Saturday. Fresh morning air, energetic music, and full trainer availability.
              </p>
            </div>

            <div className="space-y-2 border-t border-neutral-800 pt-4">
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ideal for office goers, students & early lifters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cardio fat burn & full strength access</span>
              </div>
            </div>
          </div>

          {/* Weekday Evening Card */}
          <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 relative overflow-hidden shadow-xl group hover:border-amber-500/50 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Moon className="w-24 h-24 text-amber-400" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Shift 2</span>
                <h3 className="text-lg font-bold text-white">Evening Batch</h3>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                04:30 PM <span className="text-sm text-neutral-400 font-normal">to</span> 10:00 PM
              </div>
              <p className="text-xs text-neutral-300">
                Monday to Saturday. High-voltage energy, heavy strength training, and spotter assistance.
              </p>
            </div>

            <div className="space-y-2 border-t border-neutral-800 pt-4">
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>After-work de-stress & hypertrophy sessions</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open till late 10:00 PM for convenience</span>
              </div>
            </div>
          </div>

          {/* Sunday Weekend Card */}
          <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 relative overflow-hidden shadow-xl group hover:border-amber-500/50 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar className="w-24 h-24 text-amber-400" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Weekend Special</span>
                <h3 className="text-lg font-bold text-white">Sunday Schedule</h3>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                06:00 AM <span className="text-sm text-neutral-400 font-normal">to</span> 10:30 AM
              </div>
              <p className="text-xs text-neutral-300">
                Sunday Morning Session open for weekend workouts. Evening is dedicated to recovery & deep maintenance.
              </p>
            </div>

            <div className="space-y-2 border-t border-neutral-800 pt-4">
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Weekend cardio, endurance & full body lifts</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sunday Evening: Closed for Rest</span>
              </div>
            </div>
          </div>

        </div>

        {/* Crowd Density & Peak Hours Guide */}
        <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Floor Activity & Quiet Hours Guide</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Find the Best Time for Your Workout Style
              </h3>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Quiet</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Steady</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Peak Energy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {peakHoursData.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-white">{item.time}</span>
                  <span className={`font-medium text-xs ${
                    item.level === 'low' ? 'text-emerald-400' :
                    item.level === 'med' ? 'text-amber-400' : 'text-orange-400'
                  }`}>
                    {item.level === 'low' ? 'Quiet & Open' : item.level === 'med' ? 'Moderate' : 'Peak Energy'}
                  </span>
                </div>
                
                {/* Visual bar */}
                <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      item.level === 'low' ? 'bg-emerald-500' :
                      item.level === 'med' ? 'bg-amber-500' : 'bg-orange-500'
                    }`}
                    style={{ width: item.width }}
                  />
                </div>
                
                <p className="text-[11px] text-neutral-400">{item.crowd}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Trainers and spotters are present throughout both morning and evening shifts.
            </span>
            <a
              href={`tel:${GYM_DETAILS.phoneNumber}`}
              className="text-amber-400 hover:underline flex items-center gap-1 font-semibold shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Questions about timings? Call {GYM_DETAILS.phoneNumber}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
