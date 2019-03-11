import React from "react";
import "./index.css";
import {Icon  } from "react-materialize";

const ContactGroups = props => (
    <div className="contact-group-display">
        <div className="row">
            <button
                name="Friends"
                className="friends-button-group"
                onClick={props.displayGroup}
            >
          <Icon tiny> face </Icon>  Friends
               
            </button>
            <button
                name="Co-Workers"
                className="coworkers-group-button"
                onClick={props.displayGroup}
            >
           <Icon tiny> work </Icon> Coworkers
               
            </button>
       

        
            <button
                name="Family"
                className="  family-group-button"
                onClick={props.displayGroup}
            >
           <Icon tiny> favorite </Icon> Family
               
            </button>
            <button
                name="Pet-Friend"
                className=" pet-group-button "
                onClick={props.displayGroup}
            >
           <Icon tiny>  pets </Icon> Pets
               
            </button>
            <button
                name="Display-All"
                className="display-all-contacts-button "
                onClick={props.displayAllContacts}
            >
          <Icon tiny> expand_more </Icon>  Show All
               
            </button>
            <button
                name="Hide-All"
                className=" hide-all-contacts-button "
                onClick={props.hideAllContacts}
            >
           <Icon tiny> expand_less </Icon> Collapse
               
            </button>
        
    </div>
    </div>
);

export default ContactGroups;
