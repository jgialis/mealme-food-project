const express = require("express");
const router = express.Router();
const mealsControllers = require("./../controllers/mealsControllers");

router
	.route("/")
	.get(mealsControllers.getMeals)
	.post(mealsControllers.createMeal);

router.route("/:id").get(mealsControllers.getMeal);

module.exports = router;
