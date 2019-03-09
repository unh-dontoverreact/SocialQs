import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Table } from "react-materialize";
import EventListItem from "./EventListItem"
import NewEvent from "./NewEvent";
import Axios from "axios";

export class EventList extends React.Component {

    state = {
        date: "",
        title: "",
        contact: [],
      };
    
      //when we click enter new event, use state as new event and send to db
      enterNewEvent = x => {
        x.preventDefault();
    
        let newEvent = {
          date: this.state.date,
          title: this.state.title,
          contact: this.state.contact,
        };
    
        Axios.post("api/user/" + this.props.user._id + "/events", newEvent).catch(
          error => {
            console.log(error.response);
          }
        );
      };
    
      //set state as user enters event info
      newEvent = event => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value,
        });
      };

    //When user clicks delete an event
  handleDeleteEventClick = id => {
    console.log("delete clicked!", id);

    Axios.delete("api/user/" + this.props.user._id + "/events/" + id).catch(
      error => {
        console.log(error.response);
      }
    );
  };

    //renders list of events
  renderEventList = () => {
    return this.props.user.events.map((event, i) => {
      return (
        <EventListItem
          key={i}
          id={event._id}
          date={event.date}
          title={event.title}
          contact={event.contact}
          handleDeleteEventClick={this.handleDeleteEventClick}
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
            <br/>
            <NewEvent
                  handleNewEvent={this.newEvent}
                  enterNewEvent={this.enterNewEvent}
                />
        </div>
        )
    }
}

