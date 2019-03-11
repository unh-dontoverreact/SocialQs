import React from "react";
import "./index.css";
import { Icon, Button } from "react-materialize";

const ContactGroups = props => (
  <div className="contact-group-display">
    <div className="row">
      <Button
        name="Friends"
        className="friends-button-group group-button  z-depth-3 btn-small"
        onClick={props.displayGroup}
      >
        <Icon tiny> face </Icon> Friends
      </Button>
      <Button
        name="Co-Workers"
        className="coworkers-group-button btn-small z-depth-3 group-button "
        onClick={props.displayGroup}
      >
        <Icon tiny> work </Icon> Coworkers
      </Button>

      <Button
        name="Family"
        className="  family-group-button btn-small z-depth-3 group-button "
        onClick={props.displayGroup}
      >
        <Icon tiny> favorite </Icon> Family
      </Button>
      <Button
        name="Pet-Friend"
        className=" pet-group-button btn-small z-depth-3 group-button "
        onClick={props.displayGroup}
      >
        <Icon tiny> pets </Icon> Pets
      </Button>
      <Button
        name="Display-All"
        className="display-all-contacts-button btn-small z-depth-3 group-button "
        onClick={props.displayAllContacts}
      >
        <Icon tiny> expand_more </Icon> Show All
      </Button>
      <Button
        name="Hide-All"
        className=" hide-all-contacts-button btn-small z-depth-3 group-button "
        onClick={props.hideAllContacts}
      >
        <Icon tiny> expand_less </Icon> Collapse
      </Button>
    </div>
  </div>
);

export default ContactGroups;
