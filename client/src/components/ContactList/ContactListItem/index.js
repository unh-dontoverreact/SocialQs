import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Icon } from "react-materialize";
import moment from "moment";

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