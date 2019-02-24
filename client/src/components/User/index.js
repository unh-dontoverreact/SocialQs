import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

function User(props) {

    return (
      <div>
        <img class="fit-picture"
          src="http://i.pravatar.cc/300"
          alt="profile pic" />

        Username  randomUser {/* {props.username} */ }
      </div>
    );
}

export default User;