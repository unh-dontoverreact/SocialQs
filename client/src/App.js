import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import Nav from "./components/Nav";

class App extends Component {

  state = {
    user : { firstName: "", 
             lastName: "",
             image: "",
             contacts: [] }
  }

  handleUserUpdate = (newUser) => {
    console.log("newUser: ", newUser);
    console.log("updating global user state to", newUser.firstName, newUser.lastName);
    this.setState({ user : newUser});
    this.render();
  }

  eventHandlers = {
    userUpdateHandler: this.handleUserUpdate,
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
            <Route exact path="/home" render={() => (
                <HomePage user={this.state.user} />
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
