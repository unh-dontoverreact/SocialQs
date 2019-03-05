import React from "react";
import "./index.css";
<<<<<<< HEAD
=======
//import photo from "../../../public/assets/images/mormonfamilyreunion"
>>>>>>> d720c8091aa9a053fea11d803a518adabb896b0d

const LandingPageSideBar = props => (
    <div className="row  all-landing-page-info">
        <div className="Landing-Page-Pitch-display card col s6">
            <h2> Are you a Social Misfit?</h2>
<<<<<<< HEAD

            <h5> Do you struggle with remembering important dates?</h5>
            <h5>
                Do you find time slipping by and realize you haven’t reached out
                to your family or friends in months?
            </h5>

            <h5>
                Have you ever picked up the phone to call someone and had a
                moment of panic realizing you have no idea what to say or you
                forgot their significant others name?
            </h5>

            <h3>
                If you answered yes to any of these questions, this is the site
                for you!
            </h3>
        </div>

        <div className="col cards s6">
            <h2> Social Q’s is A Personal Relationship Manager </h2>
            <h5>
                It allows you to keep track of your connections even if they've
                never touched a computer.{" "}
            </h5>
            <h5>It displays a timeline of upcoming important events. </h5>
            <h5>
                It gives you gentle reminders to "cue" you when an event
                important to you is coming up.
            </h5>
            <h5>
                It allows you to set interval reminders to connect with someone.
            </h5>
=======
            <h3> Do you struggle with... </h3>
            <h5>Remembering important dates?</h5>
            <h5>Keeping up with your family or friends?</h5>

            <h5>Finding a reason to reach out and start conversation?</h5>
            <h5>Remembering a significant others name?</h5>

            <h4>If yes, this site for you!</h4>
        </div>

        <div className="col cards s6">
            <h2> SocialQ’s - A Personal Relationship Manager </h2>
            <h5> Keep track connections even if they've not online </h5>
            <h5>Display a timeline of upcoming important events. </h5>
            <h5>
                Gentle reminders "cue" you when an important event is coming up.
            </h5>
            <h5>Set interval reminders to connect with someone.</h5>
>>>>>>> d720c8091aa9a053fea11d803a518adabb896b0d

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
<<<<<<< HEAD
=======
        <div className="image2">
            <img src="assets/images/mfrpng.png" alt="beach people" />
        </div>
>>>>>>> d720c8091aa9a053fea11d803a518adabb896b0d
    </div>
);

export default LandingPageSideBar;
