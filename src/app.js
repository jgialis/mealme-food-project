const express = require("express");
const fs = require("fs");
const app = express();

// MIDDLEWARES
app.use(express.json());

const usersJSON = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/users/users.json`)
);
const mealsJSON = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/meals/meals.json`)
);

app.get("/api/v1/users", (req, res) =>
	res.status(200).json({
		status: "success",
		data: usersJSON,
	})
);
app.get("/api/v1/users/:id", (req, res) => {
	// Could have an array of users and use Array.find()
	// and search for user like that to return object in json.
	res.status(200).send(`Sending information regarding user ${req.params.id}`);
});
app.post("/api/v1/users", (req, res) => {
	console.log("Received a POST users request...");
	console.log(req.body);
	res.status(200).send("Successfully added user!");
});

app.get("/api/v1/meals", (req, res) =>
	res.status(200).json({
		status: "success",
		data: mealsJSON,
	})
);
app.get("/api/v1/meals/:id", (req, res) => {
	// Could have an array of meals and use Array.find()
	// and search for meal like that to return object in json.
	res.status(200).send(`Sending information regarding meal ${req.params.id}`);
});
app.post("/api/v1/meals", (req, res) => {
	console.log("Received a POST meal request...");
	console.log(req.body);
	res.status(200).send("Successfully added meal!");
});

app.listen(3000, () => console.log(`Listening for requests...`));
