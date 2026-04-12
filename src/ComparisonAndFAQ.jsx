import { useState } from "react";
import "./ComparisonAndFAQ.css";
import backed from "./assets/ycombinator.png";

export default function ComparisonAndFAQ() {

  // 🔥 NEW: category control
  const [openCategory, setOpenCategory] = useState(null);

  // 🔥 question control (inside category)
  const [expandedFAQ, setExpandedFAQ] = useState({});

  const comparisonData = [
    {
      aspect: "Resume Creation",
      traditional: "Manual and time-consuming",
      hiration: "AI-powered, 4X faster and ATS-optimized",
    },
    {
      aspect: "Interview Prep",
      traditional: "Generic and lacks personalization",
      hiration: "Customized, role-specific, with AI evaluation",
    },
    {
      aspect: "Student Tracking",
      traditional: "Relying on cumbersome spreadsheets",
      hiration: "Real-time, intuitive dashboard",
    },
    {
      aspect: "Scalability",
      traditional: "Limited by staff resources",
      hiration: "Unlimited reach with AI-driven automation",
    },
  ];

  const faqCategories = [
    {
      title: "Customization",
      items: [
        {
          question: "Can we adjust the platform to fit our specific program?",
          answer:
            "Yes, Hiration is highly customizable. You can tailor AI reviews, templates, and features.",
        },
        {
          question:
            "Can we customize resume templates to fit branding?",
          answer:
            "Yes, you can replicate your own resume templates to match branding.",
        },
        {
          question: "Can we add institution branding?",
          answer:
            "Yes, logos, colors, and messaging can be fully integrated.",
        },
        {
          question: "Is it possible to customize the AI resume review?",
          answer:
            "The AI resume review can be tailored to align with your institution's specific requirements and focus areas.",
        },
        {
          question: "What customization options do we have for answer evaluation in interviews?",
          answer:
            "You can customize evaluation criteria, industry-specific parameters, and feedback depth for interview answer assessments.",
        }
      ],
    },
    {
      title: "Student Engagement and Support",
      items: [
        {
          question: "How can we encourage students to use platform regularly?",
          answer: "Hiration includes an automated email system that sends reminders and encouragement to students.",
        },
        {
          question: "Do you offer training to help students to use platform regularly?",
          answer: "Yes, Hiration offers hands-on workshops where students are guided on how to create resumes, navigate the platform, and use AI-powered tools to enhance their job search.",
        },
        {
          question: "Can we monitor students progress on the platform?",
          answer: "Yes, the Counselor Dashboard allows detailed tracking of individual student progress.",
        },
      ],
    },
     {
      title: "Data, Reporting and Security",
      items: [
        {
          question: "What types of reports are aviavlable on the platform?",
          answer: "The platform provides data on student engagement, resume completion, interview performance, and overall career readiness, providing comprehensive reports to help institutions monitor and improve student outcomes.",
        },
        {
          question: "How is students data processed?",
          answer: "We comply with GDPR, CCPA, SOC 2, FERPA, and other relevant data protection regulations.",
        },
        {
          question: "How does Hiration ensure ethical AI usage?",
          answer: "Hiration's AI tools, including ChatGPT, are designed to support student learning rather than replace it, promoting critical thinking while providing valuable guidance.",
        },
      ],
    },{
      title: "Setup and Support",
      items: [
        {
          question: "What's the typical setup time for Hiration?",
          answer: "The onboarding process usually takes about 2 weeks, including staff training and student orientation.",
        },
        {
          question: "Does Hiration works with current System?",
          answer: "Yes, Hiration is designed to integrate seamlessly with most existing career services management systems. We also support Single Sign-On (SSO) and SAML integration, allowing students and staff to log in securely using their institution's credentials, ensuring a smooth and secure experience.",
        },
        {
          question: "How do we manage user account and permissions?",
          answer: "Admins can bulk invite users, manage permissions, and oversee account activities through an admin dashboard.",
        },
         {
          question: "What type of customer support is avialable?",
          answer: "We provide 24/7 chat support and assign a dedicated account manager to each institution.",
        }
      ],
    }
    
  ];

  // 🔥 CATEGORY TOGGLE
  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setExpandedFAQ({}); // reset questions
  };

  // 🔥 QUESTION TOGGLE
  const toggleFAQ = (categoryIndex, itemIndex) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [categoryIndex]:
        prev[categoryIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <>
      {/* ================= COMPARISON ================= */}
      <section className="comparison-section">
        <h2>Hiration vs Traditional Methods</h2>
        <p className="subtitle">A Game-Changing Difference</p>

        <div className="table">
          <div className="table-row header">
            <div>Aspect</div>
            <div>Traditional</div>
            <div>Hiration</div>
          </div>

          {comparisonData.map((row, i) => (
            <div className="table-row" key={i}>
              <div className="bold">{row.aspect}</div>
              <div>{row.traditional}</div>
              <div className="highlight">{row.hiration}</div>
            </div>
          ))}
        </div>
      </section>
      <h3 id = "backend-text">We are backed by</h3>
     <div
  id="backend-img"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <img src={backed} alt="" />
</div>

      {/* ================= FAQ ================= */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {faqCategories.map((cat, ci) => (
          <div key={ci}>

            {/* 🔥 CATEGORY CLICK */}
            <h3
              className="faq-category"
              onClick={() => toggleCategory(ci)}
              style={{ cursor: "pointer" }}
            >
              {cat.title} {openCategory === ci ? "▲" : "▼"}
            </h3>

            {/* 🔥 SHOW QUESTIONS ONLY IF CATEGORY OPEN */}
            {openCategory === ci &&
              cat.items.map((item, i) => {
                const isOpen = expandedFAQ[ci] === i;

                return (
                  <div className="faq-item" key={i}>
                    <button onClick={() => toggleFAQ(ci, i)}>
                      {item.question}
                      <span className={isOpen ? "arrow open" : "arrow"}>
                        ▼
                      </span>
                    </button>

                    {isOpen && <p>{item.answer}</p>}
                  </div>
                );
              })}
          </div>
        ))}

        {/* CTA */}
        
      </section>
    </>
  );
}