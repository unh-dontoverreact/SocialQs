import React from "react";
import "./index.css"

const ContactGroups = props => (
    <div className= "contact-group-display">
 
   
    
       <div className="row">
   <div className ="card group-card offset-s2 col s2" onClick={props.displayFriends}>
      <img className="contact-avatars  "  src={require("./friends.png")} alt="friends"/>
      <span className=" group-name " >Friends</span>
      </div>
      <div className ="card group-card offset-s4 col s2" onClick={props.displayCoworkers}>
      <img className="contact-avatars "src={require("./coworkers.png")} alt="coworkers"/>
      <span className=" group-name ">Coworkers</span>
    </div>
    </div>
    
    <div className="row ">
    <div className=" card group-card offset-s5 col s2 onClick={props.displayFamily}">
    <img className="contact-avatars " src={require("./family.png")} alt="family"/>
       <span className=" group-name" >Family</span>

    </div>
    </div>
    </div>
);

export default ContactGroups;