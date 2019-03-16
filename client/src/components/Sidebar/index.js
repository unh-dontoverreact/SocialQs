import React, { Component } from "react";
import { Button, SideNav, SideNavItem } from "react-materialize";
import { NavLink } from "react-router-dom";
import User from "./User";
import axios from "axios";
import DayPicker from "react-day-picker";
import moment from "moment";
import "react-day-picker/lib/style.css";
import "./style.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      date: new Date(),
      calendarLaunch: false,
      eventDate: "",
      dateArray: [],
      selectedDay: undefined,
      modalOptions: { open: true },
      modifiers: {
        highlighted: [new Date(2019, 2, 28), new Date(2019, 2, 25)],
      },
    };

    this.handleDayClick = this.handleDayClick.bind(this);

    this.logout = this.logout.bind(this);
  }
  // sets the event dates to highlight the calendar on load
  componentDidMount() {
    console.log("yo");
    console.log(this.props.date);

    this.setState({
      modifiers: { highlighted: this.props.date },
    });
  }
// if props change it reloads 
  componentWillReceiveProps() {
    this.setState({
      modifiers: { highlighted: this.props.date },
    });
  }
  // if user clicks on a date it pops up an alert with the event happening 
  //(it's very ugly I was in the process of changing this)
  async handleDayClick(day) {
      //sets selectedDay to day clicked
    await this.setState({ selectedDay: day });
    let clickedDate = moment(this.state.selectedDay)
      .utc()
      .format("MM-DD-YYYY");
    this.props.user.events.forEach(function(event) {
      let eventsDate = moment(event.date)
        .utc()
        .format("MM-DD-YYYY");
      if (clickedDate === eventsDate) {
       

        alert(event.title);
      }
    });
  }

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
          trigger={
            <Button
              className="purple darken-4"
              icon="menu"
              onClick={this.processEvent}
            />
          }
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
          <div />
          <div>
            <DayPicker
              modifiers={this.state.modifiers}
              month={new Date()}
              onDayClick={this.handleDayClick}
            />
          </div>
        </SideNav>{" "}
      </div>
    );
  }
}

export default Sidebar;
