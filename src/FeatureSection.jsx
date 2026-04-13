import React from "react";
import "./FeatureSection.css";
import AICL from "./assets/AI-CL.webp";
import interview from "./assets/p-interview.webp"
import lo from "./assets/Linkedin-profile.webp"
import AIE from "./assets/AI.webp"
import CD from "./assets/Counseler.webp"

const toolsData = [
  {
    title: "AI-Powered Resume Builder, Reviewer & Job-based Optimizer",
    points: [
      "Interactive visual resume builder with rich formatting; PDF & Word downloads",
      "25+ ATS-friendly templates; custom institutional template integration",
      "AI-powered resume feedback on 50+ parameters; customizable scoring rubric",
      "ChatGPT-powered job description-based resume tailoring & keyword optimization",
      "Dedicated module for counselor resume critiques"
    ],
    highlight:
      "83% of students report a competitive edge with their Hiration-built resumes",
    image: AICL
  },
  {
    title: "Personalized Interview Preparation",
    points: ["AI-powered mock interview platform mimicking real-life scenarios", "Feedback from AI/ChatGPT, counselors, and self-review options", "Feedback from AI/ChatGPT, counselors, and self-review options","Novel ChatGPT subjective feedback on answers with actionable advice","AI analysis of speech and body language for communication skills improvement","Options for counselor and peer reviews for additional personalized feedback"],
    highlight: "65% of students experience increased confidence after using Hiration's interview tools",
    image: interview
  },
  {
    title: "LinkedIn Profile Optimization",
    points: ["Students' LinkedIn Profile review & optimization per industry standards to double recruiter visibility", "Detailed feedback & suggestions for all profile sections from summary to education","Optional ChatGPT-powered profile generation/rewrites"],
    highlight: "88% of students identify critical areas for improvement through AI review",
    image: lo
  },
  {
    title: "AI-Enhanced Cover Letter Builder",
    points: ["20+ customizable templates complementing resumes","Keyword-based optimization aligning with job descriptions for enhanced relevance & impact","Optional ChatGPT-powered cover letter generation/rewrites for tailored content"],
    highlight: "Mostly Students Used this tool to build Resume with 20+ Templates",
    image: AIE
  },
  {
    title: "Comprehensive Counselor Dashboard",
    points: ["Efficient student and team management; real-time activity tracking","Resume critique request handling and processing","Customizable student cohort organization and views","Automated reminders, follow-ups, and administrative tasks",],
    highlight: "Insightful analytics for data-driven decision making",
    image: CD
  }
];

const ToolSection = ({ data, reverse}) => {
  return (
    <div className={`tool-section ${reverse ? "reverse" : ""}`}>
      
      <div className="tool-text">
        <h2>{data.title}</h2>

        <ul>
          {data.points.map((point, i) => (
            <li key={i}>➤ {point}</li>
          ))}
        </ul>

        <p className="highlight">📊 {data.highlight}</p>

        <button className="cta-btn" onClick={() => {
            onConnect();
          }}>Speak to an Expert</button>
      </div>

      <div className="tool-image">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
};

export default function ToolsSection({onConnect}) {
  return (
    <div className="tools-wrapper">
      <h1 className="main-heading">
        Explore Hiration's AI-Powered Tools
      </h1>

      {toolsData.map((item, index) => (
        <ToolSection
          key={index}
          data={item}
          reverse={index % 2 !== 0}
          onConnect={onConnect}
        />
      ))}
    </div>
  );
}