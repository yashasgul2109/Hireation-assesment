import React from "react";
import "./SecurityBadges.css";

import ferpa from "./assets/protection1.webp";
import gdpr from "./assets/protection2.webp";
import ccpa from "./assets/protection3.webp";
import soc2 from "./assets/protection4.webp";
import vapt from "./assets/protection5.webp";
import vpat from "./assets/protection6.webp";

const SecurityBadges = () => {
  const badges = [
    { img: ferpa, name: "FERPA" },
    { img: gdpr, name: "GDPR" },
    { img: ccpa, name: "CCPA" },
    { img: soc2, name: "SOC 2" },
    { img: vapt, name: "VAPT" },
    { img: vpat, name: "VPAT" },
  ];

  return (
    <section className="security-section">
      <h1 className="security-heading">
        Top-Tier Data Protection for Higher-Ed
      </h1>

      <div className="badges-container">
        {badges.map((badge, index) => (
          <div key={index} className="badge">
            <img src={badge.img} alt={badge.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityBadges;