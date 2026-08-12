"use strict";
// npm i --save-dev @types/node
// install it
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const TodoList = [];
async function main() {
    while (true) {
        console.log("1. Add Todo");
        console.log("2. View Todos");
        console.log("3. Update Todo");
        console.log("4. Delete Todo");
        console.log("5. Exit");
        const choice = await askQuestion("Enter your choice: ");
        switch (choice) {
            case "1": {
                const title = await askQuestion("Enter todo title: ");
                addTodo(title);
                break;
            }
            case "2":
                viewTodos();
                break;
            case "3": {
                const id = await askQuestion("Enter todo ID to update: ");
                const numericId = parseInt(id);
                await updateTodo(numericId);
                break;
            }
            case "4": {
                const id = await askQuestion("Enter todo id: ");
                const numericId = parseInt(id);
                deleteTodo(numericId);
                break;
            }
            case "5":
                console.log("Exiting...");
                rl.close();
                return;
        }
    }
}
main();
function askQuestion(msg) {
    return new Promise((resolve) => {
        rl.question(msg, (answer) => {
            resolve(answer);
        });
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
async function updateTodo(id) {
    const todo = TodoList.find(todo => todo.id === id);
    if (todo) {
        const newTitle = await askQuestion("Enter new title: ");
        todo.title = newTitle;
        console.log("Todo updated successfully!");
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
