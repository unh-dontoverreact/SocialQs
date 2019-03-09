import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import Redirect from "react-materialize";
import ContactUpdateModal from "../components/ContactUpdate";
class ContactDisplayPage extends Component {
  state = {
    user: "",
    contact: "",
  };
  componentDidMount() {
    console.log(this.props.contacts);
    this.setState({
      userID: this.props.user._id,
    });
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else if (this.props.contactChosen.firstName === undefined) {
      return <h2> Contact Loading... </h2>;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s3">
                <Sidebar user={this.props.user} />
              </Col>

              <Col size="s9">
                <div className="right-align">
                  <ContactUpdateModal
                    userID={this.props.contactChosen.userID}
                    contactID={this.props.contactChosen._id}
                  />
                </div>
                <h1 className="center"> Contact Display </h1>

                <h3 className="center">
                  {this.props.contactChosen.firstName +
                    " " +
                    this.props.contactChosen.lastName}{" "}
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
export default ContactDisplayPage;
