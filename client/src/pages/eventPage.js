import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList } from "../components/EventList";
import { Redirect } from "react-router-dom";

class EventPage extends Component {
  state = {
    showNavbar: false,
    date: [{ date: new Date() }],
  };
  async componentDidMount() {
    await this.props.refreshUser(this.props.user._id);
    let dateArray = [];
    // loop through the events
    for (let i = 0; i < this.props.user.events.length; i++) {
      let event = this.props.user.events[i];
      //format them to(YYYY, M, DD)
      let newDate = new Date(
        event.date.split("-")[0] +
          ", " +
          event.date.slice("-")[6] +
          ", " +
          event.date.split("-")[2].slice("")[0] +
          event.date.split("-")[2].slice("")[1]
      );
      //add them to the dateArray
      dateArray.push(newDate);
    }
    // setting the userID state to retrieve contacts
    this.setState({
      events: this.props.user.events,
      date: dateArray,
      showNavbar: true,
    });
  }
  //shows Navbar after user refreshes so data will be current
  showNavbar = () => {
    if (this.state.showNavbar) {
      return (
        <Sidebar
          user={this.props.user}
          handlers={this.props.handlers}
          events={this.props.user.events}
          date={this.state.date}
        />
      );
    }
  };
  render() {
    if (this.props.user.firstName === "George") {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else
      return (
        <div>
          <Container>
            <div className="section">
              <div className="card-content event-display">
                <Row>
                  <Col>
                    <Sidebar
                      user={this.props.user}
                      handlers={this.props.handlers}
                    />
                  </Col>
                  <Col>
                    <EventList
                      user={this.props.user}
                      handlers={this.props.eventHandlers}
                      refreshUser={this.props.refreshUser}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      );
  }
}

export default EventPage;
