import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Icon, Button, Modal, Row, Input } from "react-materialize";
import moment from "moment";
import Axios from "axios";

//table details of one event
class EventListItem extends React.Component {
  state = {
    date: this.props.date,
    title: this.props.title,
    contact: this.props.contact,
    cueFrequency: this.props.cueFrequency,
    contactList: this.props.user.contacts,
  };

  //when user clicks save to update an event, take any updates and save to db
  saveEventUpdate = x => {
    x.preventDefault();

    let newEvent = {
      date: this.state.date,
      title: this.state.title,
      cueFrequency: this.state.cueFrequency,
    };

    //make this cleaner if it works*****
    if (this.state.date === undefined) {
      newEvent.date = this.props.date;
    }

    if (this.state.title === undefined) {
      newEvent.title = this.props.title;
    }

    if (this.state.cueFrequency === undefined) {
      newEvent.cueFrequency = this.props.cueFrequency;
    }

    //send put request and refresh
    return Axios.put(
      "/api/user/" + this.props.userID + "/events/" + this.props.id,
      {
        date: newEvent.date,
        title: newEvent.title,
        contact: newEvent.contact,
        cueFrequency: newEvent.cueFrequency,
      }
    )
      .then(response => {
        return this.props.refreshUser(this.props.userID);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  //set state as user enters event info
  handleEditEvent = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    if (this.props.date === undefined) {
      return null;
    }
    return (
      <tr>
        <td>
          {moment(this.props.date)
            .utc()
            .format("MM-DD-YYYY")}
        </td>
        <td>{this.props.title}</td>
        <td>{this.props.contact}</td>
        <td>{this.props.cueFrequency}</td>

        <td className="center-align">
          <Modal
            header="Edit Event"
            trigger={
              <Button
                waves="light"
                className="eventActions white-text #4a148c purple darken-4 z-depth-5"
              >
                <Icon>edit</Icon>
              </Button>
            }
          >
            <form className="center-align">
              <Row>
                <input
                  s={12}
                  name="date"
                  type="date"
                  onChange={this.handleEditEvent}
                />
              </Row>
              <Row>
                <Input
                  defaultValue={this.props.title}
                  s={12}
                  name="title"
                  type="text"
                  onChange={this.handleEditEvent}
                />
              </Row>
              <Row>
                <Input
                  defaultValue={this.props.contact}
                  disabled
                  s={12}
                  name="contact"
                />
              </Row>
              <Row>
                <Input
                  s={12}
                  name="cueFrequency"
                  type="select"
                  defaultValue={this.props.cueFrequency}
                  onChange={this.handleEditEvent}
                >
                  <option value="Once">Once</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Off">Off</option>
                </Input>
              </Row>

              <Button
                className="modal-close white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
                onClick={this.saveEventUpdate}
              >
                Save
              </Button>
            </form>
          </Modal>
        </td>
        <td className="center-align">
        <Modal
                header="Delete Event"
                trigger={
                  <Button
                    waves="light"
                    className="eventActions white-text #4a148c red darken-4 z-depth-5"
                  >
                    <Icon>delete_forever</Icon>
                  </Button>
                }
              >
                <p className="delete-question">
                  Are you sure you want to delete{" "}
                  <span>
                    {this.props.title}?{" "}
                  </span>
                </p>
                <Button
                  waves="light"
                  className="modal-close delete-button red darken-4"
                  onClick={() => this.props.handleDeleteEventClick(this.props.id)}
                >
                  Yes
                </Button>
              </Modal>
        </td>
      </tr>
    );
  }
}

export default EventListItem;
