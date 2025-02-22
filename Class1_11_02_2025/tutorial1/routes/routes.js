const router = (app) => {
	app.get("/", (request, response) => {
		response.send({
			message: "Node.js and Express REST API"
		});
	});

	const users = [{
			id: 1,
			name: "Richard Hendricks",
			email: "richard@piedpiper.com",
		},
		{
			id: 2,
			name: "Bertram Gilfoyle",
			email: "gilfoyle@piedpiper.com",
		},
	];

	app.get("/users", (request, response) => {
		response.send(users);
	});
};

export default router;
