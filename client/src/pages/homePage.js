import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList } from "../components/EventList";
import { Redirect } from "react-router-dom";


class HomePage extends Component {
  // Run this when component starts up
  componentDidMount() {
       console.log(
      "logged in user: ",
      this.props.user.firstName,
      this.props.user.lastName
    );
  
    this.props.resetUser(this.props.user._id);
  }

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
              <EventList user={this.props.user}/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default HomePage;
