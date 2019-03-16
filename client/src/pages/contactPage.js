import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactSearch from "../components/ContactSearch";
import { Col, Container } from "react-materialize";
import Sidebar from "../components/Sidebar";
import { ContactList } from "../components/ContactList";
import { Redirect } from "react-router-dom";
import ContactGroups from "../components/ContactSearch/ContactGroups";
import axios from "axios";

class ContactPage extends Component {
  state = {
    contacts: [],
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
    filter: contact => contact.userID === this.props.user._id,
    pages: true,
    date: [{ date: new Date() }],
    showNavbar: false,
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
    // setting the userID state to retrieve contacts
    this.setState({
      userID: this.props.user._id,
    });
    // const awaitLoad = async () => {
    await this.props.refreshUser(this.props.user._id);
    this.refreshDropdown();
    let dateArray = [];
    // loop through the events
    for (let i = 0; i < this.props.user.events.length; i++) {
      let event = this.props.user.events[i];
      //format them to(YYYY, M, DD)
      let newDate = new Date(
        event.date.split("-")[0] +
          ", " +
          event.date.slice("-")[6] +
          ", " +
          event.date.split("-")[2].slice("")[0] +
          event.date.split("-")[2].slice("")[1]
      );
      //add them to the dateArray
      dateArray.push(newDate);
    }
    // setting the userID state to retrieve contacts
    this.setState({
      events: this.props.user.events,
      date: dateArray,
      showNavbar: true,
    });
    // };
    // return awaitLoad();
  }
  showNavbar = () => {
    if (this.state.showNavbar) {
      return (
        <Sidebar
          user={this.props.user}
          handlers={this.props.handlers}
          events={this.props.user.events}
          date={this.state.date}
        />
      );
    }
  };
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
    // console.log(event.target)

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
            <div className="row">
              <Col size="s1">
                {this.showNavbar()}
                {/* <Sidebar user={this.props.user} /> */}
              </Col>
              <div className="row">
                <div className="col s4">
                  <button
                    className="login-button white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
                    onClick={this.displaySearchedContacts}
                  >
                    {" "}
                    Search{" "}
                  </button>

                  <ContactSearch
                    contactOptions={this.state.contacts}
                    test={this.test}
                  />
                </div>

                <div className=" offset-s8 col s2  ">
                  <Link
                    to={"/contacts/addnew"}
                    onClick={this.props.launchContactDisplay}
                  >
                    <button className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4">
                      Add a Contact
                    </button>
                  </Link>
                </div>
              </div>
              <ContactGroups
                displayGroup={this.displayGroup}
                displayAllContacts={this.displayAllContacts}
                hideAllContacts={this.hideAllContacts}
              />

              <ContactList
                user={this.props.user}
                filter={this.state.filter}
                setContact={this.setContact}
                deleteContact={this.deleteContact}
                pages={this.state.pages}
              />
            </div>
          </Container>
        </div>
      );
    }
  }
}
export default ContactPage;
