import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import {Redirect, Card} from "react-materialize";
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
                    loadUpdatedContact={this.loadUpdatedContact}
                    contactID={this.props.contactChosen._id}
                    firstName={this.props.contactChosen.firstName}
                    lastName={this.props.contactChosen.lastName}
                    email={this.props.contactChosen.email}
                    birthDate={this.props.contactChosen.birthDate}
                    address={this.props.contactChosen.address}
                    occupation={this.props.contactChosen.occupation}
                    hobbies={this.props.contactChosen.hobbies}
                    notes={this.props.contactChosen.notes}
                  />
                </div>
                <Card>
                <h1 className="center"> Contact Display </h1>

                <h3 className="center"> Name -
                  {this.props.contactChosen.firstName +
                    " " +
                    this.props.contactChosen.lastName}{" "}
                  {/* add all other contact info */}
                </h3>
                <h4 className="center"> Email -  
                  {this.props.contactChosen.email}
                </h4>
                <h5 className="center"> Birthday -  
                  {this.props.contactChosen.birthDate}
                </h5>
                <h5 className="center"> Address -  
                  {this.props.contactChosen.address}
                </h5>
                <h5 className="center"> Occupation -  
                  {this.props.contactChosen.occupation}
                </h5>
                <h5 className="center"> Hobbies -  
                  {this.props.contactChosen.hobbies}
                </h5>
                <br></br>
                <h6 className="center"> Notes -  
                  {this.props.contactChosen.notes}
                </h6>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
export default ContactDisplayPage;
