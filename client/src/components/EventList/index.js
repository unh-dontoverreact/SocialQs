import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Table } from "react-materialize";
import EventListItem from "./EventListItem"

export class EventList extends React.Component {

    //renders list of events
  renderEventList = () => {
    return this.props.user.events.map((event, i) => {
      return (
        <EventListItem
          key={i}
          id={event.id}
          date={event.date}
          title={event.title}
          contact={event.contact}
          handleDeleteEventClick={this.props.handleDeleteEventClick}
        />
      );
    });
  };

    render() {
        return(
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

                <tbody>
                {this.renderEventList()}
                </tbody>
            </Table>
        </div>
        )
    }
}

