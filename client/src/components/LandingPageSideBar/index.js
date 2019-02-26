import React from "react";
import "./index.css"

const LandingPageSideBar = props => (
    <div className = "row  all-landing-page-info">
    <div className= "Landing-Page-Pitch-display card col s6"> 
   
     <h2> Are you a Social Misfit?</h2>
    
    <h5> Do you struggle with remembering important dates?</h5>
        <h5 >Do you find time slipping by and realize you haven’t reached out to your family or friends in months?</h5> 
    
    <h5>Have you ever picked up the phone to call someone and had a moment of panic realizing you have no idea what to say or you forgot their significant others name?</h5>
  
   <h3 >If you answered yes to any of these questions, this is the site for you!</h3>

   </div>

   <div className ="col cards s6">
   <h2 > Social Q’s is A Personal Relationship Manager </h2>
<h5>It allows you to keep track of your connections even if they've never touched a computer. </h5>
 <h5 >It displays a timeline of upcoming important events. </h5>
 <h5 >It gives you gentle reminders to "cue" you when an event important to you is coming up.</h5>
 <h5 >It allows you to set interval reminders to connect with someone.</h5> 

<div className = "row">
<div className = "col s8">
<h4 className="tag " ><strong><i>All on your own terms</i></strong></h4>
</div>
<div className ="col s4">
      <button className = "white-text  offset-s4 btn-large login-button waves-effect waves-light btn #9c27b0 purple darken-4 z-depth-5" onClick={props.createUser}>Sign Up Today</button>
      </div>
      </div>
    
    </div>
    </div>
);

export default  LandingPageSideBar;