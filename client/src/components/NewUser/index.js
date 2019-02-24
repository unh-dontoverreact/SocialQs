import React from "react";
import "./index.css"

const NewUser = props => (
<div className = "valign-wrapper center-align new-user-container">
    <div className= "new-user-display card z-depth-2">
 
   <h3>Create your Account </h3>
      {/* <form>
      <label> Email
  <input type="text" name="username" className="login-username" onChange={props.setUsername}/> 
  </label>
          <label>
              Password
       <input  type="text"  name="password" className = "login-password" onChange={props.setPassword}/> 
       </label>
     
       </form> */}
   <form autocomplete="on">
        <div className="input-field">
          <input placeholder ="example@example.com" id="email" type="email" className="validate .center-align" onChange={props.setUsername}/>

          <span className="helper-text" data-error="wrong" data-success="right" >Email (this will be your username)</span>
        </div>
        <div className="input-field " >
          <input id="password" type="password" placeholder ="Password" autocomplete="off" onChange={props.setPassword} />
         
          <span class="helper-text" data-error="wrong" data-success="right" >Password</span>
        </div>
       
     
    </form>
   
   

       <a className="signup-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5" onClick={props.newUser}>Sign Up</a>
       <a className = "back-to-login-button white-text waves-effect waves-light btn #4a148c purple darken-4 z-depth-5" onClick={props.returnToLogin}>Back to login</a> 
    </div>
    </div>
);

export default NewUser;