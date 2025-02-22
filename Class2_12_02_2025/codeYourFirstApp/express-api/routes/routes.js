// creating some fake users
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

const router = (app) => {
    // route for root
    app.get("/", (request, response) => {
        response.send({
            message: "Node.js and Express REST API",
        });
    });
    // route for users 
    app.get("/users", (request, response) => {
        response.send(users);
    });
};

// Export the router 
export default router;


