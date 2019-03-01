import React from "react";
import "./index.css";
//import photo from "../../../public/assets/images/mormonfamilyreunion"

const LandingPageSideBar = props => (
    <div className="row  all-landing-page-info">
        <div className="Landing-Page-Pitch-display card col s6">
            <h2> Are you a Social Misfit?</h2>
            <h3> Do you struggle with... </h3>
            <h5>Remembering important dates?</h5>
            <h5>Keeping up with your family or friends?</h5>

            <h5>Finding a reason to reach out and start conversation?</h5>
            <h5>Remembering a significant others name?</h5>

            <h4>If yes, this site for you!</h4>
        </div>

        <div className="col cards s6">
            <h2> SocialQ’s - A Personal Relationship Manager </h2>
            <h5>
                {" "}
                Keep track connections even if they've not online{" "}
            </h5>
            <h5>Display a timeline of upcoming important events. </h5>
            <h5>
                Gentle reminders "cue" you when an important event is coming up.
            </h5>
            <h5>Set interval reminders to connect with someone.</h5>

            <div className="row">
                <div className="col s8">
                    <h4 className="tag ">
                        <strong>
                            <i>All on your own terms</i>
                        </strong>
                    </h4>
                </div>
                <div className="col s4">
                    <button
                        className="white-text  offset-s4 btn-large login-button waves-effect waves-light btn #9c27b0 purple darken-4 z-depth-5"
                        onClick={props.createUser}
                    >
                        Sign Up Today
                    </button>
                </div>
            </div>
        </div>
        <div className="image2">
        <img src='/images/mormonfamilyreunion.png' /> 
                   </div>
    </div>
);

export default LandingPageSideBar;
