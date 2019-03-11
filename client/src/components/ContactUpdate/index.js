import React, { Component } from "react";
import { Button, Icon, Modal, Row, Input } from "react-materialize";
import axios from "../../../node_modules/axios";

class ContactUpdateModal extends Component {
  state = {
    
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    birthday: this.props.birthday,
    address: this.props.address,
    occupation: this.props.occupation,
     hobbies: this.props.hobbies,
    notes: this.props.notes,
  };
  resetUpdateModalValues=()=>{
    this.setState({
      firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    birthday: this.props.birthday,
    address: this.props.address,
    occupation: this.props.occupation,
     hobbies: this.props.hobbies,
    notes: this.props.notes,
    })
  }
   //on click to save updated changes
  updateContact = () => {
    axios
      .put(
        "/api/user/" + this.props.userID + "/contacts/" + this.props.contactID,
        {
          firstName: this.state.firstName,
        }
      )
      .then(response => {
        console.log(response);
        // connects to function which updates the contactChosen displaying pn page
        const loadUpdatedContact = this.props.loadUpdatedContact();
        return loadUpdatedContact;
      })
      .catch(error => {
        // TODO: record error to screen
        console.log("login error: ");
        console.log(error);
      });
  };
  setContactChanges = event => {
    // Getting the value and name of the input
    const { name, value } = event.target;

    // Updating the state
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
      <Modal
        header="Update Contact Information"
        trigger={
          <Button  waves="light">
            EDIT CONTACT<Icon right>insert_chart</Icon>
          </Button>
        }
      >
        <Row>
          <Input
            // placeholder= {this.props.firstName}
                      name="firstName"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="First Name"
            defaultValue ={this.props.firstName}
          />
        </Row>
         <Row>
          <Input
           defaultValue ={this.props.lastName}
            name="lastName"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="Last Name"
          />
        </Row>
        <Row>
          <Input
           defaultValue ={this.props.email}
            name="email"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="Email Address"
          /> 
         </Row> 
                  <Row>
          <Input 
            defaultValue ={this.props.birthday}
             name="birthday"
             onChange={(event)=>{this.setContactChanges(event)}}
             s={6}
             label="Birthday"
           />
         </Row>
         <Row>
           <Input
          type ="select"
            
            name="relationship"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="Relationship"

          >
<option value="Family">Family</option>
            <option value="Friend">Friend</option>
            <option value="Co-Worker">Co-Worker</option>
            <option value="Pet-Friend">Pet-Friend</option>
            </Input>
        </Row>
        <Row>
          <Input
            defaultValue ={this.props.occupation}
            name="occupation"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="Occupation"
          />
        </Row>
        <Row>
          <Input 
             defaultValue ={this.props.address}
             name="address"
             onChange={(event)=>{this.setContactChanges(event)}}
             s={6}
             label="Address"
           />
         </Row>
        <Row>
          <Input
           defaultValue ={this.props.hobbies}
            name="hobbies"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="Hobbies"
          />
        </Row>
        <Row>
          <Input
            defaultValue ={this.props.notes}
            name="notes"
            onChange={(event)=>{this.setContactChanges(event)}}
            s={6}
            label="Notes"
          />
        </Row>
        <Button
          waves="light"
          className="modal-close"
          onClick={this.updateContact}
        >
          Save Changes<Icon right>insert_chart</Icon>
        </Button>
      </Modal>
      </div>
    );
  }
}

export default ContactUpdateModal;
