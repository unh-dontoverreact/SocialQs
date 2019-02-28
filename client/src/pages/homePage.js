import React, { Component } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar"
import UserProfile from '../components/UserProfile';
import { EventList, EventListItem } from '../components/EventList';

class HomePage extends Component {

  // Run this when component starts up
  componentDidMount() {
    console.log("logged in user: ", this.props.user.firstName, this.props.user.lastName);
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
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="s3">
              <Sidebar user={this.props.user} />
            </Col>
            <Col size="s9">
              <UserProfile user={this.props.user} />
              <EventList user={this.props.user}>
                {this.renderEventList()}
              </EventList>
            </Col>
          </Row>
        </Container>
      </div>)
  }
}

export default HomePage;