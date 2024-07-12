import React from "react";
import Hero from "../../assets/Hero.png";
import "./SignIn.css";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="signin-container">
      <img className="hero-1-img" src={Hero} alt="missing"></img>
      <div className="signin-input-container">
        <h1 className="signin-title">Sign In</h1>
        <div className="signin-input">
          <input
            type="email"
            placeholder="Email or phone number"
            className="email-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="email-input"
          />
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
