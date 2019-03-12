const { Contact: db } = require("../../models");
const { User: udb } = require("../../models");

module.exports = {
  // find all contacts with a birthday of a given month & day (and return with owning User)
  cueContactsByBirthdate: (month, day) => {
    dbContacts = db.Contact.find({
      birthMonth: month,
      birthDay: day,
    }).then(dbContacts => {
      // For each Contact found,  identify their parent
      dbContacts.map(contact => {
        console.log("contact userID:", contact.userID);
        udb.User.findById(contact.userID, function(err, user) {
          // for each parent,  add a cue for this contact's birthday
          console.log(
            "Birthday found: [" +
              user.email +
              ", " +
              contact.firstName +
              " " +
              contact.lastName +
              "]"
          );

          // Add it to the user's database of cues
          const cueStr =
            contact.firstName.trim() +
            " " +
            contact.lastName.trim() +
            " has a birthday today";
          udb.User.findOneAndUpdate(
            { _id: user._id },
            { cues: [cueStr] },
            function(err, affected, resp) {
              console.log(resp);
            }
          );
        });
      });
    });
  },
};
