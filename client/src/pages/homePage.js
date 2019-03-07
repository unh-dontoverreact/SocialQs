import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList, EventListItem } from "../components/EventList";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class HomePage extends Component {
  // Run this when component starts up
  componentDidMount() {
    console.log(this.props.user.contacts);
    console.log(
      "logged in user: ",
      this.props.user.firstName,
      this.props.user.lastName
    );
    Axios.get("api/user/" + this.props.user._id).then(response => {
      this.props.handlers.userUpdateHandler(true, response.data);
      console.log(this.props.user.contacts);
    });
  }

  //renders list of events
  renderEventList = () => {
    return this.props.user.events.map((event, i) => {
      return (
        <EventListItem
          key={i}
          id={event.id}
          date={event.date}
          title={event.title}
          contact={event.contact}
        />
      )
    });
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <Sidebar
                  user={this.props.user}
                  handlers={this.props.handlers}
                />
              </Col>
              <Col>
                <EventList user={this.props.user}>
                  {this.renderEventList()}
                </EventList>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default HomePage;
