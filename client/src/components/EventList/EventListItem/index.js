import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Icon } from "react-materialize";
import moment from "moment";

//table details of one event
function EventListItem(props) {
    return (
        <tr>
            <td>{moment(props.date).format("MM-DD-YYYY")}</td>
            <td>{props.title}</td>
            <td>{props.contact}</td>
            <td>
                <span
                    className="eventActions"
                    onClick={() => props.handleQueEventClick(props.id)}
                >
                    <Icon>alarm</Icon>
                </span>
                <span
                    className="eventActions"
                    onClick={() => props.handleFrequencyEventClick(props.id)}
                >
                    <Icon>date_range</Icon>
                </span>
                <span
                    className="eventActions"
                    onClick={() => props.handleCompletedEventClick(props.id)}
                >
                    <Icon>beenhere</Icon>
                </span>
                <span
                    className="eventActions"
                    onClick={() => props.handleDeleteEventClick(props.id)}
                >
                    <Icon className="material-icons">delete_forever</Icon>
                </span>
            </td>
        </tr>
    );
}

export default EventListItem;