const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/contacts"
router.route("/").get(contactsController.findAll);

// Matches with "/api/contacts/:id"
router.route("/:id").get(contactsController.findById);

// Matches with "/api/contacts/birthdate/:birthmonth/:birthday"
router.route("/birthdate/:month/:day").get(contactsController.findByBirthday);

module.exports = router;
