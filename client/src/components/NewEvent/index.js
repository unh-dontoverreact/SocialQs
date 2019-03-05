import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Modal, Button, Input } from "react-materialize";

class NewEvent extends React.Component {
  render() {
    return (
      <Modal
        className="new-event-display card z-depth-2 center-align"
        header="Create New Event"
        trigger={
          <Button
            center
            waves="light"
            className="white-text #4a148c purple darken-4 z-depth-5"
          >
            Create New Event
          </Button>
        }
      >
        <form>
          <div>
            <Input
              name="date"
              type="date"
              placeholder="Event Date"
              onChange={this.props.handleNewEvent}
            />
          </div>
          <div>
            <Input
              name="title"
              type="text"
              placeholder="Describe the Event"
              onChange={this.props.handleNewEvent}
            />
          </div>
          <div>
            <Input
              name="contact"
              type="text"
              placeholder="Add contacts"
              onChange={this.props.handleNewEvent}
            />
          </div>

          <button
            className="white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
            onClick={this.props.enterNewEvent}
          >
            Create
          </button>
        </form>
      </Modal>
    );
  }
}

export default NewEvent;
