import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList } from "../components/EventList";
import { Redirect } from "react-router-dom";
import NewEvent from "../components/NewEvent";
import Axios from "axios";

class EventPage extends Component {
  state = {
    date: "",
    title: "",
    contact: [],
  };

  //when we click enter new event, use state as new event and send to db
  enterNewEvent = x => {
    x.preventDefault();

    let newEvent = {
      date: this.state.date,
      title: this.state.title,
      contact: this.state.contact,
    };

    Axios.post("api/user/" + this.props.user._id + "/events", newEvent).catch(
      error => {
        console.log(error.response);
      }
    );
  };

  //set state as user enters event info
  newEvent = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    if (this.props.user.firstName === "George") {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else
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
                />
                <br />
                <NewEvent
                  handleNewEvent={this.newEvent}
                  enterNewEvent={this.enterNewEvent}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default EventPage;
