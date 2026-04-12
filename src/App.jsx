import { useState } from "react";
import Navbar from "./navbar";
import CareerTools from "./CareerTools";
import DemoScheduler from "./DemoScheduler";
import "./modal.css";
import Trusted from "./Trusted";
import Features from "./Features";
import Footer from "./Footer";
import ComparisonAndFAQ from "./ComparisonAndFAQ";
import SuccessStories from "./SuccessStories";
import SecurityBadges from "./SecurityBadges";
import FeatureSection from "./FeatureSection"
import TestimonialSlider from "./TestimonialSlider";
export default function App() {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <div>
      <Navbar onConnect={() => setShowScheduler(true)} />
        <CareerTools onConnect={() => setShowScheduler(true)} />
          <Trusted></Trusted>
          <Features onConnect={() => setShowScheduler(true)} />
            <SuccessStories onConnect={() => setShowScheduler(true)} />
              <SecurityBadges></SecurityBadges>
              <FeatureSection></FeatureSection>
              <TestimonialSlider></TestimonialSlider>
            <ComparisonAndFAQ></ComparisonAndFAQ>
            
            <Footer></Footer>
      {showScheduler && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowScheduler(false)}
            >
              ✖
            </button>
            <DemoScheduler />
          </div>
        </div>
      )}
    </div>
  );
}
