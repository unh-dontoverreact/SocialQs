import React from "react";
import { Table, Icon, Modal, Button } from "react-materialize";
import ContactListItem from "./ContactListItem";
import "./style.css";
import { Link } from "react-router-dom";

// ContactList - renders an unorderd list of contacts
export class ContactList extends React.Component {
  state = {
    contact: "",
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
                  <Button waves="light">
                    Delete <Icon right>delete_forever</Icon>
                  </Button>
                }
              >
                <p>
                  Are you sure you want to delete{" "}
                  <span>
                    {contact.firstName} {contact.lastName}?{" "}
                  </span>
                </p>
                <Button
                  value={contact._id}
                  waves="light"
                  className="modal-close"
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
                  className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
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
        <h4 className="center-align">
          Contacts <span>({this.props.user.contacts.length})</span>
        </h4>

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
        </Table>
      </div>
    );
  }
}
