import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Table, Button, Icon } from "react-materialize";
import EventListItem from "./EventListItem";
import NewEvent from "./NewEvent";
import Axios from "axios";

export class EventList extends React.Component {
  state = {
    date: "",
    title: "",
    contact: [],
    hiddenNewForm: true,
  };

  //when we click enter new event, use state as new event and send to db
  enterNewEvent = async x => {
    x.preventDefault();

    let newEvent = {
      date: this.state.date,
      title: this.state.title,
      contact: this.state.contact,
    };

    this.setState({
      date: "",
      title: "",
      contacts: [],
      hiddenNewForm: true,
    });

    await Axios.post(
      "api/user/" + this.props.user._id + "/events",
      newEvent
    ).catch(error => {
      console.log(error.response);
    });

    await this.props.refreshUser(this.props.user._id);
  };

  //set state as user enters event info
  newEvent = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  //When user clicks delete an event
  handleDeleteEventClick = async id => {
    await Axios.delete(
      "api/user/" + this.props.user._id + "/events/" + id
    ).catch(error => {
      console.log(error.response);
    });

    await this.props.refreshUser(this.props.user._id);
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

  //when user clicks addBtn, new event form toggles
  toggleAddEventForm = x => {
    x.preventDefault();

    this.setState({
      hiddenNewForm: !this.state.hiddenNewForm,
    });
  };

  render() {
    return (
      <div id="eventSection">
        <h4 className="center-align">Upcoming Events</h4>
        <Button
          className="white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
          onClick={this.toggleAddEventForm.bind(this)}
        >
          <Icon>add_circle_outline</Icon>
        </Button>

        {!this.state.hiddenNewForm && (
          <NewEvent
            handleNewEvent={this.newEvent}
            enterNewEvent={this.enterNewEvent}
            toggleAddEventForm={this.toggleAddEventForm}
          />
        )}

        <Table id="eventList" className="striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Contacts</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{this.renderEventList()}</tbody>
        </Table>
        <br />
      </div>
    );
  }
}
