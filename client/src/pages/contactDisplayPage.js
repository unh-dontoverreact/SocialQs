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
    this.setState({
      userID: this.props.user._id,
      contactID: this.props.contactChosen._id,
    });
  }
  // when a contact is updated it rerenders the contact information
  loadUpdatedContact = () => {
    let awaitload = async () => {
      await this.props.refreshUser(this.props.user._id);
      let updatedContact = this.props.user.contacts.filter(
        contact => contact._id === this.state.contactID
      );
      console.log(updatedContact);
      this.props.setChosenContact(updatedContact[0]);
    };

    return awaitload();
  };

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
                    loadUpdatedContact={this.loadUpdatedContact}
                  />
                </div>
                <h1 className="center"> Contact Display </h1>

                <h3 className="center">
                  {this.props.contactChosen.firstName +
                    " " +
                    this.props.contactChosen.lastName}{" "}
                    {/* add all other contact info */}
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
