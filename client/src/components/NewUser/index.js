import React from "react";
import "./index.css"


const NewUser = props => (
<div className = "valign-wrapper center-align new-user-container">
    <div className= "new-user-display card z-depth-2">
 
   <h3>Create your Account </h3>
    
   <form autoComplete="on">
   <div className="input-field">
          <input placeholder ="Enter your first name" name = "firstName" id="first-name"  className=" .center-align" onChange={props.handleInputChange}/>

          <span className="helper-text"  data-error="wrong" data-success="right" >First Name</span>
        </div>
   <div className="input-field">
          <input placeholder ="Enter your last name" name= "lastName" id="last-name"  className=" .center-align" onChange={props.handleInputChange}/>

          <span className="helper-text" data-error="wrong" data-success="right" >Last Name</span>
        </div>
        <div className="input-field">
          <input placeholder ="example@example.com" name = "username" id="email" type="email" className="validate .center-align" onChange={props.handleInputChange}/>

          <span className="helper-text" data-error="wrong" data-success="right" >Email (this will be your username)</span>
        </div>
        <div className="input-field " >
          <input id="password" type="password" name="password" placeholder ="Enter your Password" autoComplete="off" onChange={props.handleInputChange} />
         
          <span className="helper-text" data-error="wrong" data-success="right" >Password</span>
        </div>
       
     
    </form>
  <div> {props.image }</div>
   

       <button className="signup-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5" onClick={props.newUser}>Sign Up</button>
       <button className = "back-to-login-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5" onClick={props.returnToLogin}>Back to login</button> 
    </div>
    </div>
);

export default NewUser;