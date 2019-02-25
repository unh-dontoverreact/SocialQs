import React, { Component } from 'react'
import { ContactList, ContactListItem } from '../components/ContactList'
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar"

class ContactPage extends Component {

  // Run this when component starts up
  componentDidMount() {
    console.log("contact page logged in user: ", this.props.user.firstName, this.props.user.lastName);
  }
  
  // results component rendering
  renderContacts = () => {
   
    return  this.props.user.contacts.map((contact, i) => {
       
      return  <ContactListItem 
        key = {i}  
        lastName={contact.lastName}
        firstName={contact.firstName}
        birthDate={contact.birthDate}
        email={contact.email}
        />    
            
    });
  
  }

  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col size="s3">
          <Sidebar user={this.props.user}/>
          </Col>
          <Col size="s9">
            <div style={{border: "1px solid lightgrey", borderRadius: "5px", padding: "5px"}}>
                {this.props.user.contacts.length ? (
                  <ContactList>
                    {this.renderContacts()}  
                  </ContactList>
                ) : (
                  <h4 id="noresults-lbl">No Contacts available</h4>
                )}
                </div>
          </Col>
        </Row>
      </Container>   
      </div> )
  }
}

export default ContactPage;