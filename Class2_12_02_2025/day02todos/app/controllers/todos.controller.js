// requiring daysjs for date validation
// modern alternative to 'moment'
let daysjs = require('dayjs');

const ToDo = require("../models/todos.models");

// create and save a new todo
exports.create = (req, res) => {

    //validating the body of submitted todo
    if (!req.body) {
        res.status(400).send({
            message: "A todo cannot be empty, please try again."
        });
    }

    var isValidResult = isValid(req, res);
    // validation passed
    if (isValidResult === true) {
        // create a new todo
        const todo = new ToDo({
            task: req.body.task,
            dueDate: req.body.dueDate,
            isDone: req.body.isDone || 'Pending'
        });

        // saving new todo in DB
        ToDo.create(todo, (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Oops! An error occured while creating your todo."
                });
            else res.status(201).send(data);
        });
    }
}

// retrieve one todo from DB by ID
exports.findOne = (req, res) => {
    ToDo.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: `Todo with ID = ${req.params.id} not found. `
                });
            } else {
                res.status(500).send({
                    message: "Oops! An error occured while retrieving your todo with ID = ." + req.params.id
                });
            }
        } else res.status(200).send(data);
    });
}

// retreive all todos from DB
exports.findAll = (req, res) => {
    const task = req.query.task;

    ToDo.findAll(task, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Oops! An error occured while retrieving your todos."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

// update a todo by ID 
exports.update = (req, res) => {

//debugging for empty body
console.log("Update requested: ", req.body);

    // request validation 
    if (!req.body || req.body.length === 0) {
        res.status(400).send({
            message: "A todo cannot be empty. Please try again."
        });
    }

    //logging request contents
    console.log(req.body);


    ////////TO DO: add validation that record exists 

    if (isValid(req, res)) {
        ToDo.update(
            req.params.id,
            new ToDo(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Todo with ID = ${req.params.id} not found.`
                        });
                    } else {
                        res.status(500).send({
                            message: "An error occurred while updating todo with ID = " + req.params.id
                        });
                    }
                } else res.status(200).send(true);
            }
        );
    }
}

// deleting a todo by ID
exports.delete = (req, res) => {
    ToDo.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Didn't find todo with ID = ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Couldn't delete todo with ID = " + req.params.id
                });
            }
        } else res.status(200).send({
            message: true
        });
    });
};

function isValid(req, res) {
    //var year = req.body.dueDate.slice(0, 4);    this causes issues in Postman

    /*

this is date validation with JS Date object
it works but we want to use dayjs (alternative to 'moment')

    // converting String into Date JS object
    const dueDate = new Date(req.body.dueDate);
    // validating date format
    if (isNaN(dueDate.getTime())) {
        res.status(400).send({
            message: "Invalid date format. Please try again."
        });
        return false;
    }
    // isolating year from Date JS object 
    const year = dueDate.getFullYear();
    */

    // date validation with daysjs

    const dueDate = req.body.dueDate;

    let result = daysjs(dueDate, 'DD-MM-YYYY', true);

    // splitting date into DD, MM and YYYY components
    const year = daysjs(dueDate, 'DD-MM-YYYY').year();
    const month = daysjs(dueDate, 'DD-MM-YYYY').month();
    const day = daysjs(dueDate, 'DD-MM-YYYY').date();

    if (!result.isValid) {
        res.status(400).send({
            message: "Invalid date format. Please provide date as DD-MM-YYYY."
        });
        return false;
    }

    // debugging the date
    console.log(result)

    // SQL demands date in YYYY-MM-DD format
    const formattedDate = result.format('YYYY-MM-DD');
    req.body.dueDate = formattedDate;

    if (req.body.id) {
        res.status(400).send({
            message: "Please do not provide an ID, the app will take care of that. Thank you!",
            result: false
        })
        //console.log("isValid: ", res)
        return false;
    }


    if (req.body.task.length < 1 || req.body.task.length > 100) {
        res.status(400).send({
            message: "A task can be between 1 and 100 characters in length. Please try again!"
        });
        return false;
    }

    if (year < 1900 || year > 2099) {
        res.status(400).send({
            message: "The years allowed are between 1900 and 2099. Please try again!"
        });
        return false;
    }

    // we could use includes() JS method if more than 2 values
    if (req.body.isDone != "Pending" && req.body.isDone !== "Done") {
        res.status(400).send({
            message: "A todo can only be either 'Pending' or 'Done'. Please try again!"
        });
        return false;
    }

    // If all validations pass
    return true;
    console.log("All validations passed, hooray.")
}