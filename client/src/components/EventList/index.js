import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css"

//event list
export function EventList({ children }) {
  return <div>{children}</div>;
}

//table details of one event
export function EventListItem(props) {

  return (
    <div id="EventSection">
      <h2>{props.user.firstName}'s Upcoming Events</h2>

      <table id="eventList" className="striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Contacts</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {props.date}
            </td>
            <td>
              {props.title}
            </td>
            <td>
              {props.contact}
            </td>
            <td>
              <button className="eventActions" onClick={() => props.handleQueEventClick(props.id)}><i className="material-icons">alarm</i></button>
              <button className="eventActions" onClick={() => props.handleFrequencyEventClick(props.id)}><i className="material-icons">date_range</i></button>
              <button className="eventActions" onClick={() => props.handleCompletedEventClick(props.id)}><i className="material-icons">beenhere</i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}