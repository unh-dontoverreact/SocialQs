import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

function UserProfile(props) {
    return (
        <div id="userProfile">
            <h4>Welcome {props.user.firstName}!</h4>
            <img
                className="circle"
                id="mainProfilePhoto"
                src="http://i.pravatar.cc/300"
                alt="Profile"
            />

            <p>Last Login: 01/01/2019</p>
            <p>Contacts: 27</p>
            <p>Events: 83</p>
        </div>
    );
}

export default UserProfile;
