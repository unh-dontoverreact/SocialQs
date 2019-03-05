import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

function UserProfile(props) {
    return (
<<<<<<< HEAD
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
=======
        <div className="row" id="userProfile">
            <h4>Welcome {props.user.firstName}!</h4>

            <div className="col s6">
                <img
                    className="circle"
                    id="mainProfilePhoto"
                    src="http://i.pravatar.cc/300"
                    alt="Profile"
                />
            </div>

            <div className="col s6">
                <p>Last Login: 3/2/2019</p>
                <p>Contacts: 27</p>
                <p>Events: 83</p>
            </div>
>>>>>>> d720c8091aa9a053fea11d803a518adabb896b0d
        </div>
    );
}

export default UserProfile;
