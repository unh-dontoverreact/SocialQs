import React from "react";
import "./index.css";

const ContactGroups = props => (
    <div className="contact-group-display">
        <div className="row">
            <button
                name="Friends"
                className="friends-button-group"
                onClick={props.displayGroup}
            >
            Friends
               
            </button>
            <button
                name="Co-Workers"
                className="coworkers-group-button"
                onClick={props.displayGroup}
            >
            Coworkers
               
            </button>
       

        
            <button
                name="Family"
                className="  family-group-button"
                onClick={props.displayGroup}
            >
            Family
               
            </button>
            <button
                name="Pet-Friend"
                className=" pet-group-button "
                onClick={props.displayGroup}
            >
            Pet
               
            </button>
            <button
                name="Display-All"
                className="display-all-contacts-button "
                onClick={props.displayAllContacts}
            >
            Show All
               
            </button>
            <button
                name="Hide-All"
                className=" hide-all-contacts-button "
                onClick={props.hideAllContacts}
            >
            Collapse
               
            </button>
        
    </div>
    </div>
);

export default ContactGroups;
