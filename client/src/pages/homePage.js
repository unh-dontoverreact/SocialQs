import React, { Component } from "react";
import { Col, Row, Container, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { EventList } from "../components/EventList";
import { ContactList } from "../components/ContactList";
import { Redirect } from "react-router-dom";
import { Cues } from "../components/Cues";
import ContactGroups from "../components/ContactSearch/ContactGroups";
import ContactSearch from "../components/ContactSearch";
import axios from "axios";

class HomePage extends Component {
  state = {
    contacts: "",
    filter: contact => contact.userID === this.props.user._id,
    addContact: false,
    contactName: "",
    contactfirstName: "",
    contactlastName: "",
    contactemail: "",
    contactbirthDate: "",
    contactAddress: "",
    contactRelationship: "",
    contactOccupation: "",
    contactHobbies: "",
    contactNotes: "",
    userID: "",
    searching: "",
    group: "",
    pages: true,
  };

  // refreshes contact drop down list
  refreshDropdown = () => {
    let contactList = [];
    for (let i = 0; i < this.props.user.contacts.length; i++) {
      contactList.push(
        this.props.user.contacts[i].firstName +
          " " +
          this.props.user.contacts[i].lastName
      );
    }
    this.setState({
      contacts: contactList,
    });
  };
  // if any input field changes it updates the state
  handleInputChange = event => {
    // Getting the value and name of the input
    const { name, value } = event.target;

    // Updating the state
    this.setState({
      [name]: value,
    });
  };

  // Run this when component starts up
  async componentDidMount() {
    console.log(
      "contact page logged in user: ",
      this.props.user.firstName,
      this.props.user.lastName
    );
    if (this.props.loggedIn) {
      await this.props.refreshUser(this.props.user._id);
      this.refreshDropdown();
    }
    // setting the userID state to retrieve contacts
    this.setState({
      userID: this.props.user._id,
    });
  }
  // sets filter to search by first and last name when you hit search button
  filterSearch = () => {
    this.setState({
      filter: contact =>
        contact.firstName + " " + contact.lastName === this.props.searchTerm ||
        contact.firstName === this.props.searchTerm ||
        contact.lastName === this.props.searchTerm,
      pages: false,
    });
  };
  displayAllContacts = () => {
    this.setState({
      filter: contact => contact.userID === this.props.user._id,
      pages: true,
    });
  };
  hideAllContacts = () => {
    this.setState({
      filter: contact => contact.userID === 1,
      pages: false,
    });
  };
  // if user clicks on group icons it will display group filter results
  displayGroup = event => {
    const group = event.target.name;
    this.setState({
      filter: contact => contact.relationship === group,
      pages: false,
    });
  };
  //if user is on contact search results and hits back it will return to search component
  backToSearch = () => {
    this.setState({
      searching: false,
    });
  };

  // establishing global searchTerm state
  test = newSearchTerm => {
    this.props.contactHandlers.handleSearchChange(newSearchTerm);
    console.log(this.props.searchTerm);
  };
  // user clicks go next to search bar it renders contacts filtered by name
  displaySearchedContacts = event => {
    this.setState({
      filter: contact =>
        contact.firstName + " " + contact.lastName === this.props.searchTerm ||
        contact.firstName === this.props.searchTerm ||
        contact.lastName === this.props.searchTerm,
      pages: false,
    });
    console.log(event.target.textContent);
    console.log("hello");
  };

  // this sets the chosen contact globally so the data will be accessable on the contact display page
  setContact = event => {
    const newChosenContact = this.props.user.contacts.find(
      contact => contact._id === event.target.value
    );
    this.props.setChosenContact(newChosenContact);
  };

  deleteContact = event => {
    const contactID = event.target.value;
    console.log(event.target);

    axios
      .delete("/api/user/" + this.props.user._id + "/contacts/" + contactID)
      .then(response => {
        console.log(response);
      });
    const load = async () => {
      await this.props.refreshUser(this.props.user._id);

      this.refreshDropdown();
    };
    return load();
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else {
      return (
        <div>
          <Container>
          <Row>
            <Col l={2}>
                <Sidebar user={this.props.user} handlers={this.props.handlers} />
            </Col>
            <Col l={10}>
                <Cues cues={this.props.user.cues} />
            </Col>
            </Row>
            <Row>
              <Col l={2}>
                <button
                  className="login-button white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
                  onClick={this.displaySearchedContacts}
                >
                  Search <Icon>search</Icon>
                </button>
              </Col>
              <Col l={6}>
                <ContactSearch
                  contactOptions={this.state.contacts}
                  test={this.test}
                />
              </Col>
            </Row>
            <Row>
              {" "}
              <h4 className="center-align">
                Contacts{" "}
                <span className="contact-total">
                  ({this.props.user.contacts.length})
                </span>
              </h4>
            </Row>
            <Row>
              <Col l={9}>
                <ContactGroups
                  displayGroup={this.displayGroup}
                  displayAllContacts={this.displayAllContacts}
                  hideAllContacts={this.hideAllContacts}
                />
              </Col>
              <Col l={3} className="l1">
                <Link
                  to={"/contacts/addnew"}
                  onClick={this.props.launchContactDisplay}
                >
                  <button className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4">
                    <Icon>add_circle_outline</Icon> New Contact
                  </button>
                </Link>
              </Col>
            </Row>
            <Row>
              {/* <Col> */}
              <ContactList
                user={this.props.user}
                filter={this.state.filter}
                setContact={this.setContact}
                deleteContact={this.deleteContact}
                pages={this.state.pages}
              />
              {/* </Col> */}
            </Row>
            <Row>
              {/* <Col> */}
              <EventList
                user={this.props.user}
                handlers={this.props.eventHandlers}
                refreshUser={this.props.refreshUser}
              />
              {/* </Col> */}
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default HomePage;
