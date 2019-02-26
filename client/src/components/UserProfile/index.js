import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css"

function UserProfile(props) {

    return (
      <div id="userProfile">
      <h2>Welcome {props.user.firstName}!</h2>
        <img className="circle"
          src="http://i.pravatar.cc/300" 
          alt="Profile" />
          <div id="userStats">
          <h5>
          user statistics: example
          </h5>
          <h5>
          user statistics: example
          </h5>
          <h5>
          user statistics: example
          </h5>
          </div>
      </div>
    );
}

export default UserProfile;