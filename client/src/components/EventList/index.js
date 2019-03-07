import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Table, Icon } from "react-materialize";

//event list
export function EventList({ children }) {
    return (
        <div id="eventSection">
            <h4 className="center-align">Upcoming Events</h4>

            <Table id="eventList" className="striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Contacts</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>{children}</tbody>
            </Table>
        </div>
    );
}

//table details of one event
export function EventListItem(props) {
    return (
        <tr>
            <td>{props.date}</td>
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
