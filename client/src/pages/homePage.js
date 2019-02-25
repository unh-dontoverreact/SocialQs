import React, { Component } from 'react'
import API from '../utils/API';
import { ContactList, ContactListItem } from '../components/ContactList'
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar"

class HomePage extends Component {

  state = {
    user: { firstName: "",
            lastName: "",
            image: "",
            contacts: []},
    contacts: []  /* deprecated, see user.contacts */
  };

  // Run this when component starts up,  clear the state and load contacts from db
  componentDidMount() {
    console.log("logged in user: ", this.props.user);
    this.setState({
      user: this.props.user,
      contacts: []
      });
    this.loadUserContacts();
  }
  
  // pull the list of contacts *for this user* from the back end
  loadUserContacts = () => {
    API.getContacts().then((res) => {
      this.setState({contacts : res.data});
    });
  }

  // results component rendering
  renderContacts = () => {
   
    return  this.state.contacts.map((contact, i) => {
       
      return  <ContactListItem 
        key = {i}  
        lastName={contact.lastName}
        firstName={contact.firstName}
        />    
            
    });
  
  }

  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-3">
          <Sidebar user={this.state.user}/>
          </Col>
          <Col size="md-9">
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
      </Container>   
      </div> )
  }
}

export default HomePage;