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

router
  .route("/google/:search")
  .get(aptController.google);

// router
// .route("/firebase/:apiKey")
// .get(aptController.firebase);

// console.log(router.route("/firebase")
// .get(aptController.firebase));

module.exports = router;