import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import AddContactPage from "./pages/addContactPage";
import ContactDisplayPage from "./pages/contactDisplayPage";
import Nav from "./components/Nav";
import axios from "axios";
import EventPage from "./pages/eventPage";
import Footer from "./components/Footer/footer";

class App extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      image: "",
      contacts: [{ firstName: "", lastName: "" }],
      events: [{ date: "", title: "", contact: [""] }],
      cues: [""]
    },

    loggedIn: false,
    searchTerm: "",
    contactChosen: "",
  };

  resetState = () => {
    this.setState({
      user: {
        firstName: "",
        lastName: "J",
        image: "",
        contacts: [{ firstName: "", lastName: "" }],
        events: [{ date: "", title: "", contact: [""] }],
        cues: [""]
    },

      loggedIn: false,
      searchTerm: "",
      contactChosen: "",
    });
  };

  getUser = () => {
    return this.state.user();
  };
  getContacts = () => {
    return this.state.contacts();
  };
  getSearchTerm = () => {
    return this.state.searchTerm();
  };
  getChosenContact = () => {
    return this.state.contactChosen();
  };

  //---------
  //  Login/Logout Click Handlers
  //---------

  // handleUserUpdate() - called to log a new user into the app, stores their state
  handleUserUpdate = (loginStatus, newUser) => {
    console.log(
      "updating global logged in user state to",
      newUser.firstName,
      newUser.lastName
    );
    this.setState({ loggedIn: loginStatus, user: newUser });
  };

  // handleLogout() - called to log a user out of the system, clears their state
  handleLogout = user => {
    this.resetState();
  };

  //---------
  // Contact Page Click Handlers
  //---------
  handleContactLoad = newContacts => {
    this.setState({ contacts: newContacts });
  };
  handleSearchChange = newSearchTerm => {
    this.setState({ searchTerm: newSearchTerm });
  };
  setChosenContact = newContactChosen => {
    this.setState({ contactChosen: newContactChosen });
  };
  handleDeleteUser = user => {
    console.log("deleting user", user.id);
  };
  refreshUser = async id => {
    const { data } = await axios.get("/api/user/" + id);
    console.log(data);
    this.setState({ user: data }, () => {
      console.log(this.state.user.contacts);
    });
  };

  //---------
  // Event Handlers Package to be passed to the child pages
  //---------
  contactEventHandlers = {
    handleContactLoad: this.handleContactLoad,
    logoutHandler: this.handleLogout,
    getContacts: this.getContacts,
    getSearchTerm: this.getSearchTerm,
    handleSearchChange: this.handleSearchChange,
  };

  eventHandlers = {
    userUpdateHandler: this.handleUserUpdate,
    logoutHandler: this.handleLogout,
    getUser: this.getUser,
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  user={this.state.user}
                  handlers={this.eventHandlers}
                  loggedIn={this.state.loggedIn}
                  refreshUser={this.refreshUser}
                  contactChosen={this.state.contactChosen}
                  searchTerm={this.state.searchTerm}
                  contactHandlers={this.contactEventHandlers}
                  setChosenContact={this.setChosenContact}
                />
              )}
            />
            <Route
              exact
              path="/contacts"
              render={() => (
                <ContactPage
                  user={this.state.user}
                  contactChosen={this.state.contactChosen}
                  searchTerm={this.state.searchTerm}
                  contactHandlers={this.contactEventHandlers}
                  setChosenContact={this.setChosenContact}
                  loggedIn={this.state.loggedIn}
                  refreshUser={this.refreshUser}
                />
              )}
            />
            <Route
              exact
              path="/contacts/display"
              render={() => (
                <ContactDisplayPage
                  user={this.state.user}
                  searchTerm={this.state.searchTerm}
                  contactChosen={this.state.contactChosen}
                  setChosenContact={this.setChosenContact}
                  loggedIn={this.state.loggedIn}
                  refreshUser={this.refreshUser}
                />
              )}
            />
            <Route
              exact
              path="/contacts/addnew"
              render={() => (
                <AddContactPage
                  user={this.state.user}
                  searchTerm={this.state.searchTerm}
                  contactChosen={this.state.contactChosen}
                  setChosenContact={this.setChosenContact}
                  loggedIn={this.state.loggedIn}
                  refreshUser={this.refreshUser}
                />
              )}
            />
            <Route
              exact
              path="/landing"
              render={() => <LandingPage handlers={this.eventHandlers} />}
            />
            <Route
              exact
              path="/events"
              render={() => (
                <EventPage
                  user={this.state.user}
                  handlers={this.eventHandlers}
                  refreshUser={this.refreshUser}
                />
              )}
            />
            <Route exact path="*" component={LandingPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
