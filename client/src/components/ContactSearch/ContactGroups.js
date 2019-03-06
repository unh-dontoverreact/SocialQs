import React from "react";
import "./index.css";

const ContactGroups = props => (
    <div className="contact-group-display">
        <div className="row">
            <div
                name="Friends"
                className="card group-card offset-s2 col s2"
                onClick={props.displayGroup}
            >
                <img
                    name="Friends"
                    className="contact-avatars  "
                    src={require("./friends.png")}
                    alt="friends"
                />
                <span name="Friends" className=" group-name ">
                    Friends
                </span>
            </div>
            <div
                name="Coworkers"
                className="card group-card offset-s4 col s2"
                onClick={props.displayGroup}
            >
                <img
                    name="Coworkers"
                    className="contact-avatars "
                    src={require("./coworkers.png")}
                    alt="coworkers"
                />
                <span name="Coworkers" className=" group-name ">
                    Coworkers
                </span>
            </div>
        </div>

        <div className="row ">
            <div
                name="Family"
                className=" card group-card offset-s5 col s2 "
                onClick={props.displayGroup}
            >
                <img
                    name="Family"
                    className="contact-avatars "
                    src={require("./family.png")}
                    alt="family"
                />
                <span name="Family" className=" group-name">
                    Family
                </span>
            </div>
        </div>
    </div>
);

export default ContactGroups;
