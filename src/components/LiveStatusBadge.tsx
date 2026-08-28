import { useState, useEffect } from "react";
import { Clock, CheckCircle2, Moon } from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

export function LiveStatusBadge() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
    subtext: string;
    color: string;
  }>({
    isOpen: false,
    text: "Checking Status...",
    subtext: "",
    color: "bg-neutral-800 text-neutral-300"
  });

  useEffect(() => {
    function checkOpenStatus() {
      // Get current IST time (UTC + 5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      
      const day = istTime.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const decimalTime = hours + minutes / 60;

      const isSunday = day === 0;

      if (isSunday) {
        // Sunday: 6:00 AM to 10:30 AM
        if (decimalTime >= 6 && decimalTime < 10.5) {
          setStatus({
            isOpen: true,
            text: "Open Now",
            subtext: "Sunday Morning Batch (Closes at 10:30 AM)",
            color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
          });
        } else if (decimalTime < 6) {
          setStatus({
            isOpen: false,
            text: "Opens at 6:00 AM",
            subtext: "Sunday Morning Session",
            color: "bg-amber-500/10 border-amber-500/30 text-amber-400"
          });
        } else {
          setStatus({
            isOpen: false,
            text: "Closed for Evening",
            subtext: "Opens Mon at 5:30 AM",
            color: "bg-neutral-800 border-neutral-700 text-neutral-400"
          });
        }
      } else {
        // Mon-Sat: 5:30 AM to 11:00 AM & 4:30 PM to 10:00 PM
        if (decimalTime >= 5.5 && decimalTime < 11.0) {
          setStatus({
            isOpen: true,
            text: "Open Now",
            subtext: `Morning Shift (Until 11:00 AM)`,
            color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
          });
        } else if (decimalTime >= 16.5 && decimalTime < 22.0) {
          setStatus({
            isOpen: true,
            text: "Open Now",
            subtext: `Evening Shift (Until 10:00 PM)`,
            color: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
          });
        } else if (decimalTime < 5.5) {
          setStatus({
            isOpen: false,
            text: "Opens at 5:30 AM",
            subtext: "Morning Workout Shift",
            color: "bg-amber-500/15 border-amber-500/30 text-amber-400"
          });
        } else if (decimalTime >= 11.0 && decimalTime < 16.5) {
          setStatus({
            isOpen: false,
            text: "Opens at 4:30 PM",
            subtext: "Evening Workout Shift",
            color: "bg-amber-500/15 border-amber-500/30 text-amber-400"
          });
        } else {
          setStatus({
            isOpen: false,
            text: "Closed for the Night",
            subtext: "Opens Tomorrow at 5:30 AM",
            color: "bg-neutral-800 border-neutral-700 text-neutral-400"
          });
        }
      }
    }

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium backdrop-blur-md ${status.color}`}>
      <span className="relative flex h-2 w-2">
        {status.isOpen ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
        )}
      </span>
      <span className="font-semibold">{status.text}</span>
      {status.subtext && (
        <span className="hidden sm:inline text-neutral-400 border-l border-neutral-700 pl-2">
          {status.subtext}
        </span>
      )}
    </div>
  );
}
