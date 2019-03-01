import React from "react";
import "./index.css"


const NewContact = props => (
<div className = "valign-wrapper center-align new-contact-container">
    <div className= "new-contact-display card z-depth-2">
 
   <h3>Create a Contact </h3>

   <form autoComplete="on">
   <div className="input-field">
          <input placeholder ="Enter first name" name="contactfirstName" id="first-name"  className=" .center-align" onChange={props.handleInputChange}/>

          <span className="helper-text" data-error="Please enter a first name" data-success="right" >First Name</span>
        </div>
   <div className="input-field">
          <input placeholder ="Enter last name" name="contactlastName" id="last-name"  className=" .center-align" onChange={props.handleInputChange}/>

          <span className="helper-text" data-error="Please enter a last name" data-success="right" >Last Name</span>
        </div>
    <div className="input-field">
          <input placeholder ="Enter an email address - example@example.com" name="contactemail" id="email" type="email" className="validate .center-align" onChange={props.handleInputChange}/>

          <span className="helper-text" data-error="Please enter a valid email address" data-success="right" >Email Address</span>
        </div>
     
    </form>
  {/* <div> {props.image }</div> */}
   

       <button className="contact-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5" onClick={props.newContact}>Add Contact</button>
       {/* <button className = "back-to-contact-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5" onClick={props.returnToContact}>Back to Create Contact</button>  */}
    </div>
    </div>
);

export default NewContact;