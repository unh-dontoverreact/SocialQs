import React, { Component } from "react";
import { Button, SideNav, SideNavItem } from "react-materialize";
import { NavLink } from "react-router-dom";
import User from "./User";
import CalendarModal from "./DateModal"

import Calendar from "react-calendar";
import axios from "axios";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      calendarLaunch: false,
    };

    this.logout = this.logout.bind(this);
  }
  //something I was playing around with
  // onClickDay= (value) =>{
  //     console.log(value)
  //     this.setState({
  //         calendarLaunch: true
  //     })
  // }

  logout(event) {
    console.log("logging out");
    axios
      .post("/auth/logout")
      .then(response => {
        console.log("logged out");
        if (response.status === 200) {
          // update app state as logged out (no user data)
          const loggedOutUser = {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            image: "",
            loggedIn: false,
            contacts: [{ firstName: "", lastName: "" }],
            events: [
              {
                date: "",
                title: "",
                contact: [""],
              },
            ],
          };
          this.props.handlers.userUpdateHandler(false, loggedOutUser);
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    return (
      <div>
        <SideNav
          trigger={<Button className="purple darken-4" icon="menu" />}
          options={{ closeOnClick: true }}
        >
          <li>
            <User user={this.props.user} />
          </li>
          <SideNavItem divider />

          <li>
            <NavLink to="/">
              <i className="material-icons">home</i>Home Page
            </NavLink>
          </li>
          <SideNavItem divider />

          <SideNavItem subheader>Contacts</SideNavItem>
          <li>
            <NavLink to="/contacts">
              <i className="material-icons">person_add</i>Manage Contacts
            </NavLink>
          </li>
          <SideNavItem divider />

          <SideNavItem subheader>Events</SideNavItem>
          <li>
            <NavLink to="/events">
              <i className="material-icons">event_note</i>Manage Events
            </NavLink>
          </li>
          <SideNavItem divider />

          <li>
            <NavLink to="/landing" onClick={this.logout}>
              <i className="material-icons">exit_to_app</i>Logout
            </NavLink>
          </li>
          <SideNavItem divider />

          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            onClickDay={this.onClickDay}
          />
        </SideNav>{" "}
        <CalendarModal calendarLaunch={this.state.calendarLaunch} selectedDate={this.state.date}/>
      </div>
    );
  }
}

export default Sidebar;
