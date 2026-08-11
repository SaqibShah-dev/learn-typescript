// npm i --save-dev @types/node
// install it
import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const TodoList = [];
while (true) {
    console.log("1. Add Todo");
    console.log("2. View Todos");
    console.log("3. Update Todo");
    console.log("4. Delete Todo");
    console.log("5. Exit");
    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter todo title: ", (title) => {
                    addTodo(title);
                });
                break;
            case "2":
                viewTodos();
                break;
            case "3":
                rl.question("Enter todo ID to Update : ", (id) => {
                    updateTodo(parseInt(id));
                });
                break;
            case "4":
                rl.question("Enter todo id: ", (id) => {
                    deleteTodo(parseInt(id));
                });
                break;
            case "5":
                console.log("Exiting...");
                rl.close();
                break;
        }
    });
}
function addTodo(title) {
    const newTodo = {
        id: TodoList.length + 1,
        title: title,
        status: "active"
    };
    TodoList.push(newTodo);
    console.log("Todo added successfully!");
}
function viewTodos() {
    for (let todo of TodoList) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Status: ${todo.status}`);
    }
}
function updateTodo(id) {
    const todo = TodoList.find(todo => todo.id === id);
    if (todo) {
        rl.question("Enter new title: ", (newTitle) => {
            todo.title = newTitle;
            console.log("Todo updated successfully!");
        });
    }
    else {
        console.log("Todo not found!");
    }
}
function deleteTodo(id) {
    const index = TodoList.findIndex(todo => todo.id === id);
    if (index !== -1) {
        TodoList.splice(index, 1);
        console.log("Todo deleted successfully!");
    }
    else {
        console.log("Todo not found!");
    }
}
