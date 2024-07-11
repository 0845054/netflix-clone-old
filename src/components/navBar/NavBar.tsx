import React from "react";
import Logo from "../../assets/Logo.png";

import "./NavBar.css";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="navBar-container">
      <img src={Logo} alt="Missing" className="navBar-logo" />
      <div className="navBar-right">
        <select className="navBar-select">
          <option className="navBar-option" value="english">
            English
          </option>
          <option className="navBar-option" value="chinese">
            Chinese
          </option>
          <option className="navBar-option" value="japanese">
            Japanese
          </option>
          <option className="navBar-option" value="korean">
            Korean
          </option>
          <option className="navBar-option" value="french">
            French
          </option>
        </select>
        <button className="navBar-btn">Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
