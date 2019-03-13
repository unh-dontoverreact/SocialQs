import React from "react";
import "./index.css";
import Alert from "../Alert";

const Login = props => (
  <div className="login-display">
    <div className="row ">
      <form className="col s6 " autoComplete="on">
        <div className="row">
          <div className="input-field col s5">
            <input
              id="email"
              placeholder="example@example.com"
              name="username"
              type="email"
              className="validate"
              onChange={props.handleInputChange}
            />

            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              UserName
            </span>
          </div>
          <div className="input-field col s5">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={props.handleInputChange}
            />

            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Password
            </span>
          </div>
        </div>
      </form>
      <div className="col s4  ">
        <button
          className="login-button white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
          onClick={props.getUser}
        >
          Sign In
        </button>
      </div>
    </div>
    <div className="row">
      <Alert
        style={{ opacity: props.error ? 1 : 0, marginBottom: 10 }}
      >
        {props.error}
      </Alert>
      </div>
  </div>
);

export default Login;
