const router = require("express").Router();
const aptController = require("../../controllers/aptControllers");


router
  .route("/test")
  .get(aptController.findFav)

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

router
  .route("/googlePlaces/:search")
  .get(aptController.googlePlaces)

module.exports = router;