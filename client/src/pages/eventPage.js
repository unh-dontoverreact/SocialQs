import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList } from "../components/EventList";
import { Redirect } from "react-router-dom";

class EventPage extends Component {

  render() {
    if (this.props.user.firstName === "George") {
      return <Redirect to={{ pathname: "/landing" }} />;
    } 
    else
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
                <EventList
                  user={this.props.user}
                  handlers={this.props.eventHandlers}
                  refreshUser={this.props.refreshUser}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default EventPage;
