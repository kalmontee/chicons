const router = require("express").Router();
const apartmentRoutes = require("./aparments");

// Book routes
router.use("/apartments", apartmentRoutes);

module.exports = router;