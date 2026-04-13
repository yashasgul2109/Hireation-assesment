import React, { useState } from 'react';
import './SuccessStories.css';
import logo1 from "./assets/logo1.webp";
import logo2 from "./assets/logo2.webp";
import logo3 from "./assets/logo3.webp";
import logo4 from "./assets/logo4.webp";
import logo5 from "./assets/logo5.webp";
import logo6 from "./assets/logo6.webp";
import logo7 from "./assets/logo7.webp";


const SuccessCard = ({ data }) => {
  return (
    <>
    <h1 id='stories-heading'>Success Stories</h1>
    <div className="sc-content-wrapper">
      {/* Left Column */}
      <div className="sc-info-column">
        <img src={data.logoUrl} alt={`${data.schoolName} Logo`} className="sc-school-logo" />
        <h2 className="sc-school-title">{data.schoolName} Success Story</h2>

        <h3 className="sc-section-header">Challenge:</h3>
        <p className="sc-section-text">{data.challenge}</p>

        <h3 className="sc-section-header sc-solution-spacing">Solution:</h3>
        <p className="sc-section-text">{data.solution}</p>

        <a href={data.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="sc-case-link">
          Read the full case study →
        </a>
      </div>

      {/* Right Column */}
      <div className="sc-results-column">
        <h2 className="sc-results-header">Results:</h2>
        
        <div className="sc-result-blocks-grid">
          {data.resultBlocks.map((block, index) => (
            <div key={index} className="sc-result-block">
              <h4 className="sc-block-title">{block.title}</h4>
              <p className="sc-block-text">{block.text}</p>
            </div>
          ))}
        </div>

        <div className="sc-testimonial-box">
          <p className="sc-testimonial-quote">"{data.testimonial.quote}"</p>
          <p className="sc-testimonial-author">{data.testimonial.author}</p>
          <p className="sc-testimonial-role">{data.testimonial.role}</p>
        </div>
      </div>
    </div>
    </>
  );
};

// Main Carousel Component
const SuccessStories = ({onConnect}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of 7 stories. 
  // I filled the first one with the exact data from the image.
  // The rest are placeholders for you to edit.
  const allStoriesData = [
    {
      id: 1,
      schoolName: 'Shawnee State University Success Story',
      logoUrl: logo1,
      challenge: 'A small career team needed to support 3,000+ students efficiently without sacrificing resume quality or interview prep depth.',
      solution: "Shawnee State used Hiration to automate time-intensive resume reviews and scale mock interviews. This freed up counselors to focus on personalized coaching, while students gained 24/7 access to professional-grade support.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/shawnee-state/',
      resultBlocks: [
        { title: 'Time Saved:', text: '40+ staff hours freed from repetitive manual reviews' },
        { title: 'Stonger First Drafts', text: 'Advisors now focus on personalization, not formatting' },
        { title: 'Scalable Success:', text: 'Platform supported students 24/7 without replacing human guidance' }
      ],
      testimonial: {
        quote: "Hiration helps us scale thoughtfully without sacrificing quality. It's become a core part of how we prepare students for what's next.",
        author: 'Dr. Austin Raines',
        role: 'Associate Director of Career Services, Shawnee State University'
      }
    },
    {
      id: 2,
      schoolName: 'Tech Elevator Success Story',
      logoUrl: logo2,
      challenge: 'Manual resume reviews and interview prep were overwhelming staff and delaying students job-readiness at this fast-paced bootcamp.',
      solution: "Tech Elevator integrated Hiration's resume builder and mock interview platform into their Pathway Program™, reducing turnaround time and improving employer satisfaction.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/tech-elevator/',
      resultBlocks: [
        { title: 'Faster Turnaround:', text: 'Resume reviews completed in 1–2 days (vs. weeks)' },
        { title: 'Interview Confidence Boost:', text: 'Employer partners noticed improved student performance' },
        { title: 'Efficiency Unlocked:', text: 'Staff now spend more time on 1:1 coaching, not repetitive reviews' },
        { title: 'Higher Resume Scores:', text: 'Student resume quality improved by 1–2 points on a 6-point scale' }
      ],
      testimonial: {
        quote: "With Hiration, we scaled our support without sacrificing quality — students are more confident, and employers are noticing.",
        author: 'Sarah Horner',
        role: 'Pathway Program Director, Tech Elevator'
      }
    },
    {
      id: 3,
      schoolName: 'MUST Ministries Success Story',
      logoUrl: logo3,
      challenge: 'Providing 24/7 support to adults facing employment barriers while increasing placements and managing growing demand.',
      solution: "Hiration's AI-powered platform was integrated into their Salesforce-based Workforce Portal, offering resume building, interview prep, and LinkedIn tools available 24/7.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/must-ministries/',
      resultBlocks: [
        { title: '93% Increase in Job Placements:', text: 'From 1,206 to 2,331 over 3 years' },
        { title: '147% Growth in Combined Wages:', text: 'Jump from $32.5M to $80.3M' },
        { title: '96.9% More Clients Served:', text: 'Nearly doubled reach without scaling staff' },
        { title: '3X Higher Reporting Rate:', text: '47% job reporting vs. national average' }
      ],
      testimonial: {
        quote: "Hiration set a new standard. It's intuitive, scalable, and delivers real outcomes for clients rebuilding stability through employment.",
        author: 'Nate Marsh',
        role: 'Director of Workforce Development, MUST Ministries'
      }
    },
        {
      id: 4,
      schoolName: 'Tuck School of Business Success Story',
      logoUrl: logo4,
      challenge: 'Elite MBA students needed additional interview practice resources beyond what advisor-led sessions could provide.',
      solution: "Tuck integrated Hiration's AI interview tool into summer onboarding, giving all MBA students year-round practice access and advisers actionable data points.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/tuck-school/',
      resultBlocks: [
        { title: 'Year-Round Engagement:', text: 'Students take multiple practice interviews throughout the year' },
        { title: 'Summer Onboarding', text: 'Integrated into incoming MBA student onboarding' },
        { title: 'Advisor Insights', text: 'Additional data points before first student meetings' }
      ],
      testimonial: {
        quote: "Hiration provides easy to set up and easy to use AI interview practice that we can provide to our students as an additional resource.",
        author: 'Nicole Mody',
        role: 'Associate Director, Career Services Systems and Analytics, Tuck School of Business'
      }
    },
   {
      id: 5,
      schoolName: 'Marian University Success Story',
      logoUrl: logo5,
      challenge: 'A small Catholic university needed to extend career support beyond office hours and deliver consistent outcomes across associates through doctoral programs.',
      solution: "Marian integrated Hiration's AI interview practice into specific courses, expanding from undergraduate to medical school and associates programs with significant cost savings.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/marian-university/',
      resultBlocks: [
        { title: 'Cross-Program Expansion:', text: 'Expanded from undergrad to medical school and associates programs' },
        { title: 'Cost Savings:', text: 'Significant savings with more features than previous tools' },
        { title: '24/7 Access:', text: 'Career support available outside office hours' }
      ],
      testimonial: {
        quote: "Versatile support well worth the cost of investment.",
        author: 'Briannah Bieghler',
        role: 'Director of Career Systems & Data, Marian University'
      }
    },
 {
      id: 6,
      schoolName: 'NYU Abu Dhabi Success Story',
      logoUrl: logo6,
      challenge: 'A global university with 2,200+ students from 100+ nationalities needed scalable career tools and custom CV templates.',
      solution: "NYUAD deployed Hiration institution-wide with custom NYUAD CV templates, enabling students to independently update CVs and cover letters without appointments.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/nyuad/',
      resultBlocks: [
        { title: 'Student Independence:', text: 'Students update CVs independently with NYUAD templates' },
        { title: 'Organic Adoption:', text: 'Students sharing the tool peer-to-peer' },
        { title: 'Moderate Engagement Increase:', text: 'Students who never visited career services now using the tool' }
      ],
      testimonial: {
        quote: "Students are able to independently update their CV (with NYUAD template) without having to schedule an appointment or come to walk-ins.",
        author: 'Career Development Center',
        role: 'Associate Director, NYU Abu Dhabi'
      }
    },
     {
      id: 7,
      schoolName: 'Rochester Institute of Technology Success Story',
      logoUrl: logo7,
      challenge: 'With 18,000 students across all majors and degree levels, career advisors had limited bandwidth and resume quality was inconsistent.',
      solution: "RIT deployed Hiration campus-wide with its AI Resume Builder and interview prep tools, enabled by a pricing model that allowed serving all students.",
      caseStudyUrl: 'https://www.hiration.com/job-search/case-study/rit/',
      resultBlocks: [
        { title: '18,000+ Students Served:', text: 'Campus-wide deployment across all majors, Associates to PhD' },
        { title: 'Strategic Advising:', text: 'More time for advisors to focus on high-value guidance' },
        { title: '24/7 Availability:', text: 'Resume reviews and mock interviews available around the clock' }
      ],
      testimonial: {
        quote: "Hiration provides powerful tools to our students to help them prepare their job search documents, and practice their interview skills.",
        author: 'Julian Huenerfauth',
        role: 'Assistant Director for International Career Services, RIT'
      }
    }
  ];

  const totalItems = allStoriesData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    
    <div className="success-carousel-outer-wrapper">
      <div className="success-carousel-main-box">
        {/* Navigation Arrows */}
        <button className="sc-arrow sc-arrow-prev" onClick={handlePrev}>‹</button>
        <button className="sc-arrow sc-arrow-next" onClick={handleNext}>›</button>

        {/* The Card for the current index */}
        <SuccessCard data={allStoriesData[currentIndex]} />
      </div>

      {/* Pagination Dots */}
      <div className="sc-dots-wrapper">
        {allStoriesData.map((_, index) => (
          <div
            key={index} 
            className={`sc-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)} 
          />
        ))}
      </div>
      <div id='container'><button id='btn'  onClick={() => {
            onConnect();
          }}>Book a Free Demo</button></div>
    </div>
  );
};

export default SuccessStories;