import React from "react";
import { Table } from "react-materialize";
import ContactListItem  from "./ContactListItem"
import "./style.css";
import { Link } from "react-router-dom";

// ContactList - renders an unorderd list of book items
export class ContactList extends React.Component {

    state= {
        contact: ""
    }
setContact =(contact) => {
    this.props.setContact(contact)
}

  
    renderContactList = () => {
        return this.props.user.contacts.filter(this.props.filter).map((contact, i) => {
          return (
              <div>
            <ContactListItem
              key={i}
              id={contact._id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              email={contact.email}
              birthDate={contact.birthDate}
              relationship={contact.relationship}
              handleDeleteContactClick={this.deleteContact}
              value ={contact._id}
            //   setContact = {()=>{this.props.setContact(contact)}}
            />
            <Link
            to={"/contacts/display"}
            // onClick={this.props.launchContactDisplay}
        >
            <button
                value={contact._id}
                className=" white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4"
                // onClick={() => this.setContact(contact)}
                onClick={this.props.setContact}
            >
                {" "}
                Go to Contact{" "}
            </button>
        </Link>
        </div>
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
