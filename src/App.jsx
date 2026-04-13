import { useState, Suspense, lazy } from "react";

// ✅ Lazy imports
const Navbar = lazy(() => import("./navbar"));
const CareerTools = lazy(() => import("./CareerTools"));
const DemoScheduler = lazy(() => import("./DemoScheduler"));
const Trusted = lazy(() => import("./Trusted"));
const Features = lazy(() => import("./Features"));
const Footer = lazy(() => import("./Footer"));
const ComparisonAndFAQ = lazy(() => import("./ComparisonAndFAQ"));
const SuccessStories = lazy(() => import("./SuccessStories"));
const SecurityBadges = lazy(() => import("./SecurityBadges"));
const FeatureSection = lazy(() => import("./FeatureSection"));
const TestimonialSlider = lazy(() => import("./TestimonialSlider"));
const ChatWidget = lazy(() => import("./ChatWidget"));

export default function App() {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <div>
      {/* ✅ Wrap main UI in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>

      {/* ✅ Lazy load modal ONLY when needed (BEST PRACTICE) */}
      {showScheduler && (
        <Suspense fallback={<div>Loading Scheduler...</div>}>
          <DemoScheduler onClose={() => setShowScheduler(false)} />
        </Suspense>
      )}
    </div>
  );
}