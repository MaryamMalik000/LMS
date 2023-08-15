import React, { useState, useEffect } from "react";
import "../css/deal.css";

const Deal = () => {
  const [countdown, setCountdown] = useState(2 * 24 * 60 * 60 + 5 * 60 * 60 + 30 * 60); // 2 days + 5 hours + 30 minutes

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the form data to the server
    // Reset the form after submission
  };

  return (
    <section className="free-course-deal">
      <div className="container">
        <div className="heading">
          <h2>Get a Free Web Development Course Now!</h2>
          <p>Hurry up! This deal won't last long.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="countdown-timer">
              <div className="timer-container">
                <div className="circle">
                  <div className="label">Days</div>
                  <div className="value">{Math.floor(countdown / 86400)}</div>
                </div>
                <div className="circle">
                  <div className="label">Hours</div>
                  <div className="value">{Math.floor((countdown % 86400) / 3600)}</div>
                </div>
                <div className="circle">
                  <div className="label">Minutes</div>
                  <div className="value">{Math.floor((countdown % 3600) / 60)}</div>
                </div>
                <div className="circle">
                  <div className="label">Seconds</div>
                  <div className="value">{countdown % 60}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="registration-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Enter your phone number" required />
                </div>
                <button type="submit">Get It Now</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Deal;
