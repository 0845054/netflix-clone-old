import React from "react";
import Logo from "../../assets/Logo.png";
import Add from "../../assets/Add.png";

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
      Landing
    </div>
  );
};

export default Landing;
