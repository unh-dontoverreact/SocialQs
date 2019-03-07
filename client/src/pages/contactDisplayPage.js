import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import Redirect from "react-materialize";

class ContactDisplayPage extends Component {
  componentDidMount() {
    console.log(this.props.contactChosen);
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col size="s3">
                <Sidebar user={this.props.user} />
              </Col>
              <Col size="s9">
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
