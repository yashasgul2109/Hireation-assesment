import React, { useState } from "react";
import "./DemoScheduler.css";
import logo from "./assets/hiration_full_logo.webp";

const DemoScheduler = ({ onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [];

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(null);
  }

  // Fill days
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const handleDateClick = (day) => {
    const clickedDate = new Date(year, month, day);

    const isPast = clickedDate < new Date(today.setHours(0,0,0,0));
    const isWeekend =
      clickedDate.getDay() === 0 || clickedDate.getDay() === 6;

    if (!isPast && !isWeekend) {
      setSelectedDate(day);
      setShowForm(true);
    }
  };

  const changeMonth = (direction) => {
    setCurrentDate(new Date(year, month + direction, 1));
    setSelectedDate(null);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      onClose();
    }, 1500);
  };

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="scheduler-wrapper" onClick={onClose}>
      <div
        className="scheduler-container"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="header">
          <img
            src= {logo}
            
            alt="logo"
            className="logo"
          />
          <h2>Let’s connect</h2>
        </div>

        {/* Month Navigation */}
        <div className="month-nav">
          <button onClick={() => changeMonth(-1)}>←</button>
          <h3>{monthName} {year}</h3>
          <button onClick={() => changeMonth(1)}>→</button>
        </div>

        {/* Days Header */}
        <div className="day-labels">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar */}
        <div className="calendar">
          {daysArray.map((day, index) => {
            if (!day) return <div key={index}></div>;

            const dateObj = new Date(year, month, day);
            const isPast = dateObj < new Date(today.setHours(0,0,0,0));
            const isWeekend =
              dateObj.getDay() === 0 || dateObj.getDay() === 6;

            return (
              <div
                key={index}
                className={`date 
                  ${isPast ? "past" : ""} 
                  ${isWeekend ? "weekend" : ""} 
                  ${!isPast && !isWeekend ? "future" : ""}
                `}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Form */}
        {showForm && (
          <form className="form" onSubmit={handleSubmit}>
            <h3>Selected: {selectedDate} {monthName}</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="time" placeholder="Preffered Time" required />
            <button type="submit">Submit</button>
          </form>
        )}

        {submitted && <div className="popup">Submitted ✅</div>}
        <button className="exit-btn" onClick={onClose}>
  Exit
</button>
      </div>
    </div>
  );
};

export default DemoScheduler;