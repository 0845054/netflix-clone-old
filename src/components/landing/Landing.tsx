import React from "react";
import Hero from "../../assets/Hero.png";

import "./Landing.css";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="landing-container">
      <div className="hero-1-container">
        <img className="hero-1-img" src={Hero} alt="missing" />
        <div className="hero-1-info">
          <h1>Unlimited movies, TV shows, and more</h1>
          <div className="landing-subtitle">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="landing-email">
            Ready to watch? Enter your email to create or restart your
            membership.
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
      <div className="hero-2-container">
        {/* <img className="hero-1-img" src={Hero} alt="missing" /> */}
        <div className="hero-1-info">
          <h1>Unlimited movies, TV shows, and more</h1>
          <div className="landing-subtitle">
            Watch anywhere. Cancel anytime.
          </div>
          <div className="landing-email">
            Ready to watch? Enter your email to create or restart your
            membership.
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
    </div>
  );
};

export default Landing;
