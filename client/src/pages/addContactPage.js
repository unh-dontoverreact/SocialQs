import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import NewContact from "../components/NewContact";
import axios from "axios";

class AddContactPage extends Component {
    state={
        addContact: true,
        contactName: "",
        contactfirstName: "",
        contactlastName: "",
        contactemail: "",
        userID: "",
    }
    componentDidMount() {
        console.log("contact page logged in user: ", this.props.user.firstName, this.props.user.lastName);
        console.log(this.props.contacts)
        console.log(this.props.user)
    }
    // sets user input of new contact to state
    handleInputChange = event => {
        // Getting the value and name of the input
        const { name, value } = event.target;
      
        // Updating the state
        this.setState({
          [name]: value
          
        });
        console.log(this.state.contactfirstName)
        
      
      };

      // establishes new contact and posts it to Mongo DB
    newContact =() => {
  
        let newContactInfo ={
          firstName: this.state.contactfirstName,
          lastName: this.state.contactlastName,
          email: this.state.contactemail,
          image: this.state.contactimage,
          userID: this.props.user._id
        }
        console.log("On New Contact:", newContactInfo)
        console.log(this.state.userID)
        axios.post("/api/user/" + this.props.user._id + "/contacts", newContactInfo)
        .then(response =>{
          console.log(response)
          this.props.setChosenContact(response.data)
        })
        .catch(error => {
          console.log(error.response)
      });
    
      }
    render() {
        if (this.state.addContact){
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
                                          </Col>
                  </Row>
                </Container>   
                </div> 
                        
       
     
        );
    }
    }
}
export default AddContactPage;