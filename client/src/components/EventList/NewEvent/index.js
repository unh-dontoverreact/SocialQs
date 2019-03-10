import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Row, Button, Input } from "react-materialize";

class NewEvent extends React.Component {
  render() {
    return (
      <div className="new-event-display card z-depth-2 center-align">
        <h4>Create New Event </h4>
        <form className="center-align">
          <Row>
            <Input
              s={12}
              name="date"
              type="date"
              placeholder="Event Date"
              onChange={this.props.handleNewEvent}
            />
          </Row>
          <Row>
            <Input
              s={12}
              name="title"
              type="textarea"
              placeholder="Describe the Event"
              onChange={this.props.handleNewEvent}
            />
          </Row>
          <Row>
            <Input
              s={12}
              name="contact"
              type="text"
              placeholder="Add contacts"
              onChange={this.props.handleNewEvent}
            />
          </Row>

          <Button
            className="white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
            onClick={this.props.enterNewEvent}
          >
            Create
          </Button>
          <Button
            className="black-text waves-effect waves-light btn white darken-4 z-depth-5"
            id="cancelNewEventFormBtn"
            onClick={this.props.toggleAddEventForm}
          >
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}

export default NewEvent;
