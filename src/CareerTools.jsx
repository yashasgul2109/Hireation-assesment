import React from "react";
import "./CareerTools.css";
import { FaFileAlt, FaUsers, FaLinkedin, FaEnvelope } from "react-icons/fa";
import videoMp4 from "./assets/video.mp4";

const tools = [
  { icon: <FaFileAlt />, label: <>Resume<br />Builder</> },
  { icon: <FaUsers />, label: <>Interview<br />Practice</> },
  { icon: <FaLinkedin />, label: <>LinkedIn<br />Optimizer</> },
  { icon: <FaEnvelope />, label: <>Cover Letter<br />Builder</> },
];

function CareerTools({onConnect}) {
  return (
    <div className="career-tools">
      <div className="career-left">
        <h1>All-in-One Career Tools</h1>
        <p>Empower Your Students and Streamline Your Career Center.</p>
        <span>
          Boost job success with resumes that get shortlists and AI-driven
          interview prep that builds student confidence.
        </span>

        <ul className="tools-list" id = "ul">
          {tools.map((tool, index) => (
            <li key={index} className="tool-item">
              <div className="tool-icon">{tool.icon}</div>
              <span id="label" className="tool-label">{tool.label}</span>
            </li>
          ))}
        </ul>

        <div className="button-group">
          <button className="demo-btn" onClick={() => {
            onConnect();
            }}>Book a Free Demo</button>
          <button className="try-btn" onClick={() => window.open("https://control-center.hiration.com/signup", "_blank")}>Try Now</button>
        </div>
      </div>

      <div className="career-right">
        <div className="video-container">
          <video className="career-video" autoPlay muted loop playsInline>
            <source src={videoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default CareerTools;