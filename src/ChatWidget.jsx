import React, { useState } from "react";
import "./ChatWidget.css";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form data goes here
    setSubmitted(true);
    
    // Reset and close after a delay
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="chat-widget-container">
      {/* The Floating Button */}
      {!isOpen && (
        <button className="chat-trigger" onClick={() => setIsOpen(true)}>
          Chat with us ✨
        </button>
      )}

      {/* The Form Panel */}
      {isOpen && (
        <div className="chat-card">
          <div className="chat-header">
            <span>Send us a message</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="check-icon">✅</div>
              <p>Submitted successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="chat-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="How can we help?" rows="3" required></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatWidget;