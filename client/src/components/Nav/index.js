import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="brand-logo center hide-on-med-and-down">
          <li>
            <Link to={`/`} activeclassname="material-icons waves-effect">
              SocialQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
