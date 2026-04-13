import React, { useState , useEffect} from "react";
import "./TestimonialSlider.css";
import fairmont from "./assets/review5.webp";
import fairmont1 from "./assets/fairmont.webp";
import hofstra from "./assets/review6.webp";
import hofstra1 from "./assets/hofstra1.webp";
import must from "./assets/logo3.webp";
import must1 from "./assets/must.webp";
import augusta from "./assets/review7.png";
import augusta1 from "./assets/augusta.webp";
import rasmussen1 from "./assets/review2.png";
import rasmussen from "./assets/rasmussen1.webp";
import gavanize1 from "./assets/review3.png";
import gavanize from "./assets/gavanize.webp";
import tech1 from "./assets/logo2.webp";
import tech from "./assets/tech1.webp";
import monmouth from "./assets/review1.png";
import monmouth1 from "./assets/monmouth1.webp";
import xi from "./assets/review4.png";
import xi1 from "./assets/xi1.webp";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Hiration is pivotal for success. Students are excelling with standout resumes.",
      name: "Susan Rodriguez",
      role: "Senior Director",
      org: "Fairmont State University",
      image: fairmont1,
      logo: fairmont
    },
    {
      id: 2,
      text: "Hiration's tools are a game-changer, easy resume building & interview prep.",
      name: "Patrick Holton",
      role: "Executive Director",
      org: "Hofstra University",
      image: hofstra1,
      logo: hofstra
    },
    {
      id: 3,
      text: "Provides finest tech in resume creation—modern and cost-effective.",
      name: "Nate Marsh",
      role: "Director",
      org: "Must Ministries",
      image: must1,
      logo: must
    },
    {
      id: 4,
      text: "Our partnership with Hiration has transformed student resumes, I highly recommend them",
      name: "Sharn Vericella",
      role: "Assistant Director, Career Services",
      org: "Augusta University",
      image: augusta1,
      logo: augusta
    },
     {
      id: 5,
      text: "With over 3,000 resumes created, Hiration is boosting student confidence & success rates.",
      name: "Stephanie Daniels",
      role: "Senior Career Service Advisor",
      org: "Rasmussen University",
      image: rasmussen,
      logo: rasmussen1
    }, {
      id: 6,
      text: "Superior customer service & innovative updates from Hiration have elevated our career services.",
      name: "Crew Spence",
      role: "Director of Career Services & Partnership",
      org: "Galvanize",
      image: gavanize,
      logo: gavanize1
    },
    {
      id: 7,
      text: "Hiration enhanced our students' interviewing skills, impressing employers & increasing job placements.",
      name: "Sarah Horner",
      role: "Director, Standards & Technology",
      org: "Tech Elevator",
      image: tech,
      logo: tech1
    },
    {
      id: 8,
      text: "Hiration’s responsiveness to continually improve the platform positively impacts our resume review process.",
      name: "Mariagrazia Buttitta",
      role: "Career Devlopment",
      org: "Monmouth University",
      image: monmouth1,
      logo: monmouth
    },
    {
      id: 9,
      text: "Hiration has revolutionized employment transitions with seamless, personalized, AI-driven resume guidance.",
      name: "Cyril",
      role: "Chief Academy Officer",
      org: "Academy Xi",
      image: xi1,
      logo: xi
    }
  ];

  const [visibleCards, setVisibleCards] = useState(3);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setVisibleCards(1); // 📱 mobile
    } else {
      setVisibleCards(3); // 💻 desktop
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
const next = () => {
  setIndex((prev) =>
    prev >= testimonials.length - visibleCards ? 0 : prev + 1
  );
};

  const prev = () => {
  if (index === 0) {
    setIndex(testimonials.length - visibleCards); // 🔥 go to end
  } else {
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