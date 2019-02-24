import axios from "axios";

export default {
  //gets user info
  getUser: function() {
    return axios.get("/api/user");
  },

  //creates a new user
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  // Gets all contacts
  getContacts: function() {
    return axios.get("/api/contacts");
  },
  
  // Gets the contact with the given id
  getContact: function(id) {
    return axios.get("/api/contacts/" + id);
  },

  // Deletes the contact with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contacts/" + id);
  },

  // Saves a contact to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  },

  // Search for contact(s) from a lorem site -- merely to demonstrate an example axios call
  searchContacts: function(contact) {
    // return axios.request({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/users/1' 
    // });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json;
      }
    )
  }
};
