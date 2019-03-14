import React, { Component } from "react";
import "./index.css";
import { Button, Input } from "react-materialize";
import Alert from "../Alert";

class NewUser extends Component {
  render() {
    return (
      <div>
        <div className="valign-wrapper center-align new-user-container">
          <div className="new-user-display card z-depth-2">
            <h3>Create your Account </h3>

            <form autoComplete="on">
              <div className="input-field">
                <Input
                  placeholder="Enter your first name"
                  s={6}
                  name="firstName"
                  id="first-name"
                  onChange={this.props.handleInputChange}
                  className=" .center-align"
                />
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  First Name
                </span>
              </div>

              <div className="input-field">
                <Input
                  placeholder="Enter your last name"
                  name="lastName"
                  id="last-name"
                  className=" .center-align"
                  onChange={this.props.handleInputChange}
                />
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Last Name
                </span>
              </div>

              <div className="input-field">
                <Input
                  placeholder="example@example.com"
                  name="username"
                  id="email"
                  type="email"
                  className="validate .center-align"
                  onChange={this.props.handleInputChange}
                />
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Email (this will be your username)
                </span>
              </div>

              <div className="input-field ">
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  autoComplete="off"
                  onChange={this.props.handleInputChange}
                />
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Password
                </span>
              </div>

              <div className="input-field">
                <Input
                  placeholder="Enter url for your profile picture"
                  s={6}
                  name="image"
                  id="image"
                  onChange={this.props.handleInputChange}
                  className=" .center-align"
                />
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Profile Picture URL
                </span>
              </div>
            </form>

            <Button
              className="signup-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
              onClick={this.props.newUser}
            >
              Sign Up
            </Button>
            <Button
              className="back-to-login-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
              onClick={this.props.returnToLogin}
            >
              Back to login
            </Button>
            <div className="row">
              <Alert
                style={{ opacity: this.props.error ? 1 : 0, marginBottom: 10 }}
              >
                {this.props.error}
              </Alert>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;
