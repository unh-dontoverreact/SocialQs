import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import NewContact from "../components/NewContact";
import axios from "axios";
// import Redirect from "react-materialize";
import { Redirect } from "react-router-dom";

class AddContactPage extends Component {
  state = {
    contactAdded: false,
    contactName: "",
    contactfirstName: "",
    contactlastName: "",
    contactemail: "",
    contactbirthDate: "",
    userID: "",
  };
  componentDidMount() {
    console.log(
      "contact page logged in user: ",
      this.props.user.firstName,
      this.props.user.lastName
    );
    console.log(this.props.user.contacts);
    this.setState({
      userID: this.props.user._id,
    });
    this.props.refreshUser(this.props.user._id);
  }
  // sets user input of new contact to state
  handleInputChange = event => {
    // Getting the value and name of the input
    const { name, value } = event.target;

    // Updating the state
    this.setState({
      [name]: value,
    });
    console.log(this.state.contactfirstName);
  };

  // establishes new contact and posts it to Mongo DB
  newContact = () => {
    let newContactInfo = {
      firstName: this.state.contactfirstName,
      lastName: this.state.contactlastName,
      email: this.state.contactemail,
      birthDate: this.state.contactbirthDate,
      address: this.state.contactAddress,
      relationship: this.state.contactRelationship,
      occupation: this.state.contactOccupation,
      hobbies: this.state.contactHobbies,
      notes: this.state.contactNotes,
      // image: this.state.contactimage,
      userID: this.props.user._id,
    };
    console.log("On New Contact:", newContactInfo);

    axios
      .post("/api/user/" + this.props.user._id + "/contacts", newContactInfo)
      .then(async response => {
        console.log(response);

        const load = async () => {
          await this.props.refreshUser(this.props.user._id);
          this.props.setChosenContact(
            this.props.user.contacts[this.props.user.contacts.length - 1]
          );

          this.setState({
            contactAdded: true,
          });
        };
        return load();
      })

      .catch(error => {
        console.log(error.response);
      });
  };
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else if (this.state.contactAdded) {
      return <Redirect to={{ pathname: "/contacts/display" }} />;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s1">
                <Sidebar user={this.props.user} />
              </Col>
              <Col size="s11">
                <p />
                <NewContact
                  newContact={this.newContact}
                  handleInputChange={this.handleInputChange}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
export default AddContactPage;
