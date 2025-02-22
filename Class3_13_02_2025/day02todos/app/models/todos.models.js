const sql = require("./db.js");

// constructor for tasks
const ToDo = function(todos) {
    this.task = todos.task;
    this.dueDate = todos.dueDate;
    this.isDone = todos.isDone;
}

// creating a todo

ToDo.create = (newToDos, result) => {
    sql.query("INSERT INTO todos SET?", newToDos, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        console.log("Created a todo: ", {id: res.insertId, ...newToDos});
        result(null, {id: res.insertId, ...newToDos})
    })
};

// finding a todo by ID
ToDo.findById = (id, result) => {
    sql.query(`SELECT * FROM todos WHERE id = ${id}`, (err, res) => {
        // catching errors
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        // a todo was found
        if (res.length) {
            console.log("Found todos: ", res[0]);
            result(null, res[0]);
            return;
        }

        // no todos were found
        result({kind: "not_found"}, null);
    });
};

// return all todos by task, if any
ToDo.findAll = (task, result) => {
    let query = "SELECT * FROM todos ";
    console.log("Finding all todos with task: ", task);

    if (task) {
        // search based on the provided task
        query += ` WHERE task LIKE '%${task}%'`;
    }

    // Execute the query (even if there's no task filter)
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Todos: ", res);
        result(null, res);
    });
};



ToDo.update = (id, task, result) => {
    sql.query(
        "UPDATE todos SET task = ?, dueDate = ?, isDone = ? WHERE id = ?",
        [task.task, task.dueDate, task.isDone, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("Updated todo: ", { id: id, ...task });
            result(null, { id: id, ...task });
        }
    );
};


// delete a todo
ToDo.remove = (id, result) => {
    sql.query("DELETE FROM todos WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
/*problematic code: nothing actually get updated, we repalced a value with the same value
        if (res.affectedRows == 0) {
            // todo not found by ID
            result({kind: "not_found"}, null);
            return;
        }*/

        console.log("deleted todo with ID ", id);
        result(null, res);
    });
}

module.exports = ToDo;


