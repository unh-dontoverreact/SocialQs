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
// Matches with "/api/users/:id"
router
  .route("/:id/contacts")
  // .put(usersController.update)
  //     .delete(usersController.remove)
  .post(contactsController.create)
  .get(contactsController.findAll);

router.route("/:id/contacts/:contactid").delete(contactsController.remove);

//Matches with "/api/user/:id/events"
router
  .route("/:id/events")
  .post(eventsController.create)
  .get(eventsController.findAll);

module.exports = router;
