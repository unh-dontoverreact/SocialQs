import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import NewContact from "../components/NewContact";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddContactPage extends Component {
  state = {
    contactAdded: false,
    contactName: "",
    contactfirstName: "",
    contactlastName: "",
    contactemail: "",
    contactbirthDate: "",
    contactRelationship: "",
    userID: "",
    date: [{ date: new Date() }],
    showNavbar: false,
  };

  async componentDidMount() {
    console.log(
      "contact page logged in user: ",
      this.props.user.firstName,
      this.props.user.lastName
    );
    this.setState({
      userID: this.props.user._id,
    });
    await this.props.refreshUser(this.props.user._id);
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
  }
  //shows Navbar after user refreshes so data will be current
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
  //function that capetilizes the first letter of any word passed to it
  capitalization = word => {
    // let word =this.state.contactfirstName
    let firstLetter = word.slice(0, 1).toUpperCase();
    let newWord = firstLetter + word.slice(1);
    console.log(newWord);
    return newWord;
  };
  // sets user input of new contact to state
  handleInputChange = event => {
    // Getting the value and name of the input
    const { name, value } = event.target;

    // Updating the state
    this.setState({
      [name]: value,
    });
    console.log(this.state.contactRelationship);
  };
  // Mark creating function for goBack button

  // let goBack = () =>{
  // window.history.back();
  // }
  goBack = () => {
    window.history.back();
  };
  // End of Mark goBack

  // establishes new contact and posts it to Mongo DB
  newContact = () => {
    //capitalizes first letter of first name and last name
    const adjustedFirstName = this.capitalization(this.state.contactfirstName);
    const adjustedLastName = this.capitalization(this.state.contactlastName);
    //  console.log( this.capetilization(this.state.contactlastName))
    let newContactInfo = {
      firstName: adjustedFirstName,
      lastName: adjustedLastName,
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
                {this.showNavbar()}
                {/* <Sidebar user={this.props.user} events={this.props.user.events} /> */}
              </Col>
              <Col size="s11">
                <p />
                <NewContact
                  newContact={this.newContact}
                  handleInputChange={this.handleInputChange}
                  goBack={this.goBack}
                />
                {/* Mark adding goBack  functionality */}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
export default AddContactPage;
