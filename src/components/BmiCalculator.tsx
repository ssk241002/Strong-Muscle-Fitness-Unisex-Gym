import { useState } from "react";
import { 
  Calculator, 
  Activity, 
  Dumbbell, 
  Flame, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  RefreshCw
} from "lucide-react";
import { GYM_DETAILS } from "../data/gymData";

export function BmiCalculator() {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activityLevel, setActivityLevel] = useState<string>("moderate");

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = heightInMeters > 0 ? (weight / (heightInMeters * heightInMeters)).toFixed(1) : "0";
  const numBmi = parseFloat(bmi);

  let category = "Normal";
  let categoryColor = "text-emerald-400";
  let badgeBg = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
  let recommendation = "Focus on muscle building, progressive overload strength training, and lean protein balance.";
  let workoutSplit = "4-5 Days/Week (Upper/Lower or Push/Pull/Legs)";

  if (numBmi < 18.5) {
    category = "Underweight";
    categoryColor = "text-sky-400";
    badgeBg = "bg-sky-500/20 text-sky-400 border-sky-500/30";
    recommendation = "Focus on healthy caloric surplus, clean hypertrophy, compound lifts, and adequate rest.";
    workoutSplit = "3-4 Days/Week (Heavy Strength & Muscle Hypertrophy)";
  } else if (numBmi >= 18.5 && numBmi < 25) {
    category = "Healthy / Optimal";
    categoryColor = "text-emerald-400";
    badgeBg = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    recommendation = "Maintain lean muscle mass, improve cardiovascular stamina, and increase lifting strength.";
    workoutSplit = "4-5 Days/Week (Balanced Strength & Cardio Split)";
  } else if (numBmi >= 25 && numBmi < 30) {
    category = "Overweight";
    categoryColor = "text-amber-400";
    badgeBg = "bg-amber-500/20 text-amber-400 border-amber-500/30";
    recommendation = "Combine structured resistance training with high-incline treadmill cardio and a clean caloric deficit.";
    workoutSplit = "5 Days/Week (Strength Training + 20 min Daily Cardio)";
  } else {
    category = "Obesity";
    categoryColor = "text-rose-400";
    badgeBg = "bg-rose-500/20 text-rose-400 border-rose-500/30";
    recommendation = "Low-impact cardio (elliptical/cycling), guided machine strength work, and structured coach guidance.";
    workoutSplit = "5-6 Days/Week (Fat Burn & Functional Mobility)";
  }

  // Estimated ideal weight range for height
  const minHealthyWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  const maxHealthyWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);

  // Daily calorie estimate (Harris-Benedict approximation)
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  bmr = gender === "male" ? bmr + 5 : bmr - 161;
  const maintenanceCalories = Math.round(bmr * (activityLevel === "low" ? 1.2 : activityLevel === "moderate" ? 1.4 : 1.6));

  const handleShareOnWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Strong Muscle Fitness Coach! I calculated my BMI on your website: BMI is ${bmi} (${category}) with Height ${height}cm and Weight ${weight}kg. I want to start a customized workout & diet plan at your gym in Thirumullaivoyal. Can you guide me?`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 bg-neutral-900/50 border-t border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Fitness Tool</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Check Your BMI & Custom Workout Recommendation
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300">
            Calculate your Body Mass Index (BMI) and discover the tailored workout plan 
            recommended by Strong Muscle Fitness trainers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Controls */}
          <div className="lg:col-span-6 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>Body Measurements</span>
              </span>

              {/* Gender selector */}
              <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    gender === "male" ? "bg-amber-500 text-neutral-950" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    gender === "female" ? "bg-amber-500 text-neutral-950" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Height Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-300">Height</label>
                <span className="text-sm font-bold text-amber-400">{height} cm</span>
              </div>
              <input
                type="range"
                min={130}
                max={210}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>130 cm</span>
                <span>170 cm</span>
                <span>210 cm</span>
              </div>
            </div>

            {/* Weight Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-300">Weight</label>
                <span className="text-sm font-bold text-amber-400">{weight} kg</span>
              </div>
              <input
                type="range"
                min={35}
                max={150}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>35 kg</span>
                <span>75 kg</span>
                <span>150 kg</span>
              </div>
            </div>

            {/* Age Input */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300">Age (Years)</label>
                <input
                  type="number"
                  min={14}
                  max={80}
                  value={age}
                  onChange={(e) => setAge(Math.max(14, Math.min(80, Number(e.target.value))))}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm font-semibold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300">Activity Level</label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm font-semibold focus:outline-none focus:border-amber-500"
                >
                  <option value="low">Sedentary (Desk Job)</option>
                  <option value="moderate">Moderate Exercise</option>
                  <option value="high">Active Lifter</option>
                </select>
              </div>
            </div>

            {/* Quick Reset */}
            <button
              type="button"
              onClick={() => {
                setHeight(170);
                setWeight(70);
                setAge(25);
                setGender("male");
              }}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to defaults</span>
            </button>
          </div>

          {/* Right Results & Recommendations */}
          <div className="lg:col-span-6 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                Your Fitness Analysis
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${badgeBg}`}>
                {category}
              </span>
            </div>

            {/* BMI Display */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                {bmi}
              </span>
              <div>
                <span className="text-xs text-neutral-400 block font-medium">Body Mass Index</span>
                <span className={`text-sm font-bold ${categoryColor}`}>
                  {category} Range
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <span className="text-[11px] text-neutral-400 block">Healthy Weight Target:</span>
                <span className="text-sm font-bold text-white">{minHealthyWeight} - {maxHealthyWeight} kg</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <span className="text-[11px] text-neutral-400 block">Est. Maintenance:</span>
                <span className="text-sm font-bold text-white">{maintenanceCalories} kcal/day</span>
              </div>
            </div>

            {/* Recommended Routine at Gym */}
            <div className="p-4 rounded-xl bg-neutral-950/90 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Dumbbell className="w-4 h-4" />
                <span>Recommended Gym Split:</span>
              </div>
              <p className="text-xs font-semibold text-white">
                {workoutSplit}
              </p>
              <p className="text-xs text-neutral-300">
                {recommendation}
              </p>
            </div>

            {/* WhatsApp CTA with pre-filled BMI stats */}
            <button
              onClick={handleShareOnWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Workout Plan with Coach on WhatsApp</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
