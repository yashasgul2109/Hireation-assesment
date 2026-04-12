import React, { useState } from 'react';
import './DemoScheduler.css';
import logo from "./assets/hiration_full_logo.webp";

const DemoSceduler = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  const timeSlots = ["09:00 AM", "11:00 AM", "01:30 PM", "04:00 PM"];

  const changeMonth = (offset) => {
    setViewDate(new Date(currentYear, currentMonth + offset, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const dayOfWeek = clickedDate.getDay();
    // 0 is Sunday, 6 is Saturday
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

    if (clickedDate >= today && !isWeekend) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-container">
        {/* Left Side: Info */}
        <div className="info-panel">
          <img src={logo} alt="" />
          <p>Team Hiration</p>
          <h2>Hiration Demo</h2>
          <p id='img-para'>Understand how Hiration: <br />

➢Helps 100+ Career Centers to enable their advisors to spend less on repetitive feedback and have more meaningful 1:1 interactions <br />
➢Can help you offer on-demand support for your students <br />
➢Empower you to improve job outcomes</p>
<a href="https://calendly.com/legal/privacy-notice">Privacy Notice</a>
        </div>

        {/* Right Side: Logic */}
        <div className="scheduler-panel">
          {!showForm ? (
            <div className="main-view">
              <div className="calendar-time-flex">
                <div className="calendar-box">
                  <div className="calendar-nav">
                    <button onClick={() => changeMonth(-1)} className="nav-btn">&lt;</button>
                    <h4>{monthName} {currentYear}</h4>
                    <button onClick={() => changeMonth(1)} className="nav-btn">&gt;</button>
                  </div>
                  
                  <div className="calendar-grid">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <span key={d} className="day-label">{d}</span>)}
                    {Array(firstDayOfMonth).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
                    {[...Array(daysInMonth)].map((_, i) => {
                      const day = i + 1;
                      const dateObj = new Date(currentYear, currentMonth, day);
                      const isPast = dateObj < today;
                      const isWeekend = (dateObj.getDay() === 0 || dateObj.getDay() === 6);
                      const isSelected = selectedDate === day;

                      return (
                        <button
                          key={day}
                          onClick={() => handleDateClick(day)}
                          className={`day-cell ${isPast || isWeekend ? 'disabled' : 'upcoming'} ${isSelected ? 'selected' : ''}`}
                          disabled={isPast || isWeekend}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedDate && (
                  <div className="time-box">
                    <p className="date-indicator">Slots for {selectedDate} {monthName}</p>
                    <div className="time-list">
                      {timeSlots.map(slot => (
                        <button 
                          key={slot} 
                          className={`time-cell ${selectedTime === slot ? 'active' : ''}`}
                          onClick={() => setSelectedTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {selectedTime && (
                <button className="next-btn" onClick={() => setShowForm(true)}>Continue</button>
              )}
            </div>
          ) : (
            <div className="form-card">
              <h3>Confirm Appointment</h3>
              <p className="details-summary">
                📅 <strong>{selectedDate} {monthName}, {currentYear}</strong> at <strong>{selectedTime} (IST)</strong>
              </p>
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. Yashaswi" required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="" required />
                </div>
                <div className="input-group">
                  <label>Please share anything that will help prepare for our meeting.</label>
                  <textarea placeholder=""></textarea>
                </div>
                <button type="submit" className="confirm-btn">Book Appointment</button>
                <p>By proceeding, you confirm that you have read and agree to <a href="https://calendly.com/legal/invitee-terms-conditions">Candely's Invitee Terms</a> and <a href="https://calendly.com/legal/privacy-notice">Privacy Notice</a>.</p>
                <button type="button" className="back-link" onClick={() => setShowForm(false)}>Back to Calendar</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoSceduler;