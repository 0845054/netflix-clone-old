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
            className="signin-input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-input-field"
          />
          <button className="signin-btn">Sign In</button>
          <h1 className="siginin-or">OR</h1>
          <button className="signin-btn-helper">Use a Sign-In Code</button>
          <button className="signin-btn-helper">Forget Password?</button>
          <label className="signin-rememberme">
            <input className="signin-rememberme-checkbox" type="checkbox" />
            Remember Me?
          </label>
          <div className="sigin-text-container">
            <div className="signin-text">New to Netflix?</div>
            <b className="signin-text-signup"> Sign up now.</b>
          </div>
          <div className="signin-text-remark">
            This page is protected by Google reCAPTCHA to ensure you’re not a
            bot.{" "}
            <a href="/signin" className="signin-text-link">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
