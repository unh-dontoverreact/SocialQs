import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import Nav from "./components/Nav";

class App extends Component {

  state = {
    user : { firstName: "George", 
             lastName: "Jetson",
             image: "",
             contacts: [{firstName: "Jane",  lastName: "Jetson", birthDate: "11/10/1935", email: "jane@gmail.com" },
                        {firstName: "Judy",  lastName: "Jetson", birthDate: "6/5/1958",   email: "judy@gmail.com"},
                        {firstName: "Elroy", lastName: "Jetson", birthDate: "5/1/1963",   email: "elroy@gmail.com"}] ,
             events:   [{date: "4/8/2019", title: "Jane's birthday", contact: ["Jane"]},
                        {date: "4/6/2019", title: "Jane's birthday party", contact: ["Jane Jetson", "Judy Jetson", "Elroy Jetson"]}]           
      }
  }

  resetState = () => {
    this.setState ({
      user : { firstName: "George", 
               lastName: "Jetson",
               image: "",
               contacts: [{firstName : "Jane", lastName : "Jetson"},
                          {firstName : "Judy", lastName : "Jetson"},
                          {firstName : "Elroy", lastName : "Jetson"}],
               events:   [{date: "4/8/2019", title: "Jane's birthday", contact: ["Jane"]},
                          {date: "4/6/2019", title: "Jane's birthday party", contact: ["Jane Jetson", "Judy Jetson", "Elroy Jetson"]}]           
      }}); 
  }

  getUser = () => {
    return this.state.user();
  }

  handleUserUpdate = (newUser) => {
    console.log("newUser: ", newUser);
    console.log("updating global user state to", newUser.firstName, newUser.lastName);
    this.setState({ user : newUser});
  }
  

  handleLogout = (user) => {
    console.log("logging out", user.firstName, user.lastName);
    this.resetState();
  }

  eventHandlers = {
    userUpdateHandler: this.handleUserUpdate,
    logoutHandler : this.handleLogout,
    getUser : this.getUser
  }

  render() {
    return (
      <Router>
        <div>
        <Nav />
          <Switch>
            <Route exact path="/" render={() => (
                <HomePage user={this.state.user} />
                )}/>
            <Route exact path="/contacts" render={() => (
                <ContactPage user={this.state.user} />
                )}/>
            <Route exact path="/landing"  render={() => (
                <LandingPage handlers={this.eventHandlers}/> 
                )} />
            <Route exact path="*" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
