import indianWorkoutDuo from "../assets/images/indian_couple_workout_1787940192338.jpg";

export interface Facility {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'functional' | 'coaching' | 'amenities';
  description: string;
  equipment: string[];
  iconName: string;
  tag: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  verified: boolean;
}

export interface PhotoItem {
  id: string;
  title: string;
  caption: string;
  category: 'Floor & Equipment' | 'Strength Zone' | 'Cardio' | 'Trainers & Members' | 'Atmosphere';
  mapsUrl: string;
  imageUrl: string;
}

export const GYM_DETAILS = {
  name: "Strong Muscle Fitness Unisex Gym",
  shortName: "Strong Muscle Fitness",
  tagline: "Unisex Fitness & Strength Training Center in Thirumullaivoyal",
  rating: 4.8,
  reviewCount: 44,
  phoneNumber: "9445640781",
  displayPhone: "+91 94456 40781",
  address: "79, Madras Thiruvallur High Rd, Venugopal Nagar, Thirumullaivoyal, Chennai, Avadi, Tamil Nadu 600062",
  landmark: "Located on MTH Road, Venugopal Nagar, Thirumullaivoyal (near Avadi junction)",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600062",
  type: "Unisex Gym (Men & Women)",
  primaryMapsUrl: "https://maps.app.goo.gl/HSP5m8JZ5zDqy13SA",
  allMapsUrls: [
    { label: "Main Location & Exterior", url: "https://maps.app.goo.gl/HSP5m8JZ5zDqy13SA" },
    { label: "Equipment & Gym Floor View 1", url: "https://maps.app.goo.gl/P5Kue6xDy8QVRXpE9" },
    { label: "Strength Training Area", url: "https://maps.app.goo.gl/M62J5rZ6NjBLkStr7" },
    { label: "Cardio & Free Weights", url: "https://maps.app.goo.gl/weMVr5Sd37DcazXt5" },
    { label: "Workout Floor & Ambience", url: "https://maps.app.goo.gl/ZiYD25sxVBLQRt3f9" },
    { label: "Training Equipment Line", url: "https://maps.app.goo.gl/6KhhAmJxBdjKFxDr9" },
    { label: "Official Price & Membership Card", url: "https://maps.app.goo.gl/L5qnM4URKzdmHEXf7" }
  ],
  whatsappNumber: "919445640781",
  timings: {
    weekdays: {
      morning: { start: "05:30 AM", end: "11:00 AM", startHour: 5.5, endHour: 11 },
      evening: { start: "04:30 PM", end: "10:00 PM", startHour: 16.5, endHour: 22 }
    },
    saturday: {
      morning: { start: "05:30 AM", end: "11:00 AM", startHour: 5.5, endHour: 11 },
      evening: { start: "04:30 PM", end: "10:00 PM", startHour: 16.5, endHour: 22 }
    },
    sunday: {
      morning: { start: "06:00 AM", end: "10:30 AM", startHour: 6, endHour: 10.5 },
      evening: { start: "Closed", end: "Rest Day", startHour: 0, endHour: 0 }
    }
  }
};

