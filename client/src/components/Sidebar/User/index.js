import React from "react";
import "./style.css";
import { Card, CardTitle } from "react-materialize";

function User(props) {
  const imageURL = (props.user.image !== undefined && props.user.image) ? props.user.image : "assets/images/SQ.png";
  
  return (
    <div>
        <Card horizontal id="profile-pic" className='small circle'
            header={<CardTitle image={imageURL}></CardTitle>}>
        {props.user.firstName} {props.user.lastName}
        </Card>
    </div>
  );
}

export default User;


