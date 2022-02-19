const fs = require("fs");

const usersJSON = JSON.parse(
	fs.readFileSync(`${__dirname}/../../data/users/users.json`)
);

exports.getUsers = (req, res) =>
	res.status(200).json({
		status: "success",
		data: usersJSON,
	});
exports.getUser = (req, res) => {
	// Could have an array of users and use Array.find()
	// and search for user like that to return object in json.
	res.status(200).send(`Sending information regarding user ${req.params.id}`);
};
exports.createUser = (req, res) => {
	console.log("Received a POST users request...");
	console.log(req.body);
	res.status(200).send("Successfully createed user!");
};
