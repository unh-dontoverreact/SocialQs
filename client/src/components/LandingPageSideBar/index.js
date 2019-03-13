import React from "react";
import { Button, Card, CardTitle, Col } from "react-materialize";
import "./index.css";

const LandingPageSideBar = props => (
  <div container="landing">
    {/* Left Side Card */}
    <div className="row  all-landing-page-info">
      <Col m={6} s={6}>
        <Card
          header={
            <CardTitle image="assets/images/sadsilhouettegirl.jpg">
              Do you sometimes feel like a Social Misfit?
            </CardTitle>
          }
          className="Landing-Page-Pitch-display"
          textClassName="white-text"
        >
          <p>Are you challenged with...</p>
          <ul>
            <li>
              {" "}
              <i className="material-icons">event</i> Remembering important
              dates?
            </li>
            <li>
              {" "}
              <i className="material-icons">person</i> Keeping up with your
              family or friends?
            </li>
            <li>
              {" "}
              <i className="material-icons">phone</i> Finding a reason to reach
              out and start conversation?
            </li>
            <li>
              {" "}
              <i className="material-icons">pets</i> Recalling the names of
              people and their pets?
            </li>
          </ul>
          <br />
          <h6>Let SocialQs show you how to make it all so easy...</h6>
        </Card>
      </Col>

      {/* Right Side Card */}
      <Col m={6} s={6}>
        <Card
          header={
            <CardTitle image="assets/images/mfrpng.png">
              SocialQs - A Personal Relationship Manager
            </CardTitle>
          }
          className="Landing-Page-Pitch-display"
          textClassName="white-text"
        >
          <p>Let SocialQs help...</p>
          <ul>
            <li>
              {" "}
              <i className="material-icons">track_changes</i> Track connections
              even if they're not online{" "}
            </li>
            <li>
              {" "}
              <i className="material-icons">timeline</i> See a timeline of
              important events
            </li>
            <li>
              {" "}
              <i className="material-icons">alarm</i> Get "cues" when an
              important event is coming up
            </li>
            <li>
              {" "}
              <i className="material-icons">people</i> Set reminders to connect
              with someone
            </li>
          </ul>
          <p>All on your own terms</p>
          <br />
          <Button
            waves="light"
            large
            className="white-text  offset-s4 btn-large login-button waves-effect waves-light btn #9c27b0 purple darken-4 z-depth-5"
            onClick={props.createUser}
          >
            Sign Up Today
          </Button>
        </Card>
      </Col>
    </div>
  </div>
);

export default LandingPageSideBar;
