// imports dependencies
import React, { Component } from 'react'
import Login from "../components/Login/index"
import NewUser from "../components/NewUser/index"
import LandingPageSideBar from "../components/LandingPageSideBar/index"
import { Redirect } from 'react-router-dom'
import ImageUploader from 'react-images-upload';

import axios from 'axios';

class LandingPage extends Component {
  //set state
  state = {
    firstname: "",
    lastname: "",
username: "",
password: "",
image: "",
redirectTo: null,
userLoggedIn: []
  
}

// axios request to user database and checks for matched based on input fields
getUser = () => {
  let loginUsername = this.state.username;
  let loginPassword = this.state.password;
  console.log(this.state.username + this.state.password)
  axios.get('/api/user')
  .then(response =>{
    let user = response.data
       for (let i=0; i<user.length; i++){
      
     //if there is a match to both username and password it redirects to home page
      if(loginUsername === user[i].email && loginPassword === user[i].password){
        console.log(user[i])
        this.setState({
          userLoggedIn: user[i],
          redirectTo: '/'
      })
      }

    }
  })
  }

  setFirstname =(event) =>{
    this.setState({firstname: event.target.value})
    console.log(this.state.firstname)
     }
  setLastname =(event) =>{
    this.setState({lastname: event.target.value})
    console.log(this.state.lastname)
     }
  // changes the state of the user name based on username input field
  setUsername =(event) =>{
    this.setState({username: event.target.value})
    console.log(this.state.username)
     }

     // changes the state of the password name based on password input field
  setPassword =(event) =>{
    this.setState({password: event.target.value})
    console.log(this.state.password)

  }
  //if user clicks new user it changes state of existing to false and renders new user component
  createUser=() => {
   this.setState({existing:false})
  }

  //if on NewUser component and you click back to login it changes state of existing to true and renders normal landing page and login components
  returnToLogin =() =>{
    this.setState({existing:true})
  }
 
// creates a new user and post them to user database based on the state which is set by input fields
 newUser =() => {
  
  let newUserInfo ={
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    email: this.state.username,
    password: this.state.password,
    image: this.state.image
  }
  console.log(newUserInfo)
  axios.post('/api/user', newUserInfo)
  .then(response =>{
    console.log(response)
  })
  .catch(error => {
    console.log(error.response)
});

}

// allows user to upload an image it in the state
    constructor(props) {
        super(props);
         this.state = { pictures: [],
        upload: [],
      existing: true };

         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(pictureFiles, pictureDataURLs) {
      let upload = this.state.pictures.concat(pictureFiles)
           this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
            upload:pictureDataURLs,
            image: pictureDataURLs
        });
           console.log(this.state.image)   
    }

   




// renders components to landing page
  render() {
    if (this.state.redirectTo) {

      return (
     
      <Redirect to={{ pathname: this.state.redirectTo }} />
     
      )
  } else if (this.state.existing) {
    return (
      <div>
      
      <Login
      getUser={this.getUser}
      setUsername={this.setUsername}
      setPassword={this.setPassword}
     
      />

<LandingPageSideBar
 createUser ={this.createUser}
/>
      </div>
    )
  }
 else{
      return(
<NewUser
returnToLogin = {this.returnToLogin}
newUser = {this.newUser}
setFirstname={this.setFirstname}
setLastname={this.setLastname}
setUsername={this.setUsername}
setPassword={this.setPassword}
image={<ImageUploader
  withIcon={true}
  withPreview={true}
  singleImage={true}
  buttonText='Choose image'
  onChange={this.onDrop}
  imgExtension={['.jpg', '.gif', '.png', '.gif']}
  maxFileSize={5242880}
/>}
/>
    )
  } 
  }
}

export default LandingPage;