import React from "react";
import { Table, Icon, Modal, Button, Row, Col } from "react-materialize";
import ContactListItem from "./ContactListItem";
import "./style.css";
import { Link } from "react-router-dom";

// ContactList - renders an unorderd list of contacts
export class ContactList extends React.Component {
  state = {
    contact: "",
    startIndex: 0,
    endIndex: 10,
    page: 1,
    endpage: Math.ceil(this.props.user.contacts.length / 10)
  };
  componentDidMount(){
    //   this.groupPageNum()
  }
  groupPageNum = () =>{
      if(this.props.filter=== (contact => contact.userID === this.props.user._id) ) {
    let groupPageTotal = 0
    for (let i =0; i<this.props.user.contacts.length; i++){
       
  if (this.props.user.contacts[i].group === "Family"){
     
     groupPageTotal = groupPageTotal +1
          

      }
        };
        this.setState({
            endpage:  Math.ceil(groupPageTotal   /10)
           })
}
  }
  moreContacts = () => {
    if (this.props.user.contacts.length < this.state.endIndex + 10) {
      this.setState({
        startIndex: this.props.user.contacts.length - 11,
        endIndex: this.props.user.contacts.length - 1,
      });
    } else if (this.state.endIndex === this.props.user.contacts.length - 1) {
      this.setState({
        startIndex: this.state.startIndex + 10,
        endIndex: this.props.user.contacts.length - 1,
      });
    } else {
      this.setState({
        startIndex: this.state.startIndex + 10,
        endIndex: this.state.endIndex + 10,
      });
    }
    if (this.state.page < Math.ceil(this.props.user.contacts.length / 10)) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };
  lessContacts = () => {
    if (this.state.startIndex - 10 < 0) {
      this.setState({
        startIndex: 0,
        endIndex: 10,
      });
    } else if (this.state.startIndex === 0) {
    } else {
      this.setState({
        startIndex: this.state.startIndex - 10,
        endIndex: this.state.endIndex - 10,
      });
    }
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
      });
    }
  };
  setContact = contact => {
    this.props.setContact(contact);
  };

  renderContactList = () => {
    return this.props.user.contacts
      .filter(this.props.filter)
      .sort(function(a, b) {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
        return 0;
      })
      .slice(this.state.startIndex, this.state.endIndex)
      .map((contact, i) => {
        return (
          <ContactListItem
            key={i}
            id={contact._id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            email={contact.email}
            birthDate={contact.birthDate}
            relationship={contact.relationship}
            handleDeleteContactClick={this.deleteContact}
            delete={
              <Modal
                header="Delete Contact"
                trigger={
                  <Button
                    waves="light"
                    className=" delete-button z-depth-3 btn-small"
                  >
                    Delete <Icon right>delete_forever</Icon>
                  </Button>
                }
              >
                <p className="delete-question">
                  Are you sure you want to delete{" "}
                  <span>
                    {contact.firstName} {contact.lastName}?{" "}
                  </span>
                </p>
                <Button
                  value={contact._id}
                  waves="light"
                  className="modal-close delete-button"
                  onClick={this.props.deleteContact}
                >
                  Yes
                </Button>
              </Modal>
            }
            go={
              <Link to={"/contacts/display"}>
                <button
                  value={contact._id}
                  className=" white-text z-depth-3 waves-effect waves-light btn #4a148c purple darken-4"
                  onClick={this.props.setContact}
                >
                  {" "}
                  Go{" "}
                </button>
              </Link>
            }
          />
        );
      });
  };

  render() {
    return (
      <div id="contactSection">
        <Table id="contactList" className="striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Birthdate</th>
              <th>Relationship</th>
              <th>Delete Contact</th>
              <th>Go to contact </th>
            </tr>
          </thead>

          <tbody>{this.renderContactList()}</tbody>
          {/* <Row className="center">   </Row> */}
        </Table>
        <Row className="center-align arrow">
          <Col l={6} className="center-align   " onClick={this.lessContacts}>
            <Icon className="arrow">arrow_back</Icon>{" "}
          </Col>
          <Col l={6} className="center-align arrow " onClick={this.moreContacts}>
            <Icon className="arrow">arrow_forward</Icon>
          </Col>
        </Row>
        <Row>
          <div className="center-align">
            {this.state.page}/{this.state.endpage}
          </div>
        </Row>
      </div>
    );
  }
}
