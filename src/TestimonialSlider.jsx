import React, { useState } from "react";
import "./TestimonialSlider.css";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Hiration is pivotal for success. Students are excelling with standout resumes.",
      name: "Susan Rodriguez",
      role: "Senior Director",
      org: "Fairmont State University",
      image: "/images/user1.jpg",
      logo: "/images/logo1.png"
    },
    {
      id: 2,
      text: "Hiration's tools are a game-changer, easy resume building & interview prep.",
      name: "Patrick Holton",
      role: "Executive Director",
      org: "Hofstra University",
      image: "/images/user2.jpg",
      logo: "/images/logo2.png"
    },
    {
      id: 3,
      text: "Provides finest tech in resume creation—modern and cost-effective.",
      name: "Nate Marsh",
      role: "Director",
      org: "Must Ministries",
      image: "/images/user3.jpg",
      logo: "/images/logo3.png"
    },
    // 👉 Add up to 9 like this
  ];

  const visibleCards = 3;

  const next = () => {
    if (index < testimonials.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slider-section">
      <h2 className="slider-heading">❤️ From Our Partners</h2>

      <div className="slider-wrapper">
        
        {/* LEFT BUTTON */}
        <button className="nav-btn left" onClick={prev}>
          ‹
        </button>

        {/* SLIDER */}
        <div className="slider-container">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`
            }}
          >
            {testimonials.map((item) => (
              <div className="card" key={item.id}>
                
                <img src={item.logo} alt="" className="logo" />

                <p className="text">“{item.text}”</p>

                <div className="user">
                  <img src={item.image} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                    <span>{item.org}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav-btn right" onClick={next}>
          ›
        </button>

      </div>
    </div>
  );
}