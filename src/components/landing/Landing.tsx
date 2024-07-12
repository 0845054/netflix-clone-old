import React from "react";
import Hero from "../../assets/Hero.png";
import Popcorn from "../../assets/Popcorn.png";

import "./Landing.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Landing = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cover", { replace: true });
  };
  return (
    <div className="landing-container">
      <div className="hero-1-container">
        <img className="hero-1-img" src={Hero} alt="missing"></img>
        <div className="hero-1-info">
          <h1>Unlimited movies, TV shows, and more</h1>
          <div className="hero-1-subtitle">Watch anywhere. Cancel anytime.</div>
          <div className="hero-1-email-container">
            Ready to watch? Enter your email to create or restart your
            membership.
            <div className="email-input-container">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="hero-1-email-btn">Get Started {">"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-2-container">
        <img className="hero-2-img" src={Popcorn} alt="missing" />
        <div className="hero-2-info">
          <div className="hero-2-info-title">
            The Netflix you love for just $6.99.
          </div>
          <div className="hero-2-info-subtitle">
            Get the Standard with ads plan.
          </div>
          <button className="hero-2-info-link" onClick={handleClick}>
            Learn More {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
