import React, { useState } from "react";
import "./navbar.css";
import logo from "./assets/hiration_full_logo.webp";

// ✅ Import story logos
import logo1 from "./assets/logo1.webp";
import logo2 from "./assets/logo2.webp";
import logo3 from "./assets/logo3.webp";
import logo4 from "./assets/logo4.webp";
import logo5 from "./assets/logo5.webp";
import logo6 from "./assets/logo6.webp";
import logo7 from "./assets/logo7.webp";

function Navbar({ onConnect }) {
  const [open, setOpen] = useState(false);

  // ✅ Stories data (easy to scale)
  const stories = [
    {
      img: logo1,
      title: "Shawnee State University",
      desc: "Freed 40+ staff hours while improving student resume quality",
      link: "https://www.hiration.com/job-search/case-study/shawnee-state/",
    },
    {
      img: logo3,
      title: "MUST Ministries",
      desc: "93% increase in job placements with AI support",
      link: "https://www.hiration.com/job-search/case-study/must-ministries/",
    },
    {
      img: logo2,
      title: "Tech Elevator",
      desc: "Faster resume turnaround and improved employer satisfaction",
      link: "https://www.hiration.com/job-search/case-study/tech-elevator/",
    },
    {
      img: logo5,
      title: "  Marian University",
      desc: "Versatile career support expanded across all degree programs",
      link: "https://www.hiration.com/job-search/case-study/marian-university/",
    },
    {
      img: logo4,
      title: "Tuck School of Busieness",
      desc: "An interview practice integrated into MBA summer onboarding",
      link: "https://www.hiration.com/job-search/case-study/tuck-school/",
    },
    {
      img: logo6,
      title: "Rochester Insitute of Technology",
      desc: "Campus wide deploying serving 18,000+ students across all majors",
      link: "https://www.hiration.com/job-search/case-study/rit/",
    },
    {
      img: logo7,
      title: "NYU Abu Dhabi",
      desc: "2200+ Students from 100+ nationalities independently using CVs",
      link: "https://www.hiration.com/job-search/case-study/nyuad/",
    }
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <a href="https://www.hiration.com/">
          <img src={logo} alt="Hiration Logo" className="logo" />
        </a>
      </div>

      {/* Buttons */}
      <div className="button-group">
        {/* 🔥 DROPDOWN */}
        <div
          className="dropdown-container"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button type="button" className="stories-btn">
            Success Stories 🔽
          </button>

          {open && (
            <div className="dropdown-panel">
              {stories.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-item"
                >
                  {/* Logo */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="story-logo"
                  />

                  {/* Content */}
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <span className="link">Read case study →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Existing button */}
        <button
          type="button"
          className="connect"
          onClick={() => {
            onConnect();
          }}
        >
          Let’s Connect
        </button>
      </div>
    </nav>
  );
}

export default Navbar;