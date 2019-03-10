import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Icon } from "react-materialize";
import moment from "moment";
// import { Link } from "react-router-dom";

//table details of one contact
function ContactListItem(props) {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{moment(props.birthDate).format("MM-DD-YYYY")}</td>
            <td>{props.relationship}</td>
            <td>
            <div className="col s2 offset-s6">
                {/* <Link
                    to={"/contacts/display"}
                    // onClick={this.props.launchContactDisplay}
                >
                    <button
                        value={props.value}
                        className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
                        // onClick={props.setContact(props)}
                    >
                        {" "}
                        Go to Contact{" "}
                    </button>
                </Link> */}
                <button
                    className=" white-text z-depth-2 waves-effect waves-light btn #4a148c purple darken-2"
                    onClick={props.deleteContact}
                >
                    {" "}
                    DELETE{" "}
                </button>
            </div>
                <span
                    className="contactActions"
                    onClick={() => props.handleDeleteContactClick(props.id)}
                >
                    <Icon className="material-icons">delete_forever</Icon>
                </span>
            </td>
        </tr>
    );
}

export default ContactListItem;