import React from "react";
import "./style.css";

function Nav() {
  return (

    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/">SocialQs</a></li>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;
