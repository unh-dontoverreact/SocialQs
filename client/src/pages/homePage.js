import React, { Component } from 'react'
import API from '../utils/API';
import { ContactList, ContactListItem } from '../components/ContactList'
import { Col, Row, Container } from "../components/Grid";

class HomePage extends Component {

  state = {
    contacts: [],
  };

  // Run this when component starts up,  clear the state and load contacts from db
  componentDidMount() {
    this.setState({contacts: []});

    this.loadContacts();
  }
  
  // pull the list of contacts from the back end
  loadContacts = () => {
    API.getContacts().then((res) => {
      this.setState({contacts : res.data});
    });
  }

  // results component rendering
  renderContacts = () => {
    return this.state.contacts.map((contact, i) => {
      return <ContactListItem 
        key = {i}  
        lastName={contact.lastName}
        firstName={contact.firstName}
        />    
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div style={{border: "1px solid lightgrey", borderRadius: "5px", padding: "5px"}}>
              <h4 id="results-lbl">Results</h4>
                {this.state.contacts.length ? (
                  <ContactList>
                    {this.renderContacts()}  
                  </ContactList>
                ) : (
                  <h4 id="noresults-lbl">No Contacts avaialble</h4>
                )}
                </div>
          </Col>
        </Row>
      </Container>    )
  }
}

export default HomePage;