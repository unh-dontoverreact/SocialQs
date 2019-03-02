
import React, { Component } from 'react'
import ContactSearch from "../components/ContactSearch";
import { ContactListItem } from '../components/ContactList'
import NewContact from "../components/NewContact/index";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";

import ContactGroups from "../components/ContactSearch/ContactGroups";

import axios from 'axios';

class ContactPage extends Component {
state = {
  addContact: false,
  contactName: "",
  contactfirstName: "",
  contactlastName: "",
  contactemail: ""
}
// if any input field changes it updates the state
handleInputChange = event => {
  // Getting the value and name of the input
  const { name, value } = event.target;

  // Updating the state
  this.setState({
    [name]: value
    
  });
  console.log(this.state.contactfirstName)
  
  for(let i=0; i<3; i++){
    if (this.state.contactName===this.state.test[i].firstName || this.state.contactName===this.state.test[i].lastName ){
      console.log(this.state.test[i])
    }
  }
};

// if user clicks add contact it renders the NewContact component
addContact =() =>{
  this.setState({
    addContact: true
  })
}
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

// axios request to contact database and checks for matched based on input fields

  setContactFirstName =(event) =>{
    this.setState({firstName: event.target.value})
    console.log(this.state.firstName)
     }
  setContactLastName =(event) =>{
    this.setState({lastName: event.target.value})
    console.log(this.state.lastName)
     }
  //if user clicks new contact it changes state of existing to false and renders new contact component
  createContact=() => {
   this.setState({existing:false})
  }

  //if on NewContact component and you click back to contact form it changes state of existing to true and renders normal contact page and contact components
  returnToContact =() =>{
    this.setState({existing:true})
  }
 
// creates a new contact and post them to contact database based on the state which is set by input fields
 newContact =() => {
  
  let newContactInfo ={
    firstName: this.state.contactfirstName,
    lastName: this.state.contactlastName,
    email: this.state.contactemail,
    image: this.state.contactimage
  }
  console.log("On New Contact:", newContactInfo)
  axios.post('/api/contacts', newContactInfo)
  .then(response =>{
    console.log(response)
  })
  .catch(error => {
    console.log(error.response)
});
this.setState({addContact:false})
}

// allows user to upload a contact image in the state
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            upload: [],
            existing: true,
            test: 
    [
      "Betty",
      "Fred",
      "Davis",
      "JoJo",
      "Tim",
      "Sally",
      "Yoshi",
      "Mario",
      "Luigi",
      "Princess Peach"
      ] 
        };

        this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(pictureFiles, pictureDataURLs) {
     
           this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
            upload:pictureDataURLs,
            image: pictureDataURLs
        });
           console.log(this.state.image)   
    }

    render() {
      if (this.state.addContact) {
      return (
        <div>
   
        <Container>
          
          <Row>
            <Col size="s1">
            <Sidebar user={this.props.user}/>
            </Col>
            <Col size="s11">
            <p></p>
            <NewContact newContact={this.newContact}handleInputChange={this.handleInputChange}/>   
              {/* <div style={{border: "1px purple", borderRadius: "20px", padding: "20px"}}>
                  {this.props.user.contacts.length ? (
                    <ContactList>
                      {this.renderContacts()}  
                    </ContactList>
                  ) : (
                    <h4 id="noresults-lbl">No Contacts available</h4>
                  )}
                  </div> */}
            </Col>
          </Row>
        </Container>   
        </div> )
      } else {
        return (
          <div className="row">
          <Col size="s1">
          <Sidebar user={this.props.user}/>
          </Col>
          <div className="row">
          <div className="col s4">
          <ContactSearch
        contactOptions={this.state.test}
      />
      </div>
      <div  className=" offset-s10 col s2  ">
       <button className="new-contact white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4" onClick={this.addContact}>Add a Contact</button>
       </div>
       </div>

<ContactGroups/>
</div>
        )
      };
    };
  
  }
  export default ContactPage;   