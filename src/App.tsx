import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FacilitiesSection } from "./components/FacilitiesSection";
import { TimingsSection } from "./components/TimingsSection";
import { GallerySection } from "./components/GallerySection";
import { MembershipSection } from "./components/MembershipSection";
import { BmiCalculator } from "./components/BmiCalculator";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationSection } from "./components/LocationSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { QuickInquiryModal } from "./components/QuickInquiryModal";

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPurpose, setInquiryPurpose] = useState<string>("Book Free Trial Visit");

  const handleOpenInquiry = (purpose?: string) => {
    if (purpose) {
      setInquiryPurpose(purpose);
    }
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Landing Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 2. Facilities & Workout Zones */}
        <FacilitiesSection onOpenInquiry={handleOpenInquiry} />

        {/* 3. Timings & Crowd Density Guide */}
        <TimingsSection />

        {/* 4. Interactive Photo Gallery & Google Maps Visuals */}
        <GallerySection />

        {/* 5. Membership Plans & Transparent Pricing Inquiries */}
        <MembershipSection onOpenInquiry={handleOpenInquiry} />

        {/* 6. Interactive BMI & Custom Workout Split Calculator */}
        <BmiCalculator />

        {/* 7. Member Reviews & Testimonials */}
        <ReviewsSection />

        {/* 8. Location, Maps & Contact */}
        <LocationSection />

        {/* 9. FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons for Call / WhatsApp / Maps */}
      <FloatingActions onOpenInquiry={handleOpenInquiry} />

      {/* Quick Enquiry & Free Trial Modal */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultPurpose={inquiryPurpose}
      />

    </div>
  );
}
