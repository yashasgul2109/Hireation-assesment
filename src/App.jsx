import { useState } from "react";
import Navbar from "./navbar";
import CareerTools from "./CareerTools";
import DemoScheduler from "./DemoScheduler";
import Trusted from "./Trusted";
import Features from "./Features";
import Footer from "./Footer";
import ComparisonAndFAQ from "./ComparisonAndFAQ";
import SuccessStories from "./SuccessStories";
import SecurityBadges from "./SecurityBadges";
import FeatureSection from "./FeatureSection";
import TestimonialSlider from "./TestimonialSlider";
import ChatWidget from "./ChatWidget";

export default function App() {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <div>
      <Navbar onConnect={() => setShowScheduler(true)} />
      <CareerTools onConnect={() => setShowScheduler(true)} />
      <Trusted />
      <Features onConnect={() => setShowScheduler(true)} />
      <SuccessStories onConnect={() => setShowScheduler(true)} />
      <SecurityBadges />
      <FeatureSection onConnect={() => setShowScheduler(true)} />
      <TestimonialSlider />
      <ComparisonAndFAQ />
      <ChatWidget />
      <Footer />

      {/* ✅ CLEAN & BUG-FREE */}
      {showScheduler && (
        <DemoScheduler onClose={() => setShowScheduler(false)} />
      )}
    </div>
  );
}