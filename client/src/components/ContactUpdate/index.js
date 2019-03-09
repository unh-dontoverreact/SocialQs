import React, { Component } from "react";
import { Button, Icon, Modal, Row, Input } from "react-materialize";
import axios from "../../../node_modules/axios";

class ContactUpdateModal extends Component {
  state = {
    firstName: "",
  };
  //on click to save updated changes
  updateContact = () => {
    axios
      .put(
        "/api/user/" + this.props.userID + "/contacts/" + this.props.contactID,
        {
          firstName: this.state.firstName,
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
      <Modal
        header="Modal Header"
        trigger={
          <Button waves="light">
            EDIT CONTACT<Icon right>insert_chart</Icon>
          </Button>
        }
      >
        <Row>
          <Input
            placeholder="info to update"
            name="firstName"
            onChange={this.setContactChanges}
            s={6}
            label="First Name"
          />
        </Row>
        <Button
          waves="light"
          className="modal-close"
          onClick={this.updateContact}
        >
          Save Changes<Icon right>insert_chart</Icon>
        </Button>
      </Modal>
    );
  }
}

export default ContactUpdateModal;
