import React, { Component } from 'react'
import { ContactList, ContactListItem } from '../components/ContactList'
import NewContact from "../components/NewContact/index";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar"

import axios from 'axios';

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

// axios request to contact database and checks for matched based on input fields

// getContact = () => {
//   let contactname = this.state.contactname;
//   console.log(this.state.contactname,this.state.password)
//   axios.get('/api/contact')
//   .then(response =>{
//     let contact = response.data
//        for (let i=0; i<contact.length; i++){
      
//      //if there is a match to both username and password it redirects to home page
//       if(loginUsername === user[i].email && loginPassword === user[i].password){
//         console.log(user[i])
//         this.props.handlers.userUpdateHandler(user[i]);  /* update main app state with new user */        
//         this.setState({
//           userLoggedIn: user[i],
//           redirectTo: '/'
//         });
//       }

//     }
//   })
//   }

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

  //if on NewContact component and you click back to contact form it changes state of existing to true and renders normal landing page and contact components
  returnToContact =() =>{
    this.setState({existing:true})
  }
 
// creates a new contact and post them to contact database based on the state which is set by input fields
 NewContact =() => {
  
  let newContactInfo ={
    firstName: this.state.contact.firstName,
    lastName: this.state.contact.lastName,
    email: this.state.contact.email,
    image: this.state.contact.image
  }
  console.log("On New Contact:", newContactInfo)
  axios.post('/api/contact', newContactInfo)
  .then(response =>{
    console.log(response)
  })
  .catch(error => {
    console.log(error.response)
});

}

// allows user to upload a contact image in the state
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            upload: [],
            existing: true 
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
    return (
      <div>
      <Container>
        <Row>
          <Col size="s3">
          <Sidebar user={this.props.user}/>
          </Col>
          <Col size="s9">
            <div style={{border: "1px solid lightgrey", borderRadius: "5px", padding: "20px"}}>
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