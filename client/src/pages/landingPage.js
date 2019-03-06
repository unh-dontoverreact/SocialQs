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
      pictures: [],
      upload: [],
      existing: true,
    };

    this.onDrop = this.onDrop.bind(this);
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
  };

  // axios request to user database and checks for matched based on input fields
  gUser = () => {
    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.handlers.userUpdateHandler(true, response.data);

          // update the state to redirect to home
          this.setState({
            redirectTo: "/",
          });
        }
      })
      .catch(error => {
        // TODO: record error to screen
        console.log("login error: ");
        console.log(error);
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

  //if user clicks new user it changes state of existing to false and renders new user component
  createUser = () => {
    this.setState({ existing: false });
  };

  //if on NewUser component and you click back to login it changes state of existing to true and renders normal landing page and login components
  returnToLogin = () => {
    this.setState({ existing: true });
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
      .post("/user/", newUserInfo)
      .then(response => {
        // TODO: record success to the screen
        console.log(response);
      })
      .catch(error => {
        // TODO: record error  to the screen
        console.log(error.response);
      });
  };

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
      upload: pictureDataURLs,
      image: pictureDataURLs,
    });
    console.log(this.state.image);
  }

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
        />
      );
    }
  }
}

export default LandingPage;
