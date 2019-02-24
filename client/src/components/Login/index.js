import React from "react";
import "./index.css"

const Login = props => (
    <div className= "login-display">
 
   
      {/* <form>
      <label> Username
  <input type="text" name="username" className="login-username" onChange={props.setUsername}/> 
  </label>
          <label>
              Password
       <input  type="text"  name="password" className = "login-password" onChange={props.setPassword}/> 
       </label>
       </form> */}
       <div className="row ">
    <form className="col s6 " autocomplete="on">
      <div className="row">
        <div className="input-field col s5">
          <input id="email" placeholder ="example@example.com" type="email" className="validate" onChange={props.setUsername}/>

          <span className="helper-text" data-error="wrong" data-success="right" >UserName</span>
        </div>
        <div className="input-field col s5">
          <input id="password" type="password" placeholder ="Password" autocomplete="off" onChange={props.setPassword} />
         
          <span class="helper-text" data-error="wrong" data-success="right" >Password</span>
        </div>
       
      </div>
    </form>
    <div  className="col s2  ">
       <a className="login-button white-text z-depth-5 waves-effect waves-light btn #4a148c purple darken-4" onClick={props.getUser}>Sign In</a>
       </div>
   </div>
</div>
);

export default Login;