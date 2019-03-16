import React, { Component } from "react";
import Login from "../components/Login/index";
import NewUser from "../components/NewUser/index";
import LandingPageSideBar from "../components/LandingPageSideBar/index";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existing: true,
    };
  }

  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    image: "",
    redirectTo: null,
    userLoggedIn: [],
    test: "",
    error: "",
  };

  // axios request to user database and checks for matched based on input fields
  gUser = () => {
    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // Success! Update App.js state
          if (this.props.handlers !== undefined) {
            this.props.handlers.userUpdateHandler(true, response.data);
          }
          // update the state to redirect to home
          this.setState({
            error: "",   
            redirectTo: "/",
          });
        } 
      })
      .catch(error => {
        // Record error to console & screen
        console.log("login error: ");
        console.log(error);
        this.setState({ error : "Failed to match user id and password"})
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
    console.log(this.state.username);
  };

  // Used by login/alert to report any failed sign-in attempts
  getErrorMessage = () => {
      return this.state.error;
  }

  //if user clicks new user it changes state of existing to false and renders new user component
  createUser = () => {
    this.setState({ existing: false });
  };

  //if on NewUser component and you click back to login it changes state of existing to true and renders normal landing page and login components
  //also clears any error messages on the login page so they don't carry over
  returnToLogin = () => {
    this.setState({ error : "",
                    existing: true });
  };

  // creates a new user and post them to user database based on the state which is set by input fields
  newUser = () => {
    let newUserInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.username,
      username: this.state.username,
      password: this.state.password,
      image: this.state.image,
    };

    console.log("On New User:", newUserInfo);
    axios
      .post("/auth/", newUserInfo)
      .then(response => {
        // Record success to the screen
        this.setState({ error : "Success!  New sign-in created.  Click 'Back to Login' to return to sign-in page"})
        console.log(response);
      })
      .catch(error => {
        // Record error  to the screen
        console.log(error.response.data.message);
        this.setState({ error : "Unable to add these credentials.  This user may already be in use or missing a required email/password field"})
      });
  };

  // renders components to landing page
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else if (this.state.existing) {
      return (
        <div>
          <Login
            getUser={this.gUser}
            handleInputChange={this.handleInputChange}
            error={this.getErrorMessage()}
            />

          <LandingPageSideBar createUser={this.createUser} />
        </div>
      );
    } else {
      return (
        <NewUser
          returnToLogin={this.returnToLogin}
          newUser={this.newUser}
          handleInputChange={this.handleInputChange}
          error={this.getErrorMessage()}
          />
      );
    }
  }
}

export default LandingPage;
