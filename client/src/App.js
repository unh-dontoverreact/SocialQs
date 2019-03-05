import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import AddContactPage from "./pages/addContactPage";
import ContactDisplayPage from "./pages/contactDisplayPage";
import Nav from "./components/Nav";

class App extends Component {
    // state = {
    //     user: { firstName: "George", lastName: "Jetson", image: "" }
    //     // contacts: [
    //     //     {
    //     //         firstName: "Jane",
    //     //         lastName: "Jetson",
    //     //         birthDate: "11/10/1935",
    //     //         email: "jane@gmail.com",
    //     //     },
    //     //     {
    //     //         firstName: "Judy",
    //     //         lastName: "Jetson",
    //     //         birthDate: "6/5/1958",
    //     //         email: "judy@gmail.com",
    //     //     },
    //     //     {
    //     //         firstName: "Elroy",
    //     //         lastName: "Jetson",
    //     //         birthDate: "5/1/1963",
    //     //         email: "elroy@gmail.com",
    //     //     },
    //     // ],
    //     // events: [
    //     //     { date: "4/8/2019", title: "Jane's birthday", contact: ["Jane"] },
    //     //     {
    //     //         date: "4/6/2019",
    //     //         title: "Jane's birthday party",
    //     //         contact: ["Jane Jetson", "Judy Jetson", "Elroy Jetson"],
    //     //     },
    //     // ],
    // };

    // resetState = () => {
    //     this.setState({
    //         user: { firstName: "George", lastName: "Jetson", image: "" }
    //     //     contacts: [
    //     //         { firstName: "Jane", lastName: "Jetson" },
    //     //         { firstName: "Judy", lastName: "Jetson" },
    //     //         { firstName: "Elroy", lastName: "Jetson" },
    //     //     ],
    //     //     events: [
    //     //         {
    //     //             date: "4/8/2019",
    //     //             title: "Jane's birthday",
    //     //             contact: ["Jane"],
    //     //         },
    //     //         {
    //     //             date: "4/6/2019",
    //     //             title: "Jane's birthday party",
    //     //             contact: ["Jane Jetson", "Judy Jetson", "Elroy Jetson"],
    //     //         },
    //     //     ],
    //     });
    // };
    state = {
      user : { firstName: "George", 
               lastName: "Jetson",
               image: "",
              
               events:   [{date: "4/8/2019", title: "Jane's birthday", contact: ["Jane"]},
                          {date: "4/6/2019", title: "Jane's birthday party", contact: ["Jane Jetson", "Judy Jetson", "Elroy Jetson"]}]           
        },
        contacts: [{firstName: "Jane",  lastName: "Jetson", birthDate: "11/10/1935", email: "jane@gmail.com" },
        {firstName: "Judy",  lastName: "Jetson", birthDate: "6/5/1958",   email: "judy@gmail.com"},
        {firstName: "Elroy", lastName: "Jetson", birthDate: "5/1/1963",   email: "elroy@gmail.com"}],
        searchTerm: "",
        contactChosen: "" 
    }
  
    resetState = () => {
      this.setState ({
        user : { firstName: "George", 
                 lastName: "Jetson",
                 image: "",
                
                 events:   [{date: "4/8/2019", title: "Jane's birthday", contact: ["Jane"]},
                            {date: "4/6/2019", title: "Jane's birthday party", contact: ["Jane Jetson", "Judy Jetson", "Elroy Jetson"]}]           
        },
        contacts: [{firstName : "Jane", lastName : "Jetson"},
        {firstName : "Judy", lastName : "Jetson"},
        {firstName : "Elroy", lastName : "Jetson"}],
        searchTerm: "",
        contactChosen: ""  
      }); 
    }
  //   getUser = () => {
  //     return this.state.user();
  //   }
  
