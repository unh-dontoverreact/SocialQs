const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const contactsController = require("../../controllers/contactsController");
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/user"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/:id/contacts"
router
  .route("/:id/contacts")
  .post(contactsController.create)
  .get(contactsController.findAll);

// Matches with "/api/users/:id/contacts/:contactsid"
router
  .route("/:id/contacts/:contactid")
  .delete(contactsController.remove)
  .put(contactsController.update);

//Matches with "/api/user/:id/events"
router
  .route("/:id/events")
  .post(eventsController.create)
  .get(eventsController.findAll);

//Matches with "/api/user/:id/events/:eventId"
router
  .route("/:id/events/:eventid")
  .get(eventsController.findById)
  .delete(eventsController.remove)
  .put(eventsController.update);

module.exports = router;
