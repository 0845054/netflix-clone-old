import React from "react";

import "./Landing.css";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="landing-container">
      
      <div className="landing-text">
        <h1>Unlimited movies, TV shows, and more</h1>
        <div className="landing-subtitle">Watch anywhere. Cancel anytime.</div>
        <div className="landing-email">
          Ready to watch? Enter your email to create or restart your membership.
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="landing-email-input"
            />
            <button className="landing-navBar-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
