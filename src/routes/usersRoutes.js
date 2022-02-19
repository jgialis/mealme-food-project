const express = require("express");
const router = express.Router();

const userControllers = require("./../controllers/usersControllers");

router
	.route("/")
	.get(userControllers.getUsers)
	.post(userControllers.createUser);

router.route("/:id").get(userControllers.getUser);

module.exports = router;
