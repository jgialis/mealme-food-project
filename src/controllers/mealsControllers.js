const fs = require("fs");

const mealsJSON = JSON.parse(
	fs.readFileSync(`${__dirname}/../../data/meals/meals.json`)
);

exports.getMeal = (req, res) => {
	// Could have an array of meals and use Array.find()
	// and search for meal like that to return object in json.
	res.status(200).send(`Sending information regarding meal ${req.params.id}`);
};
exports.getMeals = (req, res) =>
	res.status(200).json({
		status: "success",
		data: mealsJSON,
	});
exports.createMeal = (req, res) => {
	console.log("Received a POST meal request...");
	console.log(req.body);
	res.status(200).send("Successfully createed meal!");
};