export const GYM_HIGHLIGHTS = [
  {
    title: "100% Unisex Friendly",
    description: "Welcoming, comfortable and respectful training environment for both men & women of all fitness levels.",
    icon: "Users"
  },
  {
    title: "Heavy Duty Commercial Equipment",
    description: "Olympic grade barbells, heavy dumbbells, multi-cable stations, and ergonomic machines for every muscle group.",
    icon: "Dumbbell"
  },
  {
    title: "Certified Personal Guidance",
    description: "Experienced fitness trainers on floor to guide proper form, prevent injuries, and accelerate workout progress.",
    icon: "Award"
  },
  {
    title: "Flexible Split Timings",
    description: "Early morning 5:30 AM batch to late night 10:00 PM batch to comfortably fit your busy work & college schedule.",
    icon: "Clock"
  },
  {
    title: "Air-Conditioned & Well Ventilated",
    description: "Spacious training floor with energetic music, proper ventilation, and clean hygienic surroundings.",
    icon: "Wind"
  },
  {
    title: "Custom Diet & Workout Splits",
    description: "Tailored routines for fat loss, lean muscle building, body recomposition, and overall functional stamina.",
    icon: "Target"
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "strength-zone",
    title: "Heavy Strength & Free Weights Zone",
    category: "strength",
    description: "Designed for serious hypertrophy, strength gains, and powerlifting fundamentals with commercial steel equipment.",
    equipment: [
      "Olympic Barbells & Bumper Weight Plates",
      "Dumbbell Racks from 2.5 kg to 40+ kg",
      "Power Squat Racks & Smith Machines",
      "Flat, Incline & Decline Olympic Benches",
      "Dual Cable Crossover & Lat Pulldown Stations",
      "Seated Cable Rows & T-Bar Row Stations",
      "Leg Press (45°), Hack Squat & Leg Extension / Curl Units"
    ],
    iconName: "Dumbbell",
    tag: "Muscle Building & Strength",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardio-zone",
    title: "Endurance & Cardio Zone",
    category: "cardio",
    description: "High-performance cardiovascular machines to burn calories, boost stamina, and strengthen heart health.",
    equipment: [
      "Commercial Grade Motorized Treadmills with Incline",
      "Elliptical Cross Trainers",
      "Stationary Spin & Upright Bikes",
      "Stair Climbers / Steppers",
      "Heart Rate & Calorie Tracking Monitors"
    ],
    iconName: "Flame",
    tag: "Fat Loss & Stamina",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional-zone",
    title: "Unisex Functional & Core Area",
    category: "functional",
    description: "Dedicated floor space for core strengthening, mobility drills, bodyweight training, and HIIT sessions for both men and women.",
    equipment: [
      "Kettlebells & Medicine Slam Balls",
      "Heavy Battle Ropes for High-Intensity Conditioning",
      "Plyometric Jump Boxes & Step Benches",
      "Resistance Bands, Suspension Straps & Foam Rollers",
      "Captain's Chair, Abdominal Crunches & Hyperextension Benches"
    ],
    iconName: "Zap",
    tag: "Mobility & Core Strength",
    imageUrl: indianWorkoutDuo
  },
  {
    id: "personal-training",
    title: "Personal Training & Body Transformation",
    category: "coaching",
    description: "1-on-1 dedicated coaching programs crafted around your specific body type, metabolic rate, and lifestyle.",
    equipment: [
      "Weekly Body Composition & Measurement Audits",
      "Personalized Calorie & Macro Diet Charts",
      "Progressive Overload Tracking",
      "Corrective Posture & Form Coaching",
      "Special Programs for Beginners, Weight Loss & Muscle Gain"
    ],
    iconName: "Trophy",
    tag: "1-on-1 Transformation",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenities",
    title: "Gym Amenities & Member Comfort",
    category: "amenities",
    description: "Modern conveniences designed to make your daily gym workout comfortable, secure, and energizing.",
    equipment: [
      "Separate Changing Rooms & Secure Lockers",
      "Clean & Hygienic Washrooms",
      "Purified RO Drinking Water Dispenser",
      "High-Energy Sound System & Music",
      "Spacious Bike & Two-Wheeler / Car Parking on MTH Road"
    ],
    iconName: "ShieldCheck",
    tag: "Clean & Convenient",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_ITEMS: PhotoItem[] = [
  {
    id: "g0",
    title: "Unisex Workout Session",
    caption: "Dedicated men & women training floor with personal coaching, motivating atmosphere and proper guidance.",
    category: "Trainers & Members",
    mapsUrl: "https://maps.app.goo.gl/ZiYD25sxVBLQRt3f9",
    imageUrl: indianWorkoutDuo
  },
  {
    id: "g1",
    title: "Gym Entrance & Reception",
    caption: "Welcome desk, member registration and front lobby on MTH Road, Thirumullaivoyal.",
    category: "Atmosphere",
    mapsUrl: "https://maps.app.goo.gl/HSP5m8JZ5zDqy13SA",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g2",
    title: "Main Workout Floor & Heavy Racks",
    caption: "Spacious training arena fitted with heavy-duty power racks and multiple bench stations.",
    category: "Floor & Equipment",
    mapsUrl: "https://maps.app.goo.gl/P5Kue6xDy8QVRXpE9",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g3",
    title: "Strength & Free Weight Section",
    caption: "Comprehensive dumbell array up to heavy weights with rubberized shock-absorbing flooring.",
    category: "Strength Zone",
    mapsUrl: "https://maps.app.goo.gl/M62J5rZ6NjBLkStr7",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g4",
    title: "Cardio & Endurance Line",
    caption: "Motorized treadmills, cross trainers and spin bikes for stamina building and fat burn.",
    category: "Cardio",
    mapsUrl: "https://maps.app.goo.gl/weMVr5Sd37DcazXt5",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g5",
    title: "Functional Training & Core Space",
    caption: "Open space for kettlebell swings, battle ropes, mobility work and HIIT conditioning.",
    category: "Floor & Equipment",
    mapsUrl: "https://maps.app.goo.gl/ZiYD25sxVBLQRt3f9",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g6",
    title: "Machine Rows & Cable Multi-Station",
    caption: "Isolate muscle groups with pin-loaded and plate-loaded biomechanic machines.",
    category: "Floor & Equipment",
    mapsUrl: "https://maps.app.goo.gl/6KhhAmJxBdjKFxDr9",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "r1",
    author: "Karthik R.",
    rating: 5,
    date: "1 month ago",
    comment: "Best unisex gym in Thirumullaivoyal area! The equipment is well maintained, spacious floor, and trainers are always available on the floor to correct your posture. Highly recommended for beginners and serious lifters.",
    tag: "Trainer & Atmosphere",
    verified: true
  },
  {
    id: "r2",
    author: "Priya S.",
    rating: 5,
    date: "2 months ago",
    comment: "Very safe and comfortable environment for women. Morning batch is great, and the cardio and strength machines are top notch. The trainer provided me with a custom beginner routine that gave great results in 8 weeks.",
    tag: "Women Friendly & Safe",
    verified: true
  },
  {
    id: "r3",
    author: "Santhosh Kumar",
    rating: 5,
    date: "3 months ago",
    comment: "Heavy dumbbells, power squat racks, and multiple cable stations. No unnecessary waiting for weights even in the evening. Affordable pricing and genuine guidance from the coach.",
    tag: "Heavy Equipment",
    verified: true
  },
  {
    id: "r4",
    author: "Vigneshwaran M.",
    rating: 5,
    date: "4 months ago",
    comment: "Located conveniently right on MTH road. Ample parking, good music, air conditioning, and clean washrooms. 4.8 stars well deserved for Strong Muscle Fitness!",
    tag: "Location & Facilities",
    verified: true
  },
  {
    id: "r5",
    author: "Deepak Raj",
    rating: 4.8,
    date: "5 months ago",
    comment: "Joined for fat loss and gained noticeable strength and stamina. The coaches explain workouts clearly without pushing supplements unnecessarily. Genuine gym in Avadi/Thirumullaivoyal.",
    tag: "Fat Loss & Results",
    verified: true
  }
];

export const MEMBERSHIP_TIERS = [
  {
    title: "Monthly Membership",
    period: "1 Month Validity",
    description: "Great for testing the gym vibe, visitors or short-term training goals.",
    features: [
      "Full access to Strength & Cardio floor",
      "Locker & changing room usage",
      "General trainer floor guidance",
      "Flexible morning & evening shifts",
      "Complimentary initial body assessment"
    ],
    recommendedFor: "Short-term & Trial lifters",
    popular: false
  },
  {
    title: "Quarterly Transformation",
    period: "3 Months Plan",
    description: "Ideal time frame for seeing noticeable fat loss and muscle toning results.",
    features: [
      "Full access to all workout zones",
      "Custom workout split chart",
      "Basic diet & nutrition recommendations",
      "Progress tracking every 3 weeks",
      "Priority assistance from floor trainers",
      "Cost saving over monthly renewal"
    ],
    recommendedFor: "Transformation Seekers",
    popular: true
  },
  {
    title: "Half-Yearly & Annual Value",
    period: "6 or 12 Months",
    description: "The most economical option for committed lifters building a long-term fitness habit.",
    features: [
      "Maximum cost savings on active tenure",
      "Unlimited gym sessions across all open hours",
      "Comprehensive diet & workout updates",
      "Complimentary suspension/freeze option for travel",
      "Exclusive access to annual fitness challenges"
    ],
    recommendedFor: "Committed Fitness Enthusiasts",
    popular: false
  },
  {
    title: "1-on-1 Personal Training",
    period: "Monthly / Package Based",
    description: "Dedicated one-on-one sessions with a certified coach for rapid results.",
    features: [
      "Exclusive 1-on-1 attention every session",
      "Targeted workout programming & strict form spotting",
      "Calorie & macronutrient meal planning",
      "Weekly body fat % & girth measurements",
      "Injury rehabilitation & posture alignment"
    ],
    recommendedFor: "Fast-Track Body Transformation",
    popular: false
  }
];

export const FAQ_DATA = [
  {
    question: "Is Strong Muscle Fitness a unisex gym?",
    answer: "Yes! Strong Muscle Fitness is 100% unisex and provides a comfortable, safe, respectful and motivating training environment for both women and men of all ages."
  },
  {
    question: "What are the gym operating hours?",
    answer: "Monday through Saturday, we operate in two convenient shifts: Morning from 5:30 AM to 11:00 AM, and Evening from 4:30 PM to 10:00 PM. On Sundays, we are open for the morning shift from 6:00 AM to 10:30 AM."
  },
  {
    question: "How do I know the exact membership fees and current offers?",
    answer: "Membership fees depend on duration (Monthly, 3-Month, 6-Month, Annual) and optional Personal Training packages. We offer seasonal discounts and student offers. Please call or WhatsApp us at 9445640781 or visit our front desk on MTH Road to get the exact current rates and view our official price card."
  },
  {
    question: "Can beginners join without prior workout experience?",
    answer: "Absolutely. Most of our members started as complete beginners. Our certified floor trainers guide you through basic machine setups, warm-ups, correct lifting posture, and progressive workout charts."
  },
  {
    question: "Is parking available at the gym?",
    answer: "Yes, there is convenient bike and two-wheeler parking as well as easy road access on Madras Thiruvallur High (MTH) Road, Thirumullaivoyal."
  },
  {
    question: "Do you provide customized diet and nutrition guidance?",
    answer: "Yes, our trainers provide clean, realistic diet recommendations based on your goal (weight loss, muscle gain, strength maintenance) tailored to everyday South Indian / vegetarian / non-vegetarian meals."
  }
];
