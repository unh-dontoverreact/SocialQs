import React, { Component } from "react";
import "./index.css";
import { Button, Icon, Modal, Row, Input } from "react-materialize";
import axios from "../../../node_modules/axios";

class ContactUpdateModal extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    birthday: this.props.birthday,
    address: this.props.address,
    occupation: this.props.occupation,
    hobbies: this.props.hobbies,
    notes: this.props.notes,
    relationship: "",
  };
  resetUpdateModalValues = () => {
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      birthday: this.props.birthday,
      address: this.props.address,
      occupation: this.props.occupation,
      hobbies: this.props.hobbies,
      notes: this.props.notes,
    });
  };
  //on click to save updated changes
  updateContact = () => {
    axios
      .put(
        "/api/user/" + this.props.userID + "/contacts/" + this.props.contactID,
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          birthDate: this.state.birthday,
          relationship: this.state.relationship,
          address: this.state.address,
          occupation: this.state.occupation,
          hobbies: this.state.hobbies,
          notes: this.state.notes,
        }
      )
      .then(response => {
        console.log(response);
        // connects to function which updates the contactChosen displaying pn page
        const loadUpdatedContact = this.props.loadUpdatedContact();
        return loadUpdatedContact;
      })
      .catch(error => {
        // TODO: record error to screen
        console.log("login error: ");
        console.log(error);
      });
  };
  setContactChanges = event => {
    // Getting the value and name of the input
    const { name, value } = event.target;

    // Updating the state
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Modal
          header="Update Contact Information"
          trigger={
            <Button
              waves="light"
              className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
            >
              EDIT CONTACT<Icon right>insert_chart</Icon>
            </Button>
          }
        >
          <Row>
            <Input
              name="firstName"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="First Name"
              defaultValue={this.props.firstName}
            />
          </Row>
          <Row>
            <Input
              defaultValue={this.props.lastName}
              name="lastName"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Last Name"
            />
          </Row>
          <Row>
            <Input
              defaultValue={this.props.email}
              name="email"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Email Address"
            />
          </Row>
          <Row>
            <input
              placeholder="Enter Birthday - example 09/29/1987"
              defaultValue={this.props.birthday}
              name="birthday"
              id="birthDate"
              type="date"
              s={12}
              className="validate .center-align s"
              onChange={event => {
                this.setContactChanges(event);
              }}
            />
            <span
              className="helper-text"
              data-error="Please enter a date"
              data-success="right"
            >
              Birthday {this.props.birthday}
            </span>
          </Row>
          <Row>
            <Input
              type="select"
              name="relationship"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Relationship"
            >
              <option >   </option>
              <option value="Family">Family</option>
              <option value="Friend">Friend</option>
              <option value="Co-Worker">Co-Worker</option>
              <option value="Pet-Friend">Pet-Friend</option>
            </Input>
          </Row>
          <Row>
            <Input
              defaultValue={this.props.occupation}
              name="occupation"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Occupation"
            />
          </Row>
          <Row>
            <Input
              defaultValue={this.props.address}
              name="address"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Address"
            />
          </Row>
          <Row>
            <Input
              defaultValue={this.props.hobbies}
              name="hobbies"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Hobbies"
            />
          </Row>
          <Row>
            <Input
              defaultValue={this.props.notes}
              name="notes"
              onChange={event => {
                this.setContactChanges(event);
              }}
              s={12}
              label="Notes"
            />
          </Row>
          <Button
            waves="light"
            className="modal-close save-update-button z-depth-3 btn-small "
            onClick={this.updateContact}
          >
            Save Changes<Icon right>insert_chart</Icon>
          </Button>
        </Modal>
      </div>
    );
  }
}

export default ContactUpdateModal;
