import React from "react";
import Hero from "../../assets/Hero.png";
import HeroAcc from "../../assets/HeroAccountHome.png";
import HeroTitle from "../../assets/TitleOfHighlight.png";
import PlayButton from "../../assets/PlayButton.png";
import "./AccountHome.css";

type Props = {};

const AccountHome = (props: Props) => {
  return (
    <div className="acc-home-highlight-container">
      <img className="hero-2-img" src={HeroAcc} alt="missing"></img>
      <div className="hero-2-title-container">
        <img src={HeroTitle} alt="missing"></img>
        <div className="hero-2-desc">
          Years after retiring from their formidable ninja lives, a
          dysfunctional family must return to shadowy missions to counteract a
          string of looming threats.
        </div>
        <div className="buttons-container">
          <button className="play-btn">
            <img src={PlayButton} alt="missing"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
