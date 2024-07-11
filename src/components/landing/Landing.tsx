import React from "react";
import Logo from "../../assets/Logo.png";

import "./Landing.css";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="landing-container">
      <div className="landing-navBar">
        <img src={Logo} alt="Missing" className="landing-navBar-logo" />
        <div className="landing-navBar-right">
          <div>
            <select className="landing-navBar-select">
              <option value="english">English</option>
              <option value="chinese">Chinese</option>
              <option value="japanese">Japanese</option>
              <option value="korean">Korean</option>
              <option value="french">French</option>
            </select>
            <div className="icon is-left">
              <i className="fas fa-list"></i>
            </div>
          </div>
          <button className="landing-navBar-btn">Sign In</button>
        </div>
      </div>
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
