import axios from "axios";

export default {
    //gets user info
    getUser: function() {
        return axios.get("/api/user" + id, userData);
    },

    // creates a new user
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    // updateUser: function(id) {
    //     return axios.put("/api/user/" + id, function(req, res) {});
    // },

    // Gets all contacts
    getContacts: function() {
        return axios.get("/api/user/" + id + "/contacts");
    },

    // Gets the contact with the given id
    getContact: function(id) {
        return axios.get("/api/user/" + id + "/contacts/" + contactid);
    },

    // Deletes the contact with the given id
    deleteContact: function(id) {
        return axios.delete("/api/user/" + id + "/contacts/" + contactid);
    },

    // Saves a contact to the database
    saveContact: function(contactData) {
        return axios.post("/api/user/" + id + "/contacts", contactData);
        // function(req, res) {
        //   // Create a new comment and pass the req.body to the entry
        //   var newContact = new Contact(req.body);
        //   // And save the new comment the db
        //   newContact.save(function(error, newContact) {
        //     // Log any errors
        //     if (error) {
        //       console.log(error);
        //     }
        //     // Otherwise
        //     else {
        //       // Use the article id to find and update it's comment
        //       User.findOneAndUpdate({ "_id": req.params.id }, { $push: { "contacts": newContact._id }})
        //       // Execute the above query
        //       .exec(function(err, doc) {
        //         // Log any errors
        //         if (err) {
        //           console.log(err);
        //         }
        //         else {
        //           console.log("doc: ", doc);
        //           // Or send the document to the browser
        //           res.send(doc);
        //         }
        //       });
        //     }
        //   })
        //   })
    },

    // Search for contact(s) from a lorem site -- merely to demonstrate an example axios call
    searchContacts: function(contact) {
        // return axios.request({
        //   method: 'get',
        //   url: 'https://jsonplaceholder.typicode.com/users/1'
        // });

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json;
            });
    },

    //creates a new event
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData);
    },

    // Get all events
    getEvents: function() {
        return axios.get("/api/events");
    },
};
