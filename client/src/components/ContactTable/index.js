import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const ContactTable = props => (
    <div className="login-display">
        <div className="row card ">
            <div className="col s6">
                <div className="col s12"> {props.contactName}</div>
                <div className="col s12">{props.relationship}</div>
            </div>
            <div className="col s2 offset-s6">
                <Link
                    to={"/contacts/display"}
                    // onClick={this.props.launchContactDisplay}
                >
                    <button
                        value={props.value}
                        className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
                        onClick={props.setContact}
                    >
                        {" "}
                        Go to Contact{" "}
                    </button>
                </Link>
                <button
                    className=" white-text z-depth-2 waves-effect waves-light btn #4a148c purple darken-2"
                    onClick={props.deleteContact}
                >
                    {" "}
                    DELETE{" "}
                </button>
            </div>
        </div>
    </div>
);

export default ContactTable;
