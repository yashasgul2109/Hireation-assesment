import React from "react";
import "./Features.css";
import {
  FaChartLine,
  FaCog,
  FaGraduationCap,
  FaPencilRuler,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "Effortless Scaling",
    desc: "Support thousands of students with AI without straining resources",
  },
  {
    icon: <FaCog />,
    title: "Strategic Automation",
    desc: "Automate repetitive tasks like resume reviews, freeing time for strategic initiatives",
  },
  {
    icon: <FaGraduationCap />,
    title: "Elevate Student Outcomes",
    desc: "Optimize resumes & interview prep, driving upto 3X shortlists & placements",
  },
  {
    icon: <FaPencilRuler />,
    title: "Tailored Customization",
    desc: "Replicate your institution's unique resume designs, offering unmatched flexibility",
  },
  {
    icon: <FaRobot />,
    title: "Advanced, Ethical AI",
    desc: "Leverage the latest in AI while promoting ethical use that supports critical thinking",
  },
  {
    icon: <FaRocket />,
    title: "Boost Engagement",
    desc: "Engage upto 5X more students with 24/7/365 available AI & personalized nudges",
  },
];

function Features({ onConnect }) {
  return (
    <section className="features-section">
      <h2>What Difference Does Hiration Make?</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="cta-btn"  onClick={() => {
            onConnect();
          }}>Speak to an Expert</button>
    </section>
  );
}

export default Features;