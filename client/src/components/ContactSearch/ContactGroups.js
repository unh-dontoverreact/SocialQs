import React from "react";
import "./index.css";

const ContactGroups = props => (
    <div className="contact-group-display">
        <div className="row">
            <button
                name="friends-group-button"
                className=""
                onClick={props.displayGroup}
            >
            Friends
               
            </button>
            <button
                name="Coworkers"
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
                name="Pet"
                className=" pet-group-button "
                onClick={props.displayGroup}
            >
            Pet
               
            </button>
        
    </div>
    </div>
);

export default ContactGroups;
