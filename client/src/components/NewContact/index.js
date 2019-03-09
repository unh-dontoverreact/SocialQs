import React from "react";
import "./index.css";
import {Input} from 'react-materialize'

const NewContact = props => (
  <div className="valign-wrapper center-align new-contact-container">
    <div className="new-contact-display card z-depth-2">
      <h3>Create a Contact </h3>
      <form autoComplete="on">
        <div className="input-field">
          <input
            placeholder="Enter first name"
            name="contactfirstName"
            id="first-name"
            className=" .center-align"
            onChange={props.handleInputChange}
          />

          <span
            className="helper-text"
            data-error="Please enter a first name"
            data-success="right"
          >
            First Name
          </span>
        </div>
        <div className="input-field">
          <input
            placeholder="Enter last name"
            name="contactlastName"
            id="last-name"
            className=" .center-align"
            onChange={props.handleInputChange}
          />

          <span
            className="helper-text"
            data-error="Please enter a last name"
            data-success="right"
          >
            Last Name
          </span>
        </div>
        <div className="input-field">
          <input
            placeholder="Enter an email address - example@example.com"
            name="contactemail"
            id="email"
            type="email"
            className="validate .center-align"
            onChange={props.handleInputChange}
          />

          <span
            className="helper-text"
            data-error="Please enter a valid email address"
            data-success="right"
          >
            Email Address
          </span>
        </div>
        {/* Mark adding enter birthday fields */}
        <div className="input-field">
          <input
            placeholder="Enter Birthday - example 09/29/1987"
            name="contactbirthDate"
            id="birthDate"
            type="date"
            className="validate .center-align"
            onChange={props.handleInputChange}
          />
          <span
            className="helper-text"
            data-error="Please enter a date"
            data-success="right"
          >
            Birthday
          </span>
        </div>
        {/* Mark adding 5 catagories 1. address 2.relationship 3.occupation 4. hobbies 5. largenotes */}
        <div className="input-field">
          <input
            placeholder="Enter address - example 123 Sesame Street "
            name="contactAddress"
            id="address"
            type="text"
            className="validate .center-align"
            onChange={props.handleInputChange}
          />
          <span
            className="helper-text"
            data-error="Please enter an address"
            data-success="right"
          >
            Address
          </span>
        </div>
        {/* changing relationship to a drop down menu  */}
        <div className="input-field">
          {/* <input
            placeholder="Enter your relationship to contact"
            name="contactRelationship"
            id="relationship"
            type="text"
            className="validate .center-align"
            onChange={props.handleInputChange}
          /> */}
          {/* import from materialize - drop down */}
          <Input
            s={12}
            type="select"
            label="Relationship to Contact"
            defaultValue="2"
            name="contactRelationship"
            id="relationship"
            onChange={props.handleInputChange}
          >
            <option value="Family">Family</option>
            <option value="Friend">Friend</option>
            <option value="Co-Worker">Co-Worker</option>
            <option value="Pet-Friend">Pet-Friend</option>
          </Input>
          {/* <label>Materialize Multiple Select</label> */}
          {/* <span
            className="helper-text"
            data-error="Please enter your relationship"
            data-success="right"
          >
            Relationship
          </span> */}
        </div>
        <div className="input-field">
          <input
            placeholder="Enter Occupation - example Doctor"
            name="contactOccupation"
            id="occupation"
            type="text"
            className="validate .center-align"
            onChange={props.handleInputChange}
          />
          <span
            className="helper-text"
            data-error="Please enter an occupation"
            data-success="right"
          >
            Occupation
          </span>
        </div>
        <div className="input-field">
          <input
            placeholder="Enter Hobbies - example: Fishing, baseball..."
            name="contactHobbies"
            id="hobbies"
            type="text"
            className="validate .center-align"
            onChange={props.handleInputChange}
          />
          <span
            className="helper-text"
            data-error="Please enter hobbies"
            data-success="right"
          >
            Hobbies
          </span>
        </div>
        <div className="input-field">
          <input
            placeholder="Enter General Notes"
            name="contactNotes"
            id="notes"
            type="text"
            className="validate .center-align"
            onChange={props.handleInputChange}
          />
          <span
            className="helper-text"
            data-error="Please enter notes"
            data-success="right"
          >
            Notes
          </span>
        </div>
      </form>
      <div> {props.image}</div>
      <button
        className="contact-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5"
        onClick={props.newContact}
      >
        Add Contact
      </button>
    </div>
  </div>
);

export default NewContact;
