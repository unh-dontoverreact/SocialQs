import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import EventListItem from "../components/EventList/EventListItem/index";
import { Redirect, Table } from "react-materialize";
import ContactUpdateModal from "../components/ContactUpdate";
import moment from "moment";
import axios from "axios";

class ContactDisplayPage extends Component {
  state = {
    user: "",
    contact: "",
  };
  componentDidMount() {
    this.setState({
      userID: this.props.user._id,
      contactID: this.props.contactChosen._id,
    });
    //renders list of events
  }
// pulled from Felicia's code will modify to filter events for a specific user
  renderEventList = () => {
    let eventsArray = this.props.user.events;

    return eventsArray.map((event, i) => {
      //will change to code below after Felicia adds contactID to events created
      // return eventsArray.filter(event => (event.contactID===contactID).map((event, i) => {
      return (
        <EventListItem
          key={i}
          id={event._id}
          date={event.date}
          title={event.title}
          contact={event.contact}
          cueFrequency={event.cueFrequency}
          handleDeleteEventClick={this.handleDeleteEventClick}
        />
      );
    });
  };
  //When user clicks delete an event (pulled from Felicia's code to delete event)
  handleDeleteEventClick = async id => {
    console.log("hello");
    await axios
      .delete("/api/user/" + this.props.user._id + "/events/" + id)
      .catch(error => {
        console.log(error.response);
      });

    this.props.refreshUser(this.props.user._id);
  };
  // when a contact is updated it rerenders the contact information
  loadUpdatedContact = () => {
    let awaitload = async () => {
      await this.props.refreshUser(this.props.user._id);
      let updatedContact = this.props.user.contacts.filter(
        contact => contact._id === this.state.contactID
      );
      console.log(updatedContact);
      this.props.setChosenContact(updatedContact[0]);
    };

    return awaitload();
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else if (this.props.contactChosen.firstName === undefined) {
      return <h2> Contact Loading... </h2>;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s3">
                <Sidebar user={this.props.user} />
              </Col>

              <Col size="s9">
                <div className="right-align">
                  <ContactUpdateModal
                    userID={this.props.contactChosen.userID}
                    loadUpdatedContact={this.loadUpdatedContact}
                    contactID={this.props.contactChosen._id}
                    firstName={this.props.contactChosen.firstName}
                    lastName={this.props.contactChosen.lastName}
                    email={this.props.contactChosen.email}
                    birthDate={this.props.contactChosen.birthDate}
                    address={this.props.contactChosen.address}
                    occupation={this.props.contactChosen.occupation}
                    hobbies={this.props.contactChosen.hobbies}
                    notes={this.props.contactChosen.notes}
                  />
                </div>
                <Table>
                  <thead>
                    <tr>
                      <th data-field="field">Field</th>
                      <th data-field="value">Contact Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>
                        {" "}
                        {this.props.contactChosen.firstName +
                          " " +
                          this.props.contactChosen.lastName}{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>Email</td>
                      <td>{this.props.contactChosen.email}</td>
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <td>
                        {" "}
                        {moment(this.props.contactChosen.birthDate)
                          .utc()
                          .format("MM-DD-YYYY")}
                      </td>
                    </tr>

                    <tr>
                      <td>Address</td>
                      <td>{this.props.contactChosen.address}</td>
                    </tr>

                    <tr>
                      <td>Occupation</td>
                      <td>{this.props.contactChosen.occupation}</td>
                    </tr>
                    <tr>
                      <td>Hobbies</td>
                      <td>{this.props.contactChosen.hobbies}</td>
                    </tr>
                    <tr>
                      <td>Notes</td>
                      <td>{this.props.contactChosen.notes}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <h3> Events </h3>
            </Row>
            <Row>
              <tbody
                user={this.props.user}
                handlers={this.props.eventHandlers}
                refreshUser={this.props.refreshUser}
              >
                {this.renderEventList()}
              </tbody>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
export default ContactDisplayPage;
