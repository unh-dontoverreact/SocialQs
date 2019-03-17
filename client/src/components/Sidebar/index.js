import React, { Component } from "react";
import { Button, SideNav, SideNavItem, Card } from "react-materialize";
import { NavLink } from "react-router-dom";
import User from "./User";
import axios from "axios";
import DayPicker from "react-day-picker";
import moment from "moment";
import "react-day-picker/lib/style.css";
import "./style.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
      selectedEvent: undefined,

      modifiers: {
        highlighted: [new Date(2019, 2, 28), new Date(2019, 2, 25)],
      },
    };

    this.handleDayClick = this.handleDayClick.bind(this);
    this.logout = this.logout.bind(this);
    this.checkForMatch = this.checkForMatch.bind(this);
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
  //(couldn't get it to what I wanted but oh well)
  checkForMatch = clickedDate => {
    this.setState({
      selectedEvents: "",
      count: 0,
    });
    let sEvent = "";

    this.props.user.events.forEach((event, i) => {
      let eventsDate = moment(event.date)
        .utc()
        .format("MM-DD-YYYY");
      if (clickedDate === eventsDate) {
        sEvent = sEvent + " (" + event.title + ")";

        this.setState({
          selectedEvents: sEvent,
        });

        console.log("hey");
      }
    });
  };
  async handleDayClick(day) {
    //sets selectedDay to day clicked
    await this.setState({ selectedDay: day });
    let clickedDate = moment(this.state.selectedDay)
      .utc()
      .format("MM-DD-YYYY");
    this.checkForMatch(clickedDate);
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

          <Card>
            <div>
              {this.state.selectedEvents
                ? "Events on : " +
                  this.state.selectedDay.toLocaleString().split(",")[0]
                : "Select a highlighted date to view events"}
            </div>
            <div>
              {this.state.selectedEvents
                ? "Events :" + this.state.selectedEvents
                : ""}
            </div>
          </Card>
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
