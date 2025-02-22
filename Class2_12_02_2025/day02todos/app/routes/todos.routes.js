module.exports = app => {
    const todo = require("../controllers/todos.controller.js");

    var router = require("express").Router();

    // create a new todo (method POST)
    router.post("/", todo.create);

    // retrieve all existing todos (method GET)
    router.get("/", todo.findAll);

    // retrieve only one todo by ID (method GET)
    router.get("/:id", todo.findOne);

    // update a todo by ID (method PUT)
    router.put("/:id", todo.update);

    // delete a todo by ID (method DELETE)
    router.delete("/:id", todo.delete);

    // delete all todos (method DELETE)
    //router.delete("/:", todo.deleteAll);

    app.use('/api/todos', router);
    // can be a collection of different routes e.g. /api/xyz
};