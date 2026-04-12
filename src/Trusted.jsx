import React from "react";
import "./Trusted.css";

// 👉 Import your 21 images
import l1 from "./assets/ani1.webp";
import l2 from "./assets/ani2.webp";
import l3 from "./assets/ani3.webp";
import l4 from "./assets/ani4.webp";
import l5 from "./assets/ani5.webp";
import l6 from "./assets/ani6.webp";
import l7 from "./assets/ani7.webp";
import l8 from "./assets/ani8.webp";
import l9 from "./assets/ani9.webp";
import l10 from "./assets/ani10.webp";
import l11 from "./assets/ani11.webp";
import l12 from "./assets/ani12.webp";
import l13 from "./assets/ani13.webp";
import l14 from "./assets/ani14.webp";
import l15 from "./assets/ani15.webp";
import l16 from "./assets/ani16.webp";
import l17 from "./assets/ani7.webp";
import l18 from "./assets/ani8.webp";
import l19 from "./assets/ani19.webp";
import l20 from "./assets/ani20.webp";
import l21 from "./assets/ani21.webp";

const logos = [
  { img: l1, name: "College of the Ozarks" },
  { img: l2, name: "Concordia University Irvine" },
  { img: l3, name: "Utah Tech University" },
  { img: l4, name: "University of St. Augustine for Health Sciences" },
  { img: l5, name: "California State University, Fullerton" },
  { img: l6, name: "Frank G. Zarb School of Busieness - Hofstra University" },
  { img: l7, name: "Quinnipiac University" },
  { img: l8, name: "UA - Eller College of Management" },
  { img: l9, name: "United States Air Force Academy" },
  { img: l10, name: "New Jersey Institute of Technology" },
  { img: l11, name: "Florida Agricultural & Mechenical University" },
  { img: l12, name: "Chamberlian University" },
  { img: l13, name: "Rasmussen University" },
  { img: l14, name: "Monmouth University" },
  { img: l15, name: "Tuck School of Busieness" },
  { img: l16, name: "Brandeis University" },
  { img: l17, name: "St. Catherine University" },
  { img: l18, name: "Augusta University" },
  { img: l19, name: "Dakota State University" },
  { img: l20, name: "Tampa Medical college" },
  { img: l21, name: "Washington College" },
];

function Trusted() {
  return (
    <div className="trusted-section">
      <h2>Trusted by 100+ Career Centers & 1M+ Students</h2>

      <div className="marquee">
        <div className="marquee-track">
          {[...logos, ...logos].map((item, index) => (
            <div key={index} className="trusted-card">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trusted;