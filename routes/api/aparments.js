const router = require("express").Router();
const aptController = require("../../controllers/aptControllers");

// Matches with "/api/apartments"
router.route("/")
  .get(aptController.findAll)
  .post(aptController.create);

// Matches with "/api/apartments/:id"
router
  .route("/:id")
  .get(aptController.findById)
  .put(aptController.update)
  .delete(aptController.remove);

module.exports = router;