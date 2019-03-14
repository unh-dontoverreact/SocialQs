import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import moment from "moment";

//table details of one contact
function ContactListItem(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{moment(props.birthDate).utc().format("MM-DD-YYYY")}</td>
      <td>{props.relationship}</td>
      <td>{props.delete}</td>
      <td> {props.go}</td>
    </tr>
  );
}

export default ContactListItem;
