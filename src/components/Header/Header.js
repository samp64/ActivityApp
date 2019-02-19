import React from "react";
import logo from "../../images/logo.png";

import "./Header.css";

const Header = () => (
  <div className="headerWrapper">
    <img src={logo} height={40} width={40} />
    <div>
      <div className="clubName">Mr Boing's Trampoline Club</div>
      <div className="backToActivities">Back to Your Activities</div>
    </div>
  </div>
);

export default Header;