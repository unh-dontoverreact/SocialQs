import React from "react";
import { Table } from "react-materialize";
import ContactListItem  from "./ContactListItem"
import "./style.css";

// ContactList - renders an unorderd list of book items
export class ContactList extends React.Component {

    renderContactList = () => {
        return this.props.user.contacts.map((contact, i) => {
          return (
            <ContactListItem
              key={i}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              email={contact.email}
              birthDate={contact.birthDate}
              relationship={contact.relationship}
              handleDeleteContactClick={this.deleteContact}
            />
          );
        });
      };

  deleteContact(id) {
    console.log("Delete contact", id);
    }   

    render() {
        return(
            <div id="contactSection">
            <h4 className="center-align">Contacts</h4>

            <Table id="contactList" className="striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                        <th>Relationship</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                {this.renderContactList()}
                </tbody>
            </Table>
        </div>
        )
    }
}