  //   handleUserUpdate = (newUser) => {
  //     console.log("newUser: ", newUser);
  //     console.log("updating global user state to", newUser.firstName, newUser.lastName);
  //     this.setState({ user : newUser});
  //   }
    
  
  //   handleLogout = (user) => {
  //     console.log("logging out", user.firstName, user.lastName);
  //     this.resetState();
  //   }
  //   //Mark delete user 
  //   handleDeleteUser = (user) => {
  //     console.log ("deleting user", user.id);
  //     // this.deleteUser( {user: id})
  //   }
  //   //Mark removeUser onclick for Contactlist Component 
  //   // deleteUser = id => {
  //   //   // Filter this.state.users for friends with an id not equal to the id being removed
  //   //   const users = this.state.users.filter(user => user.id !== id);
  //   //   // Set this.state.users equal to the new user array
  //   //   this.setState({ users });
  //   // };
  
  //   eventHandlers = {
  //     userUpdateHandler: this.handleUserUpdate,
  //     logoutHandler : this.handleLogout,
  //     getUser : this.getUser
  //   }
  
  //   render() {
  //     return (
  //       <Router>
  //         <div>
  //         <Nav />
  //           <Switch>
  //             <Route exact path="/" render={() => (
  //                 <HomePage user={this.state.user} />
  //                 )}/>
  //             <Route exact path="/contacts" render={() => (
  //                 <ContactPage user={this.state.user} />
  //                 )}/>
  //             <Route exact path="/landing"  render={() => (
  //                 <LandingPage handlers={this.eventHandlers}/> 
  //                 )} />
  //             <Route exact path="*" component={LandingPage} />
  //           </Switch>
  //         </div>
  //       </Router>
  //     );
  //   }
  // }
  
  
  // export default App;

    getUser = () => {
        return this.state.user();
    };
    getContacts = () => {
        return this.state.contacts();
    };
getSearchTerm = () => {
  return this.state.searchTerm();
}
getChosenContact =() => {
  return this.state.contactChosen();
}
    handleUserUpdate = newUser => {
        console.log("newUser: ", newUser);
        console.log(
            "updating global user state to",
            newUser.firstName,
            newUser.lastName
        );
        this.setState({ user: newUser });
    };
    handleContactLoad = newContacts => {
        this.setState({ contacts: newContacts });
    };
handleSearchChange= newSearchTerm =>{
  this.setState({ searchTerm: newSearchTerm });
}
setChosenContact = newContactChosen =>{
  this.setState({contactChosen: newContactChosen })
}

    handleLogout = user => {
        console.log("logging out", user.firstName, user.lastName);
        this.resetState();
    };
contactEventHandlers ={
  handleContactLoad: this.handleContactLoad,
  logoutHandler: this.handleLogout,
getContacts: this.getContacts,
getSearchTerm: this.getSearchTerm,
handleSearchChange: this.handleSearchChange

}
    eventHandlers = {
        userUpdateHandler: this.handleUserUpdate,
               logoutHandler: this.handleLogout,
        getUser: this.getUser,
    };

    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <HomePage user={this.state.user} contacts={this.state.contacts}/>}
                        />
                        <Route
                            exact
                            path="/contacts"
                            render={() => (
                                <ContactPage
                                    user={this.state.user}
                                    contacts={this.state.contacts}
                                    contactChosen ={this.state.contactChosen}
                                    searchTerm={this.state.searchTerm}
                                    contactHandlers={this.contactEventHandlers}
                                    setChosenContact ={this.setChosenContact}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/contacts/display"
                            render={() => (
                                <ContactDisplayPage user={this.state.user} 
                                contacts={this.state.contacts} 
                                searchTerm={this.state.searchTerm}
                                contactChosen ={this.state.contactChosen}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/contacts/addnew"
                            render={() => (
                                <AddContactPage user={this.state.user} contacts={this.state.contacts} searchTerm={this.state.searchTerm}   contactChosen ={this.state.contactChosen} setChosenContact ={this.setChosenContact}/>
                            )}
                        />
                        <Route
                            exact
                            path="/landing"
                            render={() => (
                                <LandingPage handlers={this.eventHandlers} />
                            )}
                        />
                        <Route exact path="*" component={LandingPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
