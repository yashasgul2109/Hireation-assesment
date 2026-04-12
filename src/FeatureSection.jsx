import React from "react";
import "./FeatureSection.css";

export default function App() {

  const sectionsData = [
    {
      id: 1,
      title: "AI-Powered Resume Builder",
      points: [
        "Interactive resume builder",
        "ATS-friendly templates",
        "AI feedback"
      ],
      highlight: "83% students see improvement",
      image: "/images/resume.png"
    },
    {
      id: 2,
      title: "Smart Interview Preparation",
      points: [
        "Mock interviews",
        "Real-time feedback",
        "Tracking dashboard"
      ],
      highlight: "Boost success rate",
      image: "/images/interview.png"
    }
  ];

  return (
    <div>
      <h1 className="main-heading">
        Explore AI Tools
      </h1>

      {sectionsData.map((data, index) => (
        <section className="feature-section" key={data.id}>
          <div className={`feature-container ${index % 2 !== 0 ? "reverse" : ""}`}>

            {/* TEXT */}
            <div className="feature-text">
              <h2>{data.title}</h2>

              <ul>
                {data.points.map((p, i) => (
                  <li key={i}>
                    <span>●</span> {p}
                  </li>
                ))}
              </ul>

              <p className="highlight">{data.highlight}</p>

              <button className="cta-btn">
                Speak to an Expert
              </button>
            </div>

            {/* IMAGE */}
            <div className="feature-image">
              <img src={data.image} alt="" />
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}