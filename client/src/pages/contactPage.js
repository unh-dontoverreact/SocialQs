import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactSearch from "../components/ContactSearch";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import ContactTable from "../components/ContactTable";
// import  renderContactList from "../components/ContactList";
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
    filter: (contact =>contact.userID===this.props.user._id)
  };

  // if any input field changes it updates the state
  handleInputChange = event => {
    // Getting the value and name of the input
    const { name, value } = event.target;

    // Updating the state
    this.setState({
      [name]: value,
    });
    console.log(this.state.contactfirstName);
    console.log(this.state.contactbirthDate);
    for (let i = 0; i < 3; i++) {
      if (
        this.state.contactName === this.state.test[i].firstName ||
        this.state.contactName === this.state.test[i].lastName
      ) {
        console.log(this.state.test[i]);
      }
    }
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
    await this.props.refreshUser(this.props.user._id);

    //  // setting the search list to correspond with contacts
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
    console.log(this.props.user.contacts);
  }

  filterSearch = () => {
    this.setState({
      filter: (contact=>contact.firstName + " " + contact.lastName ===
      this.props.searchTerm ||
    contact.firstName === this.props.searchTerm ||
    contact.lastName === this.props.searchTerm )
    });
  };
  // if user clicks on group icons it will display group filter results
  displayGroup = event => {
    const group =event.target.name
    this.setState({
      filter: (contact=>contact.relationship === group)
      
    });
    console.log(event.target.name);
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
  displaySearchedContacts = () => {
    this.setState({
      filter: (contact=>contact.firstName + " " + contact.lastName ===
      this.props.searchTerm ||
    contact.firstName === this.props.searchTerm ||
    contact.lastName === this.props.searchTerm )
    });
  };
  setChosenContact = newContactChosen => {
    // this.setState({ contactChosen: newContactChosen });
    console.log(newContactChosen)
  };

  // this sets the chosen contact globally so the data will be accessable on the contact display page
  setContact = event => {
    // this.props.setChosenContact(event.target.value);
    // console.log(this.props.contactChosen);
    console.log("hello")
    // console.log(event.target)
    const test = this.props.user.contacts.find(contact => contact._id === event.target.value)
    console.log(test)
    this.props.setChosenContact(test)
  };

  deleteContact = contact => {
    axios
      .delete("/api/user/" + this.props.user._id + "/contacts/" + contact._id)
      .then(response => {
        console.log(response);
      });

    console.log(contact.firstName + " " + contact.lastName + " Deleted");
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else if (this.state.searching === "Name") {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s1">
                <Sidebar user={this.props.user} />
              </Col>
              <div onClick={this.backToSearch}> Back to Search </div>
              <Col size="s11">
                {this.props.user.contacts
                  .filter(
                    contact =>
                      contact.firstName + " " + contact.lastName ===
                        this.props.searchTerm ||
                      contact.firstName === this.props.searchTerm ||
                      contact.lastName === this.props.searchTerm
                  )
                  .map((contact, i) => (
                    <ContactTable
                      key={i}
                      value={contact}
                      contactName={contact.firstName + " " + contact.lastName}
                      relationship={contact.email}
                      contactAddress={contact.address}
                      contactRelationship={contact.relationship}
                      contactOccupation={contact.occupation}
                      contactHobbies={contact.hobbies}
                      contactNotes={contact.notes}
                      // setContact={() => this.setContact(contact)}
                      // deleteContact={() => this.deleteContact(contact)}
                    />
                  ))}
              </Col>
              
            </Row>
          </Container>
        </div>
      );
    } else if (this.state.searching === "Group") {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s1">
                <Sidebar user={this.props.user} />
              </Col>
              <div onClick={this.backToSearch}> Back to Search </div>
              <Col size="s11">
                {this.props.user.contacts
                  .filter(contact => contact.firstName === "Cheyra")
                  .map((contact, i) => (
                    <ContactTable
                      key={i}
                      value={contact}
                      contactName={contact.firstName + " " + contact.lastName}
                      relationship={contact.email}
                      contactAddress={contact.address}
                      contactRelationship={contact.relationship}
                      contactOccupation={contact.occupation}
                      contactHobbies={contact.hobbies}
                      contactNotes={contact.notes}
                      setContact={() => this.setContact(contact)}
                      deleteContact={() => this.deleteContact(contact)}
                    />
                  ))}
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (this.state.searching === "Group") {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s1">
                <Sidebar user={this.props.user} />
              </Col>
              <div onClick={this.backToSearch}> Back to Search </div>
              <Col size="s11">
                {this.props.contacts
                  .filter(contact => contact.firstName === "Cheyra")
                  .map((contact, i) => (
                    <ContactTable
                      key={i}
                      contactName={contact.firstName + " " + contact.lastName}
                      relationship={contact.email}
                      contactAddress={contact.address}
                      contactRelationship={contact.relationship}
                      contactOccupation={contact.occupation}
                      contactHobbies={contact.hobbies}
                      contactNotes={contact.notes}
                    />
                  ))}
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <Col size="s1">
              <Sidebar user={this.props.user} />
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
                  launchContactDisplay={this.launchContactDisplay}
                  // searchTerm={this.searchTerm}
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
            <ContactGroups displayGroup={this.displayGroup} />
             
               <ContactList user={this.props.user}
                filter={this.state.filter}
                setContact={this.setContact}
                      // deleteContact={() => this.deleteContact()}
                />
             
            <div> </div>
          </div>
        </div>
      );
    }
  }
}
export default ContactPage;
